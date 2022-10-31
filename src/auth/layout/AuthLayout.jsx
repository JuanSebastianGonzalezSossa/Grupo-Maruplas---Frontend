import { Grid, Typography } from '@mui/material';

export const AuthLayout = ({ children, title = '' }) => {
  return (

    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >

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

        <Typography variant='h5' sx={{ mb: 1, fontFamily: 'Vegur, Verdana, sans-serif' }}>{title}</Typography>


        {children}

      </Grid>

    </Grid>

  )
}
