
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { ListItems } from '../ListItems/ListItems';
import { AppBar } from '../AppBar/AppBar';
import { CardContainer } from '../CardContainer/CardContainer';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 0,
    marginTop: 10
}));

export const Dashboard = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0} columns={16}>
                    <Grid item xs={1}>

                        <ListItems />

                    </Grid>
                    <Grid item xs={15}>
                        <Item style={{ background: '#FAFBFF' }}>
                            <AppBar />
                            <Grid>
                                <Item>
                                    <CardContainer />
                                </Item>
                            </Grid>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
