import { Box, Toolbar } from "@mui/material"

import { BreadCrumb } from "./BreadCrumb/BreadCrumb"
import { ButtonContained } from "./ButtonContained/ButtonContained"
import Typography from '@mui/material/Typography';




export const CardTableContainer = () => {
    return (
        <Toolbar>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>

                <Typography style={{ color: '#1E293B', display: 'inline' }} sx={{ fontFamily: 'Nunito' }}>
                Campaña
                </Typography>
                
                <BreadCrumb />
            </Box>

            <ButtonContained />
        </Toolbar>
    )
}
