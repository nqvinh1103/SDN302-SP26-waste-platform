import { Label } from "@/components/ui/label.tsx"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group.tsx"
import { cn } from "@/lib/utils.ts"

type RoleOption<T extends string = string> = {
  value: T
  label: string
  description?: string
  icon: string
}

type RoleSelectorProps<T extends string> = {
  value: T
  onValueChange: (value: T) => void
  options: RoleOption<T>[]
  label?: string
  columns?: 2 | 3
}

export function RoleSelector<T extends string>({
  value,
  onValueChange,
  options,
  label = "Select role:",
  columns = 3,
}: RoleSelectorProps<T>) {
  return (
    <div className="flex flex-col gap-2">
      <Label className="text-sm">{label}</Label>
      <RadioGroup
        value={value}
        onValueChange={onValueChange}
        className={cn(
          "grid grid-cols-1 gap-3",
          columns === 2 && "sm:grid-cols-2",
          columns === 3 && "sm:grid-cols-3"
        )}
      >
        {options.map((opt) => (
          <Label
            key={opt.value}
            htmlFor={`role-${opt.value}`}
            className={cn(
              "relative flex cursor-pointer flex-col gap-2 rounded-xl border-2 p-3 transition-all hover:border-gc-primary/70",
              value === opt.value
                ? "border-gc-primary bg-gc-primary/5"
                : "border-border bg-background"
            )}
          >
            <RadioGroupItem
              id={`role-${opt.value}`}
              value={opt.value}
              className="absolute right-2 top-2 size-4 border border-input focus:ring-2 focus:ring-gc-primary/50"
            />
            <div className={cn(value === opt.value ? "text-gc-primary" : "text-muted-foreground")}>
              <span className="material-symbols-outlined text-[22px]">{opt.icon}</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-bold leading-tight whitespace-nowrap">{opt.label}</span>
              {opt.description && (
                <span className="text-[10px] text-muted-foreground leading-tight">{opt.description}</span>
              )}
            </div>
          </Label>
        ))}
      </RadioGroup>
    </div>
  )
}
