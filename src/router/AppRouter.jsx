import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/router/AuthRoutes';

import { MaruplasRoutes } from '../grupoMaruplas/routes/MaruplasRoutes';
import { useAuthStore } from '../hooks/useAuthStore';
//import { CheckingAuth } from '../ui/';
// import { useCheckAuth } from '../hooks';


export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, [])

    if (status === 'checking') {
        return (
            <h3>cargando...</h3>
        )
    }

    return (
        <Routes>
            {
                (status === 'not-authenticated')
                    ? <Route path="/auth/*" element={<AuthRoutes />} />
                    : <Route path="/*" element={<MaruplasRoutes />} />
            }

            { <Route path='/*' element={<Navigate to='/auth/login' />} /> }

        </Routes>
    )
}
