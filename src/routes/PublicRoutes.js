import { LoginScreen } from "../Components/LoginScreen/LoginScreen"
import { Routes, Route, Navigate } from 'react-router-dom';
import { RegisterScreen } from "../Components/RegisterScreen/RegisterScreen";

export const PublicRoutes = () => {

    return (
        <>
            <Routes>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </>
    )
}