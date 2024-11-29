/* eslint-disable react/prop-types */

import { useAuth } from "../../provider/AuthProvider"

const AuthenticatedRoutes = ({ children }) => {
    const {isAuth} = useAuth()
    if (isAuth()===true) {
        return <>{children}</>
    }
    return (
        <div> Not Authenticated please Login</div>
    )
}

export default AuthenticatedRoutes