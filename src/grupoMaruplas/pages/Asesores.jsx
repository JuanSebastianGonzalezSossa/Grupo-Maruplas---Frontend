import { Box, Grid, IconButton, Typography } from '@mui/material'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import React from 'react'
import { useUiStore } from '../../hooks/useUiStore';
import { ResponsiveDrawer } from '../components/sidebar'
import { ModalRegistrarAsesor } from '../views/ModalRegistrarAsesor';
import { useEffect } from 'react';
import { useUsers } from '../../hooks/useUsers';
import { useDispatch, useSelector } from "react-redux"
import { NothingSelectedView } from '../components/NothingSelectedView';
import { AsesorGrid } from '../components/asesoresGrid'
import Swal from 'sweetalert2';
import { clearStateMessage } from '../../store';

export const Asesores = () => {

    const { openDateModal } = useUiStore();

    const { getUser } = useUsers();

    const { users, state } = useSelector(state => state.user);

    const { message, isSuccessOpen } = useSelector(state => state.ui);

    const onOpenModal = () => {
        console.log('Abriendo modal');
        openDateModal();
    }

    useEffect(() => {
            getUser();
    }, [])

    useEffect(() => {
        if (message !== undefined) {
          Swal.fire( message )
        }
      }, [message])
      

    return (
        <Box
            component="main"
            alignItems="flex-start"
            sx={{ display: 'flex', minHeight: '100%', minwidth: '100%', backgroundColor: 'white', borderRadius: 3 }}
            className='animate__animated animate__fadeIn animate__faster'>
            <ResponsiveDrawer />

            <Grid item
                direction="row"
                alignItems="flex-start"
                className='box-shadow'
                xs={3}
                sx={{
                    marginTop: 2,
                    backgroundColor: 'white',
                    padding: 4,
                    borderRadius: 3
                }}>

                {Object.keys(users).length === 0 ? <NothingSelectedView />
                    : <AsesorGrid data={users} />}

            </Grid>
            <IconButton
                size='large'
                sx={{
                    color: 'white',
                    backgroundColor: 'primary.main',
                    ':hover': { backgroundColor: 'primary.main', opacity: 0.8 },
                    position: 'fixed',
                    right: 50,
                    bottom: 30
                }}
                onClick={onOpenModal}
            >
                <AddOutlinedIcon sx={{ fontSize: 30 }} />

            </IconButton>

            <ModalRegistrarAsesor />
        </Box>
    )
}