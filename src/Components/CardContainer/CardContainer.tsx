import Grid from '@mui/material/Grid';
import { SearchBar } from './SearchBar/SearchBar';
import { ActionsContainer } from './ActionsContainer/ActionsContainer';
import DataTable from './DataTable/DataTable';


export const CardContainer = () => {
  return (
    <>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8} >
          <SearchBar />
        </Grid>
        <Grid item xs={8}>
          <ActionsContainer/>
        </Grid>
      </Grid>
      <DataTable/>
    </>
  )
}
