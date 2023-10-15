import React from 'react';

//MyComponents Import
import Header from '../../Common/Header/Header';
import LabsBoxes from './LabBoxes';
import LabsMenu from '../../Common/Header/LabsMenu';
import MyLink from '../../Common/MyLink'

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