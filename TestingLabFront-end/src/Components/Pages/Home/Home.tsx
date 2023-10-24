import React from 'react';

//MyComponents Import
import LabsBoxes from './LabBoxes';
import Header from '../Home/Header'
import LabsMenu from '../../Common/Header/LabsMenu';

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