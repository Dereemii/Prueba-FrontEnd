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



export const DetailViewForm = () => {

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
        <FormControl>
          <InputLabel htmlFor="component-outlined">País</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value='Argentina'
            label="País"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-outlined">País</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value='Argentina'
            label="País"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-outlined">País</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value='Argentina'
            label="País"
          />
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
        <FormControl>
          <InputLabel htmlFor="component-outlined">País</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value='Argentina'
            label="País"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-outlined">País</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value='Argentina'
            label="País"
          />
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
          <InputLabel htmlFor="component-outlined">País</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value='Argentina'
            label="País"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-outlined">País</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value='Argentina'
            label="País"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-outlined">País</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value='Argentina'
            label="País"
          />
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
        <FormControl>
          <InputLabel htmlFor="component-outlined">País</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value='Argentina'
            label="País"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-outlined">País</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value='Argentina'
            label="País"
          />
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
