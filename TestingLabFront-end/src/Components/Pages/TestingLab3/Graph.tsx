import React from 'react';

//MyComponents Import
import Header from '../../Common/Header/Header';
import LabsMenu from '../../Common/Header/LabsMenu';

const Graph: React.FC = () => {
    return (
        <div>
            <Header />
            <LabsMenu />
            Graph
        </div>
    );
};

export default Graph;