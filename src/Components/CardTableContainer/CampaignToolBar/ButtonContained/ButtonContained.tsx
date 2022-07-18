import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export const ButtonContained = () => {
    return (
        <>
            <Button variant="contained"  style={{background: '#2563EB'}}>
                <AddIcon />
                CREAR CAMPAÑA
            </Button>

        </>
    )
}
