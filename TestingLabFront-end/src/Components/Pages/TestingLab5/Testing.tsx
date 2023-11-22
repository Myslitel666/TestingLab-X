import React, { useState, useEffect } from 'react';

//MUI Import
import { Grid, TextField, Typography, Box } from '@mui/material';
import MyButton from '../../Common/MyButton';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

//MyComponents Import
import DrawerLab5 from '../TestingLab5/DrawerLab5'
import LabsMenu from '../../Common/Header/LabsMenu';

const Testing: React.FC = () => {
    //TextFields
    const [x0, setX0] = useState('0'); // Начальное значение для X0 coefficient
    const [xk, setXk] = useState('2'); // Начальное значение для Xk coefficient
    const [step, setStep] = useState('1'); // Начальное значение для h (Step)

    //Table Fields
    const columns: GridColDef[] = [
        {
            field: 'testNumber',
            headerName: 'Test Number (№)',
            width: 135,
            align: 'center',
            headerAlign: 'center'
        },
        {
            field: 'expectedResult',
            headerName: 'Expected Result',
            width: 135,
            align: 'center',
            headerAlign: 'center'
        },
        {
            field: 'actualResult',
            headerName: 'Actual Result',
            width: 135,
            align: 'center',
            headerAlign: 'center'
        },
        {
            field: 'testResult',
            headerName: 'Test Result',
            width: 135,
            align: 'center',
            headerAlign: 'center'
        },
    ];

    const [rows, setRows] = useState([]);

    const apiUrl = process.env.REACT_APP_API_URL as string;

    async function fetchData() {
        //try {
            const response = await fetch(`${apiUrl}/api/testingLab5`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    x0: x0,
                    xk: xk,
                    step: step
                }),
            });

            const data = await response.json();
            setRows(data);

            console.log(data);
        //} catch (error) {
            //console.error('Ошибка при отправке данных:', error);
        //}
    };

    const handleCalculateClick = () => {
        fetchData(); // Вызываем функцию загрузки данных при нажатии на кнопку
    };

    // Функция для обновления текста по нажатию кнопки
    const clearButtonClick = () => {
        setX0(``);
        setXk(``);
        setStep(``);

        setRows([]);
    };

    return (
        <>
            <DrawerLab5 />
            <LabsMenu />

            {/*Input parameters*/}
            <Grid container spacing={2} alignItems="center" justifyContent="center" marginTop="10px">
                <Grid item>
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
            </Grid>
            {/*Start button*/}
            <Grid justifyContent="center"
                container spacing={1}
                sx={{ marginTop: '50px' }}
            >
                <Grid item xs={2} md={1}
                >
                    <MyButton variant="contained"
                        color="primary"
                        onClick={handleCalculateClick}
                    >
                        Calculate
                    </MyButton>
                </Grid>
                <Grid item xs={2} md={1}>
                    <MyButton variant="contained"
                        color="primary"
                        onClick={clearButtonClick}
                        style={{ width: '115px' }}
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