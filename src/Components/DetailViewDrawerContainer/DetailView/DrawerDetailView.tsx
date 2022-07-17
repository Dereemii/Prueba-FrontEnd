import { useState } from 'react'

import { Drawer, Typography, Card, ListItemIcon, ListItemText, MenuItem } from '@mui/material'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

export const DetailView = () => {

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
                anchor='right'
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}>
                <Card sx={{ minWidth: 275 }} role='presentation'>
                    
                </Card>
            </Drawer>
        </>
    )
}