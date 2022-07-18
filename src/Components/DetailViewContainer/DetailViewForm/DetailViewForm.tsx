import * as React from 'react';

import { Box, Typography } from '@mui/material'
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';

import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


export const DetailViewForm = () => {

  const [value, setValue] = React.useState<Date | null>(new Date());


  return (
    <>
      <Box my={1}>
        <Typography >
          Segmentación
        </Typography>
      </Box>

      <Divider />

      <Box
        mt={1}
        component="form"
        sx={{
          '& > :not(style)': { m: 1 }, maxWidth: '100%'
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl sx={{ m: 1 }}>
          <InputLabel htmlFor="grouped-native-select">País</InputLabel>
          <Select
            sx={{ minWidth: '26vw' }}
            native
            variant="outlined"
            defaultValue=""
            id="grouped-native-select"
            label="Grouping">
            <option>Argentina</option>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1 }}>
          <InputLabel htmlFor="component-outlined">Bandera</InputLabel>
          <Select
            sx={{ minWidth: '26vw' }}
            native
            variant="outlined"
            defaultValue=""
            id="grouped-native-select"
            label="Grouping">
            <option>JUMBO - AR</option>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1 }}>
          <InputLabel htmlFor="component-outlined">Zona</InputLabel>
          <Select
            sx={{ minWidth: '26vw' }}
            native
            variant="outlined"
            defaultValue=""
            id="grouped-native-select"
            label="Grouping">
            <option>ZONA 01 - Argentina</option>
          </Select>
        </FormControl>

      </Box>
      <Box
        component="form"
        my={1}
        sx={{
          '& > :not(style)': { m: 1 }, maxWidth: '100%'
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl sx={{ m: 1 }}>
          <InputLabel htmlFor="component-outlined">Locales</InputLabel>
          <Select
            sx={{ minWidth: '26vw' }}
            native
            variant="outlined"
            defaultValue=""
            id="grouped-native-select"
            label="Grouping">
            <option>S501, S502, S504, S504, S505, S506...</option>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1 }}>
          <InputLabel htmlFor="component-outlined">Sección</InputLabel>
          <Select
            sx={{ minWidth: '26vw', maxWidth: '27vw' }}
            native
            variant="outlined"
            defaultValue=""
            id="grouped-native-select"
            label="Grouping">
            <option>26 - Botillería / Gaseosas</option>
          </Select>
        </FormControl>

      </Box>

      <Box my={1}>
        <Typography>
          Datos Generales
        </Typography>
      </Box>

      <Divider />

      <Box
        mt={1}
        component="form"
        sx={{
          '& > :not(style)': { m: 1 }, maxWidth: '100%'
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl>
          <InputLabel htmlFor="component-outlined">Nombre campaña</InputLabel>
          <OutlinedInput
            sx={{ minWidth: '26vw', maxWidth: '27vw' }}
            id="component-outlined"
            value='Semana de la cerveza'
            label="nombre campaña"
          />
        </FormControl>

        <FormControl sx={{ m: 1 }}>
          <InputLabel sx={{ background: 'white' }} htmlFor="component-outlined">Tipo de campaña</InputLabel>
          <Select
            sx={{ minWidth: '26vw', maxWidth: '27vw' }}
            native
            variant="outlined"
            defaultValue=""
            id="grouped-native-select"
            label="tipo">
            <option>Local</option>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1 }}>
          <InputLabel htmlFor="component-outlined">Canal</InputLabel>
          <Select
            sx={{ minWidth: '26vw', maxWidth: '27vw' }}
            native
            variant="outlined"
            defaultValue=""
            id="grouped-native-select"
            label="canal">
            <option>Canal</option>
          </Select>
        </FormControl>

      </Box>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 }, maxWidth: '100%'
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl
        sx={{ minWidth: '26vw', maxWidth: '27vw' }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="Fecha de vigencia"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
            />
          </LocalizationProvider>
        </FormControl>

        <FormControl
        sx={{ minWidth: '26vw', maxWidth: '27vw' }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="Fecha de vigencia"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
          />
        </LocalizationProvider>
        </FormControl>
      </Box>

      <Box my={1}>
        <FormGroup>
          <FormControlLabel control={<Switch defaultChecked />} label="Administrar todas las promociones con fecha de campaña" />
        </FormGroup>
      </Box>

      <Box my={2}>
        <Button variant="contained">
          <SaveIcon />
          Guardar
        </Button>
      </Box>
    </>
  )
}
