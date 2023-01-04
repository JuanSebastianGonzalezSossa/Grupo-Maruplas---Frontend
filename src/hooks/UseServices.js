import { serviceMaruplas } from "../Apis";
import { useDispatch, useSelector } from "react-redux"
import { onClientes, onRutas, onAddNewRutas, onUpdateRutas, onAddNewCliente, onUpdateCliente, onProductos, onUpdateProductos, onAddNewProductos, onAddNewUser } from "../store";
import Swal from "sweetalert2";
import { fileUpload } from "../helpers/FileUpload";

export const useServices = () => {

    const dispatch = useDispatch();

    const { user } = useSelector(state => state.auth);

    const getClientes = async () => {
        try {
            const { data } = await serviceMaruplas.get('/customers');
            dispatch(onClientes(data.customers));
        } catch (error) {

            console.log(error)
        }
    }

    const savingClientes = async (values) => {
        console.log(values)
        try {
            if (values.id) {
                // Actualizando
                const { data } = await serviceMaruplas.put(`/customers/${values.id}`, values);
                console.log(values)
                dispatch(onUpdateCliente({ ...values, user }));
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
            // Creando
            const { data } = await serviceMaruplas.post('/customers', values);
            console.log(data);
            dispatch(onAddNewCliente({ ...values, id: values.id, user }));
            if (data.ok) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
            }

        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }


    }

    const startDeletingClientes = async (values, api) => {

        try {
            const { data } = await serviceMaruplas.delete(`/${api}/${values.id}`);
            dispatch(onClientes({ ...values, user }));
            console.log(data)
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

    const getRutas = async () => {
        try {
            const { data } = await serviceMaruplas.get('/rutas');
            console.log(data)
            dispatch(onRutas(data.rutas));
        } catch (error) {
            console.log(error)
        }
    }

    const savingRutas = async (values) => {
        console.log(values)
        try {
            if (values.id) {
                // Actualizando
                const { data } = await serviceMaruplas.put(`/rutas/${values.id}`, values);
                console.log(values)
                dispatch(onUpdateRutas({ ...values, user }));
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
            // Creando
            const { data } = await serviceMaruplas.post('/rutas', values);
            console.log(data);
            dispatch(onAddNewRutas({ ...values, id: values.id, user }));
            if (data.ok) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
            }

        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }


    }

    const startDeletingRuta = async (values, api) => {
        try {
            const { data } = await serviceMaruplas.delete(`/${api}/${values._id}`);

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

    const getProductos = async () => {
        try {
            const { data } = await serviceMaruplas.get('/products');
            console.log(data)
            dispatch(onProductos(data.productos));
        } catch (error) {
            console.log(error)
        }
    }

    const savingProductos = async (values, file = []) => {

        try {
            if (values.id) {
                // Actualizando
                const imagen = await fileUpload(file[0], 'maruplas');
                const { data } = await serviceMaruplas.put(`/products/${values.id}`, values, imagen);
                console.log(data.productos)
                dispatch(onProductos(data.productos));
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
            //Creando

            const { data } = await serviceMaruplas.post('/products', { nombre: values.nombre.toLowerCase(), imagenURL: `${imagen}`, cantidad: values.cantidad, precio: values.precio, descripcion: values.descripcion, referencia: values.referencia });

            dispatch(onAddNewProductos({ ...values, id: values.id, imagenURL: imagen, user }));
            if (data.ok) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
            }

        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }


    }

    const DeletingProductos = async (values) => {
        try {
            const { data } = await serviceMaruplas.delete(`/products/${values.id}`);
            console.log(data)
            dispatch(onProductos(data.productos));
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

    return {
        //metodos
        getClientes,
        getRutas,
        savingRutas,
        startDeletingRuta,
        savingClientes,
        startDeletingClientes,
        getProductos,
        savingProductos,
        DeletingProductos
    }
}