import { LoginScreen } from "../Components/LoginScreen/LoginScreen"
import { Routes, Route, Navigate } from 'react-router-dom';


export const PublicRoutes = () => {



    return (
            <>                
                <Routes>
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes> 
            </> 
    )
}