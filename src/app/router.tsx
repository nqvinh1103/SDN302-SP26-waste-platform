import { AuthLayout } from "@/layouts/AuthLayout.tsx"
import { Login } from "@/pages/auth/Login.tsx"
import { Register } from "@/pages/auth/Register.tsx"
import { Landing } from "@/pages/Landing.tsx"
// import { ProtectedRoute } from "@/components/auth/ProtectedRoute.tsx"
import type { RouteObject } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"
import App from "./App"

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      // Public routes
      { index: true, element: <Landing /> },
      {
        element: <AuthLayout />,
        children: [
          { path: "login", element: <Login /> },
          { path: "register", element: <Register /> },
        ],
      },
      // Protected routes (example - add your actual protected pages here)
      // {
      //   path: "dashboard",
      //   element: (
      //     <ProtectedRoute>
      //       <Dashboard />
      //     </ProtectedRoute>
      //   ),
      // },
      // Admin only route example:
      // {
      //   path: "admin",
      //   element: (
      //     <ProtectedRoute requiredRole="SUPER_ADMIN">
      //       <AdminPanel />
      //     </ProtectedRoute>
      //   ),
      // },
    ],
  },
]

export const router = createBrowserRouter(routes)
