import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

import Divider from '@mui/material/Divider';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';

export const ListItems = () => {
  return (
    <>
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
        <CampaignOutlinedIcon  />
      </ListItemIcon>
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <LocalOfferOutlinedIcon />
      </ListItemIcon>
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <WidgetsOutlinedIcon/>
      </ListItemIcon>

    </ListItemButton>
    
    <Divider />
    
    <ListItemButton>
      <ListItemIcon>
        <ArrowCircleLeftOutlinedIcon/>
      </ListItemIcon>
    </ListItemButton>
    </>
  )
}
