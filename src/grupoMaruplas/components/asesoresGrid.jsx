import { Grid, IconButton, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const AsesorGrid = ({ data }) => {

    return (
        <Grid
            container
            direction="row"
            alignItems="center"
            sx={{ flexGrow: 1, p: 3, backgroundColor: 'primary.main', borderRadius: 4 }}
        >

            {data.map((User, i) => (
                <Grid container
                    direction="column"
                    alignItems="center"
                    justifyContent="space-evenly"
                    key={i}
                    sx={{ height: '20%', width: '100%', marginTop: 6, padding: 2, marginRight: 2, backgroundColor: 'white', borderRadius: 4, color: 'black' }}>
                    <Typography variant='h7' sx={{ padding: '2px' }}> {User.name}</Typography>
                    <Typography variant='h7' sx={{ padding: '2px' }}> {User.rol}</Typography>
                    <Typography variant='h7' sx={{ padding: '2px' }}> {User.celular}</Typography>
                    <Typography variant='h7' sx={{ padding: '2px' }}> {User.email}</Typography>
                    {/* <Grid
                        container
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <IconButton
                            size='large'
                            sx={{
                                color: 'white',
                                backgroundColor: 'error.main',
                                ':hover': { backgroundColor: 'error.main', opacity: 0.8 },
                                borderRadius: '15px',
                                margin: '10px',
                                fontSize: '18px',
                            }}
                            type="submit"
                        > <DeleteIcon /> </IconButton>
                        <IconButton
                            size='large'
                            sx={{
                                color: 'white',
                                backgroundColor: 'error.main', 
                                ':hover': { backgroundColor: 'error.main', opacity: 0.7 },
                                borderRadius: '15px',
                                opacity: 0.9,
                                margin: '10px',
                                fontSize: '18px',
                            }}
                            type="submit"
                        > <EditIcon /> </IconButton>
                    </Grid> */}
                </Grid>
            ))}
        </Grid>
    )
}


