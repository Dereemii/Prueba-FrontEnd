
import Container from '@mui/material/Container';

import { DetailViewToolbar } from '../DetailViewToolBar/DetailViewToolbar';
import { DetailViewTabs } from '../DetailViewTabs/DetailViewTabs';
import { DetailViewForm } from '../DetailViewForm/DetailViewForm';

export const DetailView = () => {
    return (
        <>
            <Container maxWidth="sm" sx={{ width: '100%' }}>
                <DetailViewToolbar />
                <DetailViewTabs/>
                <DetailViewForm/>
            </Container>
        </>
    );
}
