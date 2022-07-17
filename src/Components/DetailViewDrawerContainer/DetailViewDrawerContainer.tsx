import React from 'react'
import { Drawer, Typography, Card, IconButton } from '@mui/material'
import { useState } from 'react'

export const DetailViewDrawerContainer = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
      <IconButton edge='start' onClick={()=>setIsDrawerOpen(true)}>
        <h3>icono drawer</h3>
      </IconButton>
      <Drawer
        anchor='right'
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}>
        <Card sx={{ minWidth: 275 }} role='presentation'>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Side Panel
          </Typography>
        </Card>
      </Drawer>
    </>
  )
}
