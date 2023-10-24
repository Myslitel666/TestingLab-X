import React, { useState } from 'react';

import { Typography, Grid, Box, } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MyButton from '../../Common/MyButton';

import MyBox from '../../Common/MyBox';
import '../TestingLab3/Graph.css'
 
const Graph: React.FC = () => {
    const theme = useTheme();
    const PrimaryMainColor = theme.palette.primary.main;

    // Состояние текста
    const [V1, setV1] = useState(`V(G) = R1 + R2`);
    const [V2, setV2] = useState(`V(G) = E - V + 2`);
    const [V3, setV3] = useState(`V(G) = P + 1`);

    // Функция для обновления текста по нажатию кнопки
    const calculateButtonClick = () => {
        setV1(`V(G) = R1 + R2 = ` + `1 + 4 = ` + `${1 + 4}`);
        setV2(`V(G) = E - V + 2 = ` + `14 - 11 + 2 = ` + `${14 - 11 + 2}`);
        setV3(`V(G) = P + 1 = ` + `4 + 1 = ` + `${4 + 1}`);
    };

    // Функция для обновления текста по нажатию кнопки
    const clearButtonClick = () => {
        setV1(`V(G) = R1 + R2`);
        setV2(`V(G) = E - V + 2`);
        setV3(`V(G) = P + 1`);
    };

    return (
        <>
            <Typography variant="h4"
                sx={{'textAlign': 'center',
                color: `${PrimaryMainColor}`,
                    transition: 'color 1s ease',
                    marginTop: '20px'
            }}>
                Control Flow Graph of the Program
            </Typography>
            <Grid container spacing={6} sx={{
                paddingTop: '1%',
                paddingBottom: '1%',
                paddingLeft: '3%', 
                paddingRight: '3%', 
                marginBottom: '25px',
                marginTop: '-30px'
            }}>
                <Grid item xs={6} md={6}>
                    <MyBox className="product-box">
                        <Typography sx={{

                        }}>
                            <img
                                src='/images/Graph.png'
                                alt='Formula'
                                style={{
                                    maxWidth: '57%',
                                    maxHeight: '57%',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                    marginTop: '5px',
                                }}
                            />
                        </Typography>
                    </MyBox>
                </Grid>
                <Grid item xs={6} md={6}>
                    <MyBox className="product-box2">
                            <Typography sx={{ marginTop: '10px' }}>
                                <span style={{
                                    marginLeft: '20px',
                                    color: `${PrimaryMainColor}`,
                                    transition: 'color 1s ease'
                                }}>Цикломатическая сложность V(G) </span>
                                - число независиых линейных путей в базовом
                                множестве, которое определяется одним из
                                способов:
                            </Typography>
                            <Typography sx={{
                                marginTop: '10px',
                                color: `${PrimaryMainColor}`,
                                transition: 'color 1s ease',
                                'textAlign': 'center',
                            }}>
                                {V1}
                            </Typography>
                            <Typography sx={{
                                marginTop: '10px',
                                color: `${PrimaryMainColor}`,
                                transition: 'color 1s ease',
                                'textAlign': 'center',
                            }}>
                                {V2}
                            </Typography>
                            <Typography sx={{
                                marginTop: '10px',
                                color: `${PrimaryMainColor}`,
                                transition: 'color 1s ease',
                                'textAlign': 'center',
                            }}>
                                {V3}
                            </Typography>
                            <Typography sx={{ marginTop: '10px' }} >
                                <span style={{
                                    marginLeft: '20px',
                                    color: `${PrimaryMainColor}`,
                                    transition: 'color 1s ease'
                                }}>Математически цикломатическая сложность </span>
                                структурированной программы определяется с помощью
                                ориентированного графа, узлами которого являются
                                блоки программы, соединенные рёбрами, если
                                управление может переходить с одного блока на другой.
                            </Typography>
                            <Typography sx={{ marginTop: '10px' }} >
                                <span style={{
                                    marginLeft: '20px',
                                    color: `${PrimaryMainColor}`,
                                    transition: 'color 1s ease'
                                }}>Управляющий потоковый граф </span>
                                - это граф, узлы которого представляют базовые блоки кода,
                                а ребра представляют переходы между ними.
                            </Typography>
                            <img style={{ height: '78px' }}/>
                    </MyBox>
                </Grid>
            </Grid>

            <Grid justifyContent="center"
                container spacing={1}
                sx={{ 'textAlign': 'center' }}
            >
                <Grid item xs={1} md={1}>
                    <MyButton variant="contained"
                        color="primary"
                        onClick={calculateButtonClick}
                    >
                        Calculate
                    </MyButton>
                </Grid>
                <Grid item xs={1} md={1}>
                    <MyButton variant="contained"
                        color="primary"
                        onClick={clearButtonClick}
                        style={{ width: '115px' }}
                    >
                        Clear
                    </MyButton>
                </Grid>
            </Grid>
        </>
    );
};

export default Graph;