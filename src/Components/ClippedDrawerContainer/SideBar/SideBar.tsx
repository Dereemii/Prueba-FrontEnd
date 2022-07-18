import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

import Divider from '@mui/material/Divider';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';

const drawerWidth = 75;

export const SideBar = () => {
    return (
        <>
            <Drawer
                variant="permanent"
                sx={{
                    zIndex: 1000,
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeOutlinedIcon style={{ color: '#BDBDBD' }} />
                            </ListItemIcon>
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemIcon>
                                <ShoppingBagOutlinedIcon style={{ color: '#BDBDBD' }} />
                            </ListItemIcon>
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemIcon>
                                <CampaignOutlinedIcon style={{ color: '#2563EB' }} />
                            </ListItemIcon>
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemIcon>
                                <LocalOfferOutlinedIcon style={{ color: '#BDBDBD' }} />
                            </ListItemIcon>
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemIcon>
                                <WidgetsOutlinedIcon style={{ color: '#BDBDBD' }} />
                            </ListItemIcon>
                        </ListItemButton>

                    </List>
                    <Divider />
                    <List>
                        <ListItemButton>
                            <ListItemIcon>
                                <ArrowCircleLeftOutlinedIcon style={{ color: '#BDBDBD'}}/>
                            </ListItemIcon>
                        </ListItemButton>
                    </List>
                </Box>
            </Drawer>
        </>
    )
}
