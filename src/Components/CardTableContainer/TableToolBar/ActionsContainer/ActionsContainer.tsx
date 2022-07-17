import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import FilterListIcon from '@mui/icons-material/FilterList';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

export const ActionsContainer = () => {
    return (
        <>
            <Box component="span" sx={{ p: 2 }}>
                <Grid container spacing={2} columns={16}>
                    <Grid item xs={8} >
                        <FilterListIcon/>
                    </Grid>
                    <Grid item xs={8}>
                        <FileDownloadOutlinedIcon />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
