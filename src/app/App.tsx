import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useAuth } from "@/hooks/useAuth.ts"

function App() {
  const { checkAuth, isInitialized } = useAuth()

  useEffect(() => {
    checkAuth()
  }, [])

  // Show loading while checking auth
  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="size-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  return <Outlet />
}

export default App
