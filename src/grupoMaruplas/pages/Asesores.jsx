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

    const { message, isSuccessOpen, onCloseSuccess } = useSelector(state => state.ui);

    const onOpenModal = () => {
        console.log('Abriendo modal');
        openDateModal();
    }

    useEffect(() => {
        getUser();
    }, [])

    useEffect(() => {
        if (isSuccessOpen) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: "¡Se ha registrado con exito!",
                showConfirmButton: false,
                timer: 2000
              })
              onCloseSuccess
        }
      }, [])
      

    return (
        <Box
            component="main"
            alignItems="flex-start"
            sx={{ display: 'flex', minHeight: '100%', minwidth: '100%', backgroundColor: 'white', borderRadius: 3 }}
            className='animate__animated animate__fadeIn animate__faster'>
            <ResponsiveDrawer />

                {Object.keys(users).length === 0 ? <NothingSelectedView />
                    : <AsesorGrid data={users} />}

            <IconButton
                size='large'
                sx={{
                    color: 'third.main',
                    backgroundColor: 'fifth.main',
                    ':hover': { backgroundColor: 'fifth.main', opacity: 0.8 },
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