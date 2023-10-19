import React, { useState } from 'react';
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

    const rows = [
        { id: 1, testNumber: 1, expectedResult: 5.5, actualResult: 5.5, testResult: 'Passed' },
        { id: 2, testNumber: 2, expectedResult: 6.6, actualResult: 3, testResult: 'Failed' },
        { id: 3, testNumber: 3, expectedResult: 3.38, actualResult: 2, testResult: 'Failed' },

    ];

    return (
        <>
        {/*Input parameters*/}
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

        {/*Start button*/}
        <Typography sx={{ 'text-align': 'center' }} >
            <MyButton variant="contained"
                color="primary"
                style={{ marginTop: '25px', marginLeft: '10px' }}
            >
                Calculate
            </MyButton>
        </Typography>

        {/*Test results*/}
            <div style={{
                height: 400, width: '36%',
                margin: '0 auto', marginTop: '25px',
                marginLeft: '32%'
            }}>
                <DataGrid sx={{ align: 'center' }}
                    rows={rows}
                    columns={columns}
                />
            </div>
        </>
    );
};

export default Testing;
