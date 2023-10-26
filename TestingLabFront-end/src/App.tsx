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

function App() {
    return (
        <ColorModeProvider>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Устанавливаем маршрут для компонента Home на главной странице */}

                    <Route path="TestingLab3/Problem" element={<ProblemLab3 />} />
                    <Route path="TestingLab3/Graph" element={<Graph />} />
                    <Route path="TestingLab3/Testing" element={<TestingLab3 />} />

                    <Route path="TestingLab4/Problem" element={<ProblemLab4 />} />
                    <Route path="TestingLab3/DecisionTree" element={<DecisionTree />} />
                    <Route path="TestingLab4/Testing" element={<TestingLab4 />} />
                </Routes>
            </Router>
        </ColorModeProvider>
    );
}

export default App;
