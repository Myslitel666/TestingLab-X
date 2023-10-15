import React from 'react';

//MUI Import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

//MyComponents Import
import { ColorModeProvider } from './ColorModeContext'; // Импортируйте ColorModeProvider
import Home from './Components/Pages/Home/Home';
import Header from '../src/Components/Common/Header/Header'
import LabsMenu from '../src/Components/Common/Header/LabsMenu';
import Problem from './Components/Pages/TestingLab3/Problem';
import Graph from './Components/Pages/TestingLab3/Graph';
import Testing from './Components/Pages/TestingLab3/Testing';

function App() {
    return (
        <ColorModeProvider>
            <CssBaseline />
            <Header />
            <LabsMenu />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Устанавливаем маршрут для компонента Home на главной странице */}
                    <Route path="TestingLab3/Problem" element={<Problem />} />
                    <Route path="TestingLab3/Graph" element={<Graph />} />
                    <Route path="TestingLab3/Testing" element={<Testing />} />
                </Routes>
            </Router>
        </ColorModeProvider>
    );
}

export default App;
