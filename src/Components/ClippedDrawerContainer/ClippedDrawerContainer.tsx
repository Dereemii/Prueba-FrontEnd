import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Header from './Header/Header';
import { SideBar } from './SideBar/SideBar';

import { CardTableContainer } from '../CardTableContainer/CardTableContainer';
import { CampaignToolBar } from '../CardTableContainer/CampaignToolBar/CampaignToolBar';

export const ClippedDrawerContainer = () => {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Header />
                <SideBar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }} style={{ background: '#FAFBFF' }}>
                    <Toolbar />
                    <CampaignToolBar />
                    <CardTableContainer />
                </Box>
            </Box>
        </>
    )
}
