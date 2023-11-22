/* eslint-disable react/jsx-no-comment-textnodes */
//MUI Import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

//MyComponents Import
import { ColorModeProvider } from './ColorModeContext'; // Импортируйте ColorModeProvider
import Home from './Components/Pages/Home/Home';

import ProblemLab3 from './Components/Pages/TestingLab3/Problem';
import Graph from './Components/Pages/TestingLab3/Graph';
import TestingLab3 from './Components/Pages/TestingLab3/Testing';

import ProblemLab4 from './Components/Pages/TestingLab4/Problem';
import DecisionTree from './Components/Pages/TestingLab4/DecisionTree';
import TestingLab4 from './Components/Pages/TestingLab4/Testing';

import ProblemLab5 from './Components/Pages/TestingLab5/Problem';
import CauseEffectDiagram from './Components/Pages/TestingLab5/Cause-effectDiagram';
import TestingLab5 from './Components/Pages/TestingLab5/Testing';

import ProblemLab6 from './Components/Pages/TestingLab6/Problem';
import CauseEffectDiagram6 from './Components/Pages/TestingLab6/Cause-effectDiagram';
import TestingLab6 from './Components/Pages/TestingLab6/Testing';

function App() {
    return (
        <ColorModeProvider>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Устанавливаем маршрут для компонента Home на главной странице */}

                    //TestingLab3
                    <Route path="TestingLab3/Problem" element={<ProblemLab3 />} />
                    <Route path="TestingLab3/Graph" element={<Graph />} />
                    <Route path="TestingLab3/Testing" element={<TestingLab3 />} />

                    //TestingLab4
                    <Route path="TestingLab4/Problem" element={<ProblemLab4 />} />
                    <Route path="TestingLab4/DecisionTree" element={<DecisionTree />} />
                    <Route path="TestingLab4/Testing" element={<TestingLab4 />} />

                    //TestingLab5
                    <Route path="TestingLab5/Problem" element={<ProblemLab5 />} />
                    <Route path="TestingLab5/Cause-effectDiagram" element={<CauseEffectDiagram />} />
                    <Route path="TestingLab5/Testing" element={<TestingLab5 />} />

                    //TestingLab6
                    <Route path="TestingLab6/Problem" element={<ProblemLab6 />} />
                    <Route path="TestingLab6/Cause-effectDiagram" element={<CauseEffectDiagram6 />} />
                    <Route path="TestingLab6/Testing" element={<TestingLab6 />} />
                </Routes>
            </Router>
        </ColorModeProvider>
    );
}

export default App;
