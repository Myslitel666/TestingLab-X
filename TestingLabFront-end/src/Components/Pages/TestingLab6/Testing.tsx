import React, { useState, useEffect } from 'react';

//MUI Import
import { Grid, TextField, Typography, Box } from '@mui/material';
import MyButton from '../../Common/MyButton';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

//MyComponents Import
import DrawerLab6 from '../TestingLab6/DrawerLab6'
import LabsMenu from '../../Common/Header/LabsMenu';

const Testing: React.FC = () => {
    //TextFields
    const [sequenceOfNumbers, setSequenceOfNumbers] = useState('32 15 8 71 44 56 22 48 79 81 34 55 78 90 100 34 21 23 14 139 20 1 200'); // Начальное значение для X0 coefficient
    const [testCases, setTestCases] = useState('100'); // Начальное значение для Xk coefficient
    const [module1, setModule1] = useState(true);
    const [module2, setModule2] = useState(false);
    const [module3, setModule3] = useState(false);

    //Table Fields
    const columns: GridColDef[] = [
        {
            field: 'testNumber',
            headerName: 'Test Number (№)',
            width: 130,
            align: 'center',
            headerAlign: 'center'
        },
        {
            field: 'sum',
            headerName: 'Sum',
            width: 150,
            align: 'center',
            headerAlign: 'center'
        },
        {
            field: 'numberOfElements',
            headerName: 'Number of elements',
            width: 150,
            align: 'center',
            headerAlign: 'center'
        },
        {
            field: 'theArithmeticMean',
            headerName: 'The arithmetic mean',
            width: 150,
            align: 'center',
            headerAlign: 'center'
        },
        {
            field: 'testResult',
            headerName: 'Test Result',
            width: 150,
            align: 'center',
            headerAlign: 'center'
        },
    ];

    const [rows, setRows] = useState([]);

    const apiUrl = process.env.REACT_APP_API_URL as string;

    async function fetchData() {
            const response = await fetch(`${apiUrl}/api/testingLab6`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    sequenceOfNumbers: sequenceOfNumbers,
                    testCases: testCases,
                    module1: module1,
                    module2: module2,
                    module3: module3,
                }),
            });

            const data = await response.json();
            setRows(data);

            console.log(data);
    };

    const handleCalculateClick = () => {
        fetchData(); // Вызываем функцию загрузки данных при нажатии на кнопку
    };

    // Функция для обновления текста по нажатию кнопки
    const clearButtonClick = () => {
        setSequenceOfNumbers(``);
        setTestCases(``);

        setRows([]);
    };

    return (
        <>
            <DrawerLab6 />
            <LabsMenu />
            <Box marginTop = '25px'>
                <Typography sx={{ float: 'left', margin: '15px'}}>Enter a sequence of numbers:</Typography>
                <TextField
                    label="Sequence"
                    variant="outlined"
                    sx={{
                        width: "1000px",
                    }}
                    value={sequenceOfNumbers} onChange={(e) => setSequenceOfNumbers(e.target.value)} 
                />
            </Box>
            <Box marginTop='25px'>
                <Typography sx={{ float: 'left', margin: '15px' }}>Test cases:</Typography>
                <TextField
                    label="Cases"
                    variant="outlined"
                    sx={{ width: "500px", marginRight: "50px", float: 'left', }}
                    value={testCases} onChange={(e) => setTestCases(e.target.value)}
                />
                <Box marginTop='10px' sx={{float: 'left'}}>
                    <FormControlLabel
                        control={<Checkbox defaultChecked />} label="Module 1"
                        onChange={(e) => setModule1(!module1)}
                    />
                    <FormControlLabel control={<Checkbox />} label="Module 2"
                        onChange={(e) => setModule2(!module2)}
                    />
                    <FormControlLabel control={<Checkbox />} label="Module 3"
                        onChange={(e) => setModule3(!module3)}
                    />
                </Box>
            </Box>
            {/*Start button*/}
            <Grid justifyContent="center"
                container spacing={1}
                sx={{ marginTop: '120px' }}
            >
                <Grid item xs={2} md={1}
                >
                    <MyButton variant="contained"
                        color="primary"
                        onClick={handleCalculateClick}
                        style={{ borderColor: 'black' }}
                    >
                        Calculate
                    </MyButton>
                </Grid>
                <Grid item xs={2} md={1}>
                    <MyButton variant="contained"
                        color="primary"
                        onClick={clearButtonClick}
                        style={{ width: '115px', borderColor: 'black' }}

                    >
                        Clear
                    </MyButton>
                </Grid>
            </Grid>
            <Grid container spacing={1}
                  justifyContent="center"
                  marginTop="50px"
            >
                <div style={{
                    height: '319px',
                    width: '675'
                }}>
                    <DataGrid 
                        rows={rows}
                        columns={columns}
                    />
                </div>
            </Grid>
        </>
    );
};

export default Testing;