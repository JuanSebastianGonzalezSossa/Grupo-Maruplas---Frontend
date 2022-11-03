import { Grid, IconButton, Typography } from '@mui/material'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import React from 'react'
import { useUiStore } from '../../hooks/useUiStore';
import { ResponsiveDrawer } from '../components/sidebar'
import { ModalRegistrarAsesor } from '../views/ModalRegistrarAsesor';

export const Asesores = () => {

    const { openDateModal } = useUiStore();

    const onOpenModal = () => {
        console.log('Abriendo modal');
        openDateModal();
    }

    return (
        <Grid
            className='animate__animated animate__fadeIn animate__faster'
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >
            <ResponsiveDrawer />
            <Grid item
                alignItems="center"
                textAlign="center"
                className='box-shadow'
                xs={3}
                sx={{
                    width: { sm: 380 },
                    backgroundColor: 'white',
                    padding: 2,
                    borderRadius: 3
                }}>

                <Typography variant='h5' sx={{ mb: 1, fontFamily: 'Vegur, Verdana, sans-serif' }}>Asesores</Typography>

            </Grid>
            <IconButton
                size='large'
                sx={{
                    color: 'white',
                    backgroundColor: 'purple',
                    ':hover': { backgroundColor: 'purple', opacity: 0.9 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
                onClick={onOpenModal}
            >
                <AddOutlinedIcon sx={{ fontSize: 30 }} />

            </IconButton>

            <ModalRegistrarAsesor/>
        </Grid>
    )
}