import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, CssBaseline, Divider, Drawer, Grid, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import InventoryIcon from '@mui/icons-material/Inventory';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PaymentsIcon from '@mui/icons-material/Payments';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ViewListIcon from '@mui/icons-material/ViewList';
import { LogoutOutlined } from '@mui/icons-material';
import { useAuthStore } from '../../hooks/useAuthStore';
import { Link as RouterLink } from 'react-router-dom';

const drawerWidth = 240;


export const ResponsiveDrawer = ({ window }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Grid
            container
            direction="column"
            textAlign="center"
        >
            <Toolbar />
            <Divider />
            <List>
                <Link component={RouterLink} style={{ textDecoration: 'none' }} variant='h6' color='inherit' to="/Asesores">
                    <ListItem key={'Asesores'} disablePadding>
                        <ListItemButton >
                            <ListItemIcon>
                                <SupportAgentIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Asesores'} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link component={RouterLink} style={{ textDecoration: 'none' }} variant='h6' color='inherit' to="/Rutas">
                    <ListItem key={'Rutas'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <LocalShippingIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Rutas'} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link component={RouterLink} style={{ textDecoration: 'none' }} variant='h6' color='inherit' to="/Clientes">
                    <ListItem key={'Clientes'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Clientes'} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link component={RouterLink} style={{ textDecoration: 'none' }} variant='h6' color='inherit' to="/Productos">
                    <ListItem key={'Productos'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InventoryIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Productos'} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link component={RouterLink} style={{ textDecoration: 'none' }} variant='h6' color='inherit' to="/Pedidos">
                    <ListItem key={'Pedidos'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ViewListIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Pedidos'} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link component={RouterLink} style={{ textDecoration: 'none' }} variant='h6' color='inherit' to="/Viaticos">
                    <ListItem key={'Viaticos'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PaymentsIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Viaticos'} />
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <List>
                <Link component={RouterLink} style={{ textDecoration: 'none' }} variant='h6' color='inherit' to="/ReportePedidos">
                    <ListItem key={'Reporte pedidos'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AssignmentIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Reporte pedidos'} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link component={RouterLink} style={{ textDecoration: 'none' }} variant='h6' color='inherit' to="/ReporteViaticos">
                    <ListItem key={'Reporte viaticos'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AssessmentIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Reporte viaticos'} />
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
        </Grid >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    const { user, startLogout } = useAuthStore();


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>

                    <Grid container direction='row' justifyContent='space-between' alignItems='center' >
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            {user.name}
                        </Typography>
                        <IconButton color='error' onClick={startLogout}>
                            <LogoutOutlined />
                        </IconButton>
                    </Grid>
                </Toolbar>

            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>            
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;
