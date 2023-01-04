import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2";
import { serviceMaruplas } from "../Apis";
import { onAddNewUser, onUser } from "../store";
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

    const startRegister = async (values) => {

        try {
            const { data } = await serviceMaruplas.post('/auth/new', values );
            dispatch(onAddNewUser({...values, id: values.id, user }));
            if(data.ok){
                dispatch(onOpenSuccess('¡Se ha registrado con Asesor con exito!'))
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }
    }

    const startDeletingAsesor = async (values, api) => {
        try {
            const { data } = await serviceMaruplas.delete(`/${api}/${values._id}`);
            console.log(data)
            dispatch(onUser(data.usuarios));
            if (data.ok) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }

        } catch (error) {
            console.log(error);
            Swal.fire('Error al eliminar', error.response.data.msg, 'error');
        }

    }

    const savingUsuarios = async (values) => {
        console.log(values)
        try {
            if (values._id) {
                // Actualizando
                const { data } = await serviceMaruplas.put(`/auth/${values._id}`, values);
                console.log(data)
                dispatch(onUser(data.usuarios));
                if (data.ok) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                return;
            }
        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
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
        startRegister,
        startDeletingAsesor,
        savingUsuarios

    }

}