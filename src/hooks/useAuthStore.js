import { useDispatch, useSelector } from "react-redux"
import { serviceMaruplas } from "../Apis";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/auth/authSlice";
import { onOpenSuccess, onCloseSuccess } from "../store/ui/uiSlice";

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {
        dispatch(onChecking());
        try {
            const { data } = await serviceMaruplas.post('/auth', { email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ name: data.name, uid: data.uid }));
        } catch (error) {
            dispatch(onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }

    const startRegister = async ({ name, rol, email, password }) => {

        try {
            const { data } = await serviceMaruplas.post('/auth/new', { name, rol, email, password });
            console.log(data)
            if (data.ok) {
                dispatch(onOpenSuccess('¡Se ha registrado con Asesor con exito!'))
            } else { dispatch(onOpenSuccess('¡Fallo el registro!')) }
            
        } catch (error) {
            setTimeout(() => {
                console.log("Error :", error)
                dispatch(onCloseSuccess())
            }, 10);
        }
    }

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token')

        if (!token) return dispatch(onLogout());

        try {
            const { data } = await serviceMaruplas.get('auth/renew')
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ name: data.name, uid: data.uid }));
        } catch (error) {
            localStorage.clear();
            dispatch(onLogout());
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogout());
    }

    //Propiedades
    return {
        status,
        user,
        errorMessage,

        //metodos
        startLogin,
        checkAuthToken,
        startLogout,
        startRegister

    }

}