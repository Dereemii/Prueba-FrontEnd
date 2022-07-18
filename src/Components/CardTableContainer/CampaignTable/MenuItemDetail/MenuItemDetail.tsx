import * as React from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import { DetailViewContainer } from '../../../DetailViewContainer/DetailViewContainer';

const MenuItemDetail = () => {

    const [anchorViewDetail, setAnchorViewDetail] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorViewDetail(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorViewDetail(null);
    };

    return (
        <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <MoreVertOutlinedIcon style={{color: '#2563EB'}} />
            </IconButton>
            <Menu
                sx={{ mt: '45px', zIndex: 1000 }}
                id="menu-appbar"
                anchorEl={anchorViewDetail}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorViewDetail)}
                onClose={handleCloseUserMenu}
            >
                <MenuList >
                 <DetailViewContainer/>
                    <MenuItem>
                        <ListItemIcon>
                            <PowerSettingsNewOutlinedIcon fontSize="small"  />
                        </ListItemIcon>
                        <ListItemText>Activar Campaña</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <DeleteOutlineOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Eliminar</ListItemText>
                    </MenuItem>
                </MenuList>
            </Menu>
        </Box>
    );
};
export default MenuItemDetail;
