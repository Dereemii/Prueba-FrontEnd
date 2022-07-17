
import Grid from '@mui/material/Grid';

import { BreadCrumb } from './BreadCrumb/BreadCrumb';
import { ButtonContained } from './ButtonContained/ButtonContained';

export const AppBar = () => {
    return (
        <>

            <Grid container spacing={2} columns={16}>
                <Grid item xs={8} >
                    Campañas
                    <BreadCrumb />
                </Grid>
                <Grid item xs={8}>
                    <ButtonContained/>
                </Grid>
            </Grid>
        </>
    )
}
