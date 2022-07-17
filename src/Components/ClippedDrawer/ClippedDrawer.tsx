

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Header from '../Header/Header';
import { ListItems } from '../ListItems/ListItems';

import BasicCard from '../CardContainer/Card';
import { CampaignToolBar } from '../CardContainer/CampaignToolBar/CampaignToolBar';



export const ClippedDrawer = () => {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Header />
                <ListItems />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }} style={{ background: '#FAFBFF' }}>
                    <Toolbar />           
                    <CampaignToolBar/>
                    <BasicCard />
                </Box>
            </Box>
        </>
    )
}
