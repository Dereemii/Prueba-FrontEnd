
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

import Logo from '../../../assets/img/logo.svg'

import "@fontsource/nunito";

const Header = () => {
    const avatarStyle = {
        backgroundColor: "#ff5722",
        fontFamily: "Nunito"
    };

    return (
        <AppBar style={{ background: '#FFFFFF' }} position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box>
                        <img src={Logo} alt="Logo from the software"></img>
                    </Box>
                    
                    <Box component="span" sx={{ p: 2, flexGrow: 1 }}>
                        <Typography style={{ color: '#1E293B' }} sx={{ fontFamily: 'Nunito' }}>
                            Price & Promotions management
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Mi perfil">
                            <IconButton sx={{ p: 0 }}>
                                <Avatar alt="M Avatar" src="/static/images/avatar/2.jpg" sx={avatarStyle} />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
