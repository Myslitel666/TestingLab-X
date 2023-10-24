import React, { useState, useEffect } from 'react';
import { Grid, TextField, Typography, Box } from '@mui/material';
import MyButton from '../../Common/MyButton';
import { DataGrid } from '@mui/x-data-grid';

const Testing: React.FC = () => {
    //TextFields
    const [x0, setX0] = useState('0'); // Начальное значение для X0 coefficient
    const [xk, setXk] = useState('10'); // Начальное значение для Xk coefficient
    const [step, setStep] = useState('1'); // Начальное значение для h (Step)
    const [testCases, setTestCases] = useState('100'); // Начальное значение для Test cases

    //Table Fields
    const columns = [
        { field: 'testNumber', headerName: 'Test Number (№)', width: 130 },
        { field: 'expectedResult', headerName: 'Expected Result', width: 130 },
        { field: 'actualResult', headerName: 'Actual Result', width: 130 },
        { field: 'testResult', headerName: 'Test Result', width: 130 },
    ];

    const [rows, setRows] = useState([]);

    const apiUrl = process.env.REACT_APP_API_URL as string;

    async function fetchData() {
        try {
            const response = await fetch(`${apiUrl}/api/testingLab3`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    x0: x0,
                    xk: xk,
                    step: step,
                    testCases: testCases,
                }),
            });

            const data = await response.json();
            setRows(data);
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
        }
    };

    const handleCalculateClick = () => {
        fetchData(); // Вызываем функцию загрузки данных при нажатии на кнопку
    };

    return (
        <>
            {/*Input parameters*/}
            {
            <Grid container spacing={3} alignItems="center" marginTop="10px">
                <Grid item marginLeft="40px">
                    <Typography>X0 coefficient:</Typography>
                </Grid>
                <Grid item>
                    <TextField label="Input 1" variant="outlined" value={x0} onChange={(e) => setX0(e.target.value)} />
                </Grid>
                <Grid item>
                    <Typography>Xk coefficient:</Typography>
                </Grid>
                <Grid item>
                    <TextField label="Input 2" variant="outlined" value={xk} onChange={(e) => setXk(e.target.value)} />
                </Grid>
                <Grid item>
                    <Typography>h (Step):</Typography>
                </Grid>
                <Grid item>
                    <TextField label="Input 3" variant="outlined" value={step} onChange={(e) => setStep(e.target.value)} />
                </Grid>
                <Grid item>
                    <Typography>Test cases:</Typography>
                </Grid>
                <Grid item>
                    <TextField label="Input 4" variant="outlined" value={testCases} onChange={(e) => setTestCases(e.target.value)} />
                </Grid>
            </Grid>
            }
            {/*Start button*/}
            <Grid justifyContent="center"
                container spacing={1}
                sx={{ marginTop: '25px' }}
            >
                <Grid item xs={1} md={1}
                >
                    <MyButton variant="contained"
                        color="primary"
                        onClick={handleCalculateClick}
                    >
                        Calculate
                    </MyButton>
                </Grid>
                <Grid item xs={1} md={1}>
                    <MyButton variant="contained"
                        color="primary"
                        style={{ width: '115px' }}
                    >
                        Clear
                    </MyButton>
                </Grid>
            </Grid>
            {/*Test results*/}
            {<div style={{
                height: 400, width: '36%',
                margin: '0 auto', marginTop: '25px',
                marginLeft: '32%'
            }}>
                <DataGrid sx={{ align: 'center' }}
                    rows={rows}
                    columns={columns}
                />
            </div>
            }
        </>
    );
};

export default Testing;