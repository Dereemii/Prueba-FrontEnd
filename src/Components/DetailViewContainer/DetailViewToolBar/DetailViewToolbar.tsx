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
                    <CampaignOutlinedIcon/>
                </Box>
                <Box component="span" sx={{ p: 2, flexGrow: 1 }}>
                    <Typography>
                        Nombre de Campaña
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                    <MoreHorizOutlinedIcon/>
                </Box>
            </Toolbar>
        </>
    )
}
