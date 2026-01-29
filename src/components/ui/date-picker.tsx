import { useState } from "react"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils.ts"
import { Button } from "@/components/ui/button.tsx"
import { Calendar } from "@/components/ui/calendar.tsx"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover.tsx"

interface DatePickerProps {
  date?: Date
  onDateChange: (date: Date | undefined) => void
  placeholder?: string
  disabled?: boolean
  className?: string
}

export function DatePicker({
  date,
  onDateChange,
  placeholder = "Select date",
  disabled = false,
  className,
}: DatePickerProps) {
  const [open, setOpen] = useState(false)

  const handleSelect = (selectedDate: Date | undefined) => {
    onDateChange(selectedDate)
    setOpen(false) // Auto-close on select
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          disabled={disabled}
          className={cn(
            "w-full justify-start text-left font-normal h-9",
            !date && "text-muted-foreground",
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? date.toLocaleDateString() : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto overflow-hidden p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          defaultMonth={date}
          captionLayout="dropdown"
          onSelect={handleSelect}
          disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
          fromYear={1900}
          toYear={new Date().getFullYear()}
        />
      </PopoverContent>
    </Popover>
  )
}
