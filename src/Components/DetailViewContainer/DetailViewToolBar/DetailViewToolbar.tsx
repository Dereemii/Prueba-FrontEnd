import { Toolbar } from "@mui/material"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

export const DetailViewToolbar = () => {
    return (
        <>
            <Toolbar disableGutters>
                <Box component="span" sx={{ p: 2, }}>
                    <CampaignOutlinedIcon style={{color: '#2563EB'}}/>
                </Box>
                <Box component="span" sx={{ p: 2, flexGrow: 1 }}>
                    <Typography
                    style={{fontSize: 20}}
                    >
                        Nombre de Campaña
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                    <MoreHorizOutlinedIcon style={{color: '#2563EB'}}/>
                </Box>
            </Toolbar>
        </>
    )
}
