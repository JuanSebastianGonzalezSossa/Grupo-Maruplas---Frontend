import { serviceMaruplas } from "../Apis";
import { useDispatch } from "react-redux"
import { onCliente, onRutas } from "../store";

export const useServices = () => {

    const dispatch = useDispatch();

    const getClientes = async () => {
        try {
            const { data } = await serviceMaruplas.get('/customers');
            dispatch(onCliente(data));
        } catch (error) {
            
            console.log(error)
        }
    }

    const getRutas = async () => {
        try {
            const { data } = await serviceMaruplas.get('/rutas');
            dispatch(onRutas(data.rutas));
            console.log(data.rutas)
        } catch (error) {
            console.log(error)
        }
    }


    return {
        //metodos
        getClientes,
        getRutas
    }
}