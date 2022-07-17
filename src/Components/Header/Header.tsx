
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

import Tooltip from '@mui/material/Tooltip';

import AdbIcon from '@mui/icons-material/Adb';


import Logo from '../../assets/img/logo.svg'

import "@fontsource/nunito";


const Header = () => {



    const avatarStyle = {
        backgroundColor: "#ff5722",
        fontFamily: "Nunito"
      };

    return (
        <AppBar position="static" style={{ background: '#FFFFFF' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={Logo} alt="Logo from the software"></img>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            
                        >
                            <MenuIcon />
                        </IconButton>

                    </Box>

                    {<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />}

                    <Box component="span" sx={{ p: 2, flexGrow: 1 }}>

                        <Typography style={{color: '#1E293B'}} sx={{ fontFamily: 'Nunito'}}>
                        Price & Promotions management
                        </Typography>
                    </Box>


                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Mi perfil">
                            <IconButton  sx={{ p: 0 }}>
                                <Avatar alt="M Avatar" src="/static/images/avatar/2.jpg" sx={avatarStyle}/>
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
