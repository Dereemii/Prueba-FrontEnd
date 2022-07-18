import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export const BreadCrumb = () => {

    return (
        <>
            <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
                style={{ height: 30 }}
            >
                <Button style={{ background: '#10B981' }}>JUMBO - AR</Button>
                <Button style={{ background: '#059669', width: 38 }}>
                    <ArrowDropDownIcon />
                </Button>
            </ButtonGroup>

        </>
    )
}
