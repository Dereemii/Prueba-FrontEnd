import { useState } from 'react'

import { Drawer, ListItemIcon, ListItemText, MenuItem } from '@mui/material'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import { DetailView } from './DetailView/DrawerDetailView';

export const DetailViewContainer = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
      <MenuItem onClick={() => setIsDrawerOpen(true)}>
        <ListItemIcon >
          <RemoveRedEyeOutlinedIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Ver Detalle</ListItemText>
      </MenuItem>

      <Drawer
        sx={{ background: 'rgba(30, 58, 138, 0.7);'}}
        anchor='right'
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}>
        <DetailView />
      </Drawer>
    </>
  )
}
