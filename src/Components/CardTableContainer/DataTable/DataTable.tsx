import * as React from 'react';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';

import Checkbox from '@mui/material/Checkbox';

import SimCardDownloadOutlinedIcon from '@mui/icons-material/SimCardDownloadOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

import { visuallyHidden } from '@mui/utils';

interface Data {
  tipo: string;
  canal: string;
  fechaVigencia: string;
  nombreCampana: string;
  promVinculadas: number;
  bandera: string;
  estado: string,
  descarga: string,
  detalle: string,
}

function createData(
  nombreCampana: string,
  tipo: string,
  fechaVigencia: string,
  canal: string,
  promVinculadas: number,
  bandera: string,
  estado: string,
  descarga: string,
  detalle: string,

): Data {
  return {
    nombreCampana,
    tipo,
    fechaVigencia,
    canal,
    promVinculadas,
    bandera,
    estado,
    descarga,
    detalle,
  };
}

const rows = [
  createData('Jumbo Ofertas Enero', 'Jumbo Mensual', '18/01/2022 10:00 a 24/01/2022 9:00', 'Ecommerce', 3 ,'JUMBO - AR', 'Creada', 'descarga', 'detalle' ),
  createData('Jumbo Days', 'FDM',  '18/01/2022 10:00 a 24/01/2022 9:00', 'Ecommerce',3,'JUMBO - AR', 'Creada', 'descarga', 'detalle'),
  createData('Quesos y Vinos','local', '18/01/2022 10:00 a 24/01/2022 9:00', 'Ecommerce', 3 , 'JUMBO - AR', 'Creada', 'descarga', 'detalle'),
  createData('Jumbo Ofertas', 'Ofertas tráfico',  '18/01/2022 10:00 a 24/01/2022 9:00','Ecommerce', 3 , 'JUMBO - AR', 'Creada', 'descarga', 'detalle'),
  createData('Jumbo Semana 1', 'Especiales', '18/01/2022 10:00 a 24/01/2022 9:00', 'Ecommerce',  3 ,'JUMBO - AR', 'Creada', 'descarga', 'detalle'),
  createData('Ciclo Febrero', 'Semanal',  '18/01/2022 10:00 a 24/01/2022 9:00','Ecommerce', 3 , 'JUMBO - AR', 'Creada', 'descarga', 'detalle'),
  createData('Fiesta de la cerveza', 'Local',  '18/01/2022 10:00 a 24/01/2022 9:00', 'Ecommerce', 3 ,'JUMBO - AR', 'Creada', 'descarga', 'detalle'),
  createData('Ofertas XL', 'Voltante',  '18/01/2022 10:00 a 24/01/2022 9:00', 'Ecommerce', 3 , 'JUMBO - AR', 'Activada', 'descarga', 'detalle'),
  createData('Escolares', 'Especiales',  '18/01/2022 10:00 a 24/01/2022 9:00','Ecommerce', 3 , 'JUMBO - AR', 'Pendiente Activación', 'descarga', 'detalle'),
  createData('Espumantes/Spritz', 'Tercera edad ',  '18/01/2022 10:00 a 24/01/2022 9:00', 'Ecommerce',3,'JUMBO - AR', 'Desactivada', 'descarga', 'detalle'),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'nombreCampana',
    numeric: false,
    disablePadding: true,
    label: 'Nombre de campaña',
  },
  {
    id: 'tipo',
    numeric: false,
    disablePadding: false,
    label: 'Tipo',
  },
  {
    id: 'fechaVigencia',
    numeric: false,
    disablePadding: false,
    label: 'Fecha vigencia',
  },
  {
    id: 'canal',
    numeric: false,
    disablePadding: false,
    label: 'Canal',
  },
  {
    id: 'promVinculadas',
    numeric: true,
    disablePadding: false,
    label: 'Prom. vinculadas',
  },
  {
    id: 'bandera',
    numeric: false,
    disablePadding: false,
    label: 'Bandera',
  },
  {
    id: 'estado',
    numeric: false,
    disablePadding: false,
    label: 'Estado',
  },
  {
    id: 'descarga',
    numeric: false,
    disablePadding: false,
    label: '',
  },
  {
    id: 'detalle',
    numeric: false,
    disablePadding: false,
    label: '',
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}


export default function EnhancedTable() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('tipo');
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.nombreCampana);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, nombreCampana: string) => {
    const selectedIndex = selected.indexOf(nombreCampana);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, nombreCampana);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const isSelected = (nombreCampana: string) => selected.indexOf(nombreCampana) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
   
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody >
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.nombreCampana);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.nombreCampana)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.nombreCampana}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.nombreCampana}
                      </TableCell>
                      <TableCell align="right">{row.tipo}</TableCell>
                      <TableCell align="right">{row.fechaVigencia}</TableCell>
                      <TableCell align="right">{row.canal}</TableCell>
                      <TableCell align="right">{row.promVinculadas}</TableCell>
                      <TableCell align="right">{row.bandera}</TableCell>
                      <TableCell align="right">{row.estado}</TableCell>
                      <TableCell align="right">
                        {row.descarga? <SimCardDownloadOutlinedIcon/>: ''}
                      </TableCell>
                      <TableCell align="right">
                        {row.detalle? <MoreVertOutlinedIcon/>: ''}
                        </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
   
    </Box>
  );
}
