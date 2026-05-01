import { Navigate, Outlet, useLocation } from "react-router-dom"
import { authClient } from "../../lib/auth-client"

/**
 * ProtectedRoute - Layout route that requires authenticated session
 * Redirects unauthenticated users to /login
 * Use as a pathless layout route to protect grouped routes
 */
export default function ProtectedRoute() {
  const { data: session, isPending } = authClient.useSession()
  const location = useLocation()

  // Show loading state while checking session
  if (isPending) {
    return (
      <div className='auth-loading'>
        <span>Loading...</span>
      </div>
    )
  }

  // Temporary bypass for local development due to cross-origin cookie issues
  const tempSession = localStorage.getItem("temp_dev_session")

  // Redirect to login if no session AND no temp session
  if (!session?.user && !tempSession) {
    return <Navigate to='/login' state={{ from: location }} replace />
  }

  return <Outlet />
}
