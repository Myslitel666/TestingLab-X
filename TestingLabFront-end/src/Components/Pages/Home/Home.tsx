import React from 'react';

//MyComponents Import
import Header from '../../Common/Header/Header';
import LabsBoxes from '../Home/PopularProducts';
import LabsMenu from '../../Common/Header/LabsMenu';

import Button, { ButtonProps } from '@mui/material/Button';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <LabsMenu />
            <LabsBoxes />
        </div>
    );
};

export default Home;