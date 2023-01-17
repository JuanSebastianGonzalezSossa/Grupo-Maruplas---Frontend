import { Grid} from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { usePedidos } from '../../hooks/usePedidos'
import { NothingSelectedView } from '../components/NothingSelectedView'
import {ResponsiveDrawer} from '../components/sidebar'
import { TableComponent } from '../components/TableComponent'
import { columnas } from '../data/columnsPedidos'

export const Pedidos = () => {

    const api = "pedidos";

    const { getPedidos } = usePedidos();

    const { pedidos } = useSelector(state => state.producto);

    useEffect(() => {
        getPedidos()
    }, [])
    

    return (
        <Grid
            component="main"
            alignItems="flex-start"
            sx={{ display: 'flex', padding: 4, minHeight: '100%', minwidth: '100%', backgroundColor: 'primary.main', borderRadius: 3 }}
            className='animate__animated animate__fadeIn animate__faster'>
            <ResponsiveDrawer />

            {Object.keys(pedidos).length === 0 ? <NothingSelectedView />
                : <TableComponent columnas={columnas} filas={pedidos} api={api}/>}

        </Grid>
    )
}