import { Box, Toolbar } from "@mui/material"

import { BreadCrumb } from "./BreadCrumb/BreadCrumb"
import { ButtonContained } from "./ButtonContained/ButtonContained"
import Typography from '@mui/material/Typography';




export const CampaignToolBar = () => {
    return (
        <Toolbar disableGutters={true}>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                <Typography
                    style={{
                        color: 'rgba(0, 0, 0, 0.87)',
                        display: 'inline',
                        fontSize: 24
                    }}
                    sx={{ fontFamily: 'Nunito' }}
                    mr={2}
                    >
                    
                    Campañas
                </Typography>
                <BreadCrumb />
            </Box>
            <ButtonContained />
        </Toolbar>
    )
}
