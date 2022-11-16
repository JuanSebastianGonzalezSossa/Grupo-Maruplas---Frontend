export const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'nombre',
        headerName: 'Nombre',
        width: 160, description: 'Esta columna muestra los nombres de la ruta.'
    },
    {
        field: 'ciudad',
        headerName: 'Ciudad',
        width: 160, description: 'Esta columna muestra la ciudad de la ruta.'
    },
    {
        field: 'descripcion',
        headerName: 'Descripción',
        width: 150, description: 'Esta columna muestra una breve descripcin de la ruta.'
    },
    {
        field: 'asesor',
        headerName: 'Asesor',
        width: 150, description: 'Esta columna muestra el asesor asociado a esa ruta.'
    },
    {
        field: 'actions', headerName: 'Actions',
        width: 130,
        description: 'En esta columna puede editar o eliminar el cliente.',
        sortable: false,
    },
];