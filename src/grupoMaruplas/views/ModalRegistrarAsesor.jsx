import { Grid, IconButton, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from '../../hooks/useForm';
import Modal from 'react-modal';
import '../styles/stylesModal.css'
import { Cancel, Save } from '@mui/icons-material';
import { useUiStore } from '../../hooks/useUiStore';


Modal.setAppElement('#root');

export const ModalRegistrarAsesor = () => {

    const { isDateModalOpen, closeDateModal } = useUiStore();

    const { nombre, correo, celular, onInputChange } = useForm({
        nombre: '',
        correo: '',
        celular: '',
    });

    const onSubmit = ( event ) => {
        event.preventDefault();
        console.log(nombre, correo, celular)
      }

      const onCloseModal = () => {
        console.log('Cerrando modal');
        closeDateModal();
    }

   
    return (
        <Modal
            isOpen={isDateModalOpen}
            onRequestClose={onCloseModal}
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}
        >
            <Typography variant='h4' noWrap component='div'> Registrar Asesor </Typography>
            <hr />
            <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
                <Grid container direction='column' justifyContent='center'>
                    <Grid >
                        <Grid style={{ width: '100%', padding: '10px' }}>
                            <TextField
                                label="Nombre"
                                type="text"
                                placeholder='Susana Restrepo'
                                fullWidth
                                name="nombre"
                                value={nombre}
                                onChange={onInputChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid >
                        <Grid style={{ width: '100%', padding: '10px' }}>
                            <TextField
                                label="Correo"
                                type="text"
                                placeholder='Correo@GrupoMaruplas.com'
                                fullWidth
                                name="correo"
                                value={correo}
                                onChange={onInputChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid >
                        <Grid style={{ width: '100%', padding: '10px' }}>
                            <TextField
                                label="Celular"
                                type="number"
                                placeholder='3137252867'
                                fullWidth
                                name="celular"
                                value={celular}
                                onChange={onInputChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid >
                        <Grid container direction='row' justifyContent='center'>
                            <IconButton
                                size='large'
                                sx={{
                                    color: 'white',
                                    backgroundColor: 'purple',
                                    ':hover': { backgroundColor: 'purple', opacity: 0.8 },
                                    borderRadius: '50px',
                                    margin: '10px',
                                    fontSize: '18px',
                                }}
                                onClick={onCloseModal}
                            >
                                Cancelar &nbsp;
                                <Cancel />
                            </IconButton>
                            <IconButton
                                size='large'
                                sx={{
                                    color: 'white',
                                    backgroundColor: 'purple',
                                    ':hover': { backgroundColor: 'purple', opacity: 0.8 },
                                    borderRadius: '50px',
                                    margin: '10px',
                                    fontSize: '18px',
                                }}
                                type="submit"
                                onClick={onCloseModal}
                            >
                                Guardar &nbsp;
                                <Save />
                            </IconButton>
                        </Grid>
                    </Grid>

                </Grid>
            </form>
        </Modal>
    )
}
