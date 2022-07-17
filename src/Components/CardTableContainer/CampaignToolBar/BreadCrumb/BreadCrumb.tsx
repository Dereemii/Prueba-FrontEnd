import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export const BreadCrumb = () => {

    return (
        <>
            <ButtonGroup variant="contained" aria-label="outlined primary button group" >
                <Button>JUMBO - AR</Button>
                <Button>
                    <ArrowDropDownIcon />
                </Button>
            </ButtonGroup>

        </>
    )
}
