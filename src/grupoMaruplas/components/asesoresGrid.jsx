import { Grid, IconButton, Typography } from "@mui/material"

export const AsesorGrid = ({ data }) => {

    return (
        <Grid
            container
            alignItems="center"
            sx={{ flexGrow: 1, p: 3, backgroundColor: 'primary.main', borderRadius: 4 }}
        >

            {data.map((User, i) => (
                <Grid container
                    alignItems="center"
                    justifyContent="space-evenly"
                    key={i}
                    sx={{ display: 'flex', flexDirection: 'column', height: '20%', width: '100%', marginTop: 6, padding: 2, marginRight: 2, backgroundColor: 'white', borderRadius: 4, color: 'black' }}>
                    <Typography variant='h7' sx={{ padding: '3px' }}> {User.name}</Typography>
                    <Typography variant='h7' sx={{ padding: '3px' }}> {User.rol}</Typography>
                    <Typography variant='h7' sx={{ padding: '3px' }}> {User.celular}</Typography>
                    <Typography variant='h7' sx={{ padding: '3px' }}> {User.email}</Typography>
                </Grid>
            ))}
        </Grid>
    )
}


