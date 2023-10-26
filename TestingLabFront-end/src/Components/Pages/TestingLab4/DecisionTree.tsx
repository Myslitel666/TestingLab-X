import React, { useState } from 'react';

//MUI Import
import { Typography, Grid, Box, } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MyButton from '../../Common/MyButton';

//MyComponents Import
import MyBox from '../../Common/MyBox';
import DrawerLab4 from '../TestingLab4/DrawerLab4'
import LabsMenu from '../../Common/Header/LabsMenu';

//CSS Import
import '../TestingLab4/DecisionTree.css'

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
            <DrawerLab4 />
            <LabsMenu />
            <Typography variant="h4"
                sx={{'textAlign': 'center',
                color: `${PrimaryMainColor}`,
                    transition: 'color 1s ease',
                    marginTop: '2%'
            }}>
                Control Flow Graph of the Program
            </Typography>
            <Grid container spacing={6} sx={{
                paddingTop: '3%',
                paddingBottom: '3%',
                paddingLeft: '3%', 
                paddingRight: '3%', 
            }}>
                <Grid item xs={6} md={6}>
                    <MyBox>
                        <Typography sx={{

                        }}>
                            <Grid justifyContent="center"
                                  container spacing={0}>
                            <img
                                src='/images/Graph.png'
                                alt='Formula'
                                style={{
                                    maxWidth: '55%',
                                    maxHeight: '55%',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                    marginTop: '5px',
                                }}
                                />
                            </Grid>
                        </Typography>
                    </MyBox>
                </Grid>
                <Grid item xs={6} md={6}>
                    <MyBox>
                        <Typography sx={{
                            marginTop: '10px',
                            marginLeft: '10px',
                            marginRight: '10px',
                            marginBottom: '10px'
                        }}>
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
                        <Typography sx={{
                            marginTop: '10px',
                            marginLeft: '10px',
                            marginRight: '10px',
                            marginBottom: '10px'
                        }}>
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
                        <Typography sx={{
                            marginTop: '10px',
                            marginLeft: '10px',
                            marginRight: '10px',
                            marginBottom: '10px'
                        }}>
                            <span style={{
                                marginLeft: '20px',
                                color: `${PrimaryMainColor}`,
                                transition: 'color 1s ease'
                            }}>Управляющий потоковый граф </span>
                            - это граф, узлы которого представляют базовые блоки кода,
                            а ребра представляют переходы между ними.
                        </Typography>
                        <img style={{ height: '44px' }}/>
                    </MyBox>
                </Grid>
            </Grid>

            <Grid justifyContent="center"
                container spacing={1}
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

            <Grid container spacing={6} sx={{
                paddingTop: '3%',
                paddingBottom: '3%',
                paddingLeft: '3%',
                paddingRight: '3%',
            }}>
                <Grid item xs={6} md={6}>
                    <MyBox>
                        <Typography sx={{
                            marginTop: '10px',
                            marginLeft: '10px',
                            marginRight: '10px',
                            marginBottom: '10px'
                        }}
                        >
                            <span style={{
                                marginLeft: '20px',
                                color: `${PrimaryMainColor}`,
                                transition: 'color 1s ease'
                            }}>White Box Testing </span>
                            - метод тестирования программного обеспечения, который
                            предполагает, что внутренняя структура/устройство/
                            реализация системы известны тестировщику.
                            Подбор входных значений и процедура тестирования также
                            основыввается на знании кода.
                        </Typography>
                        <Typography sx={{
                            marginTop: '10px',
                            marginLeft: '10px',
                            marginRight: '10px',
                            marginBottom: '10px'
                        }}>
                            <span style={{
                                marginLeft: '20px',
                                transition: 'color 1s ease'
                            }}>При этом данный метод подразумевает, что все операторы,
                                переходы, решения должны быть покрыты.</span>
                        </Typography>
                    </MyBox>
                </Grid>
                <Grid item xs={6} md={6}>
                    <MyBox>
                        <Typography sx={{
                            marginTop: '10px',
                            marginLeft: '10px',
                            marginRight: '10px',
                            marginBottom: '10px'
                        }}
                        >
                            <span style={{
                                marginLeft: '20px',
                                color: `${PrimaryMainColor}`,
                                transition: 'color 1s ease'
                            }}>White Box Testing </span>
                            - метод тестирования программного обеспечения, который
                            предполагает, что внутренняя структура/устройство/
                            реализация системы известны тестировщику.
                            Подбор входных значений и процедура тестирования также
                            основыввается на знании кода.
                        </Typography>
                        <Typography sx={{
                            marginTop: '10px',
                            marginLeft: '10px',
                            marginRight: '10px',
                            marginBottom: '10px'
                        }}>
                            <span style={{
                                marginLeft: '20px',
                                transition: 'color 1s ease'
                            }}>При этом данный метод подразумевает, что все операторы,
                            переходы, решения должны быть покрыты.</span>
                        </Typography>
                    </MyBox>
                </Grid>
            </Grid>
        </>
    );
};

export default Graph;