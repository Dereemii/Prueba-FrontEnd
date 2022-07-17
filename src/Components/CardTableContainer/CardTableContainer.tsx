import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { TableToolBar } from './TableToolBar/TableToolBar';

import EnhancedTable from './DataTable/DataTable';

export const CardTableContainer = () => {
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <TableToolBar />
          <EnhancedTable />
        </CardContent>
      </Card>
    </>
  )
}
