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

export const ListItems = () => {
  return (
    <>
                        <Drawer
                    variant="permanent"
                    sx={{
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
                                    <HomeOutlinedIcon />
                                </ListItemIcon>
                            </ListItemButton>

                            <ListItemButton>
                                <ListItemIcon>
                                    <ShoppingBagOutlinedIcon />
                                </ListItemIcon>
                            </ListItemButton>

                            <ListItemButton>
                                <ListItemIcon>
                                    <CampaignOutlinedIcon />
                                </ListItemIcon>
                            </ListItemButton>

                            <ListItemButton>
                                <ListItemIcon>
                                    <LocalOfferOutlinedIcon />
                                </ListItemIcon>
                            </ListItemButton>

                            <ListItemButton>
                                <ListItemIcon>
                                    <WidgetsOutlinedIcon />
                                </ListItemIcon>

                            </ListItemButton>

                        </List>
                        <Divider />
                        <List>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowCircleLeftOutlinedIcon />
                                </ListItemIcon>
                            </ListItemButton>
                        </List>
                    </Box>
                </Drawer>
    </>
  )
}
