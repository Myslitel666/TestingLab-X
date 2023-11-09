import React, { useState } from 'react';

//MUI Import
import { Typography, Grid, Box, } from '@mui/material';
import { useTheme } from '@mui/material/styles';

//MyComponents Import
import MyBox from '../../Common/MyBox';
import DrawerLab5 from '../TestingLab5/DrawerLab5'
import LabsMenu from '../../Common/Header/LabsMenu';

//CSS Import
import '../TestingLab5/Cause-effectDiagram.css'
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const CaseEffectDiagram: React.FC = () => {
    const theme = useTheme();
    const PrimaryMainColor = theme.palette.primary.main;

    return (
        <>
            <DrawerLab5 />
            <LabsMenu />
            <Typography variant="h4"
                sx={{'textAlign': 'center',
                color: `${PrimaryMainColor}`,
                    transition: 'color 1s ease',
                    marginTop: '2%'
            }}>
                Cause and Effect Diagram of the Program
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
                                src='/images/Cause-effectDiagram.png'
                                alt='Cause and effectDiagram'
                                style={{
                                    maxWidth: '89%',
                                    maxHeight: '89%',
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
                            }}>Функциональное тестирование </span>
                            - процесс обнаружения ошибок в функциях программы на
                            всей области определения.
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
                            }}>Эквивалентное разбиение </span>
                            - метод функционального тестирования программы, основанный
                            на разбиении области определения исходных данных функции
                            на классы эквивалентности.
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
                            }}>Анализ граничных значений </span>
                            – метод функционального тестирования программного
                            обеспечения, основанный на создании тестовых вариантов,
                            анализирующих граничные значения. Обнаружение ошибок
                            производится на границах области ввода данных. Анализ
                            граничных значений дополняет метод классов эквивалентности.
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
                            }}>Метод функциональных диаграмм </span>
                            – метод функционального тестирования программного обеспечения,
                            основанный на проектировании тестовых вариантов, использующих
                            формальную запись логических условий и соответствующих
                            действий.
                        </Typography>

                        <img style={{ height: '75px' }}/>
                    </MyBox>
                </Grid>
            </Grid>

            <Grid container spacing={6} sx={{
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
                            }}>Black Box Testing </span>
                            - стратегия (метод) тестирования функционального поведения
                            объекта (программы, системы) с точки зрения внешнего мира,
                            при котором не используется знание о внутреннем устройстве (коде) тестируемого объекта.
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
                            }}>Black Box Testing </span>
                            - стратегия (метод) тестирования функционального поведения
                            объекта (программы, системы) с точки зрения внешнего мира,
                            при котором не используется знание о внутреннем устройстве (коде) тестируемого объекта.
                        </Typography>
                    </MyBox>
                </Grid>
            </Grid>

            <Grid justifyContent="center"
                container spacing={0}>
                <img
                    src='/images/Desicion Table.png'
                    alt='Formula'
                    style={{
                        maxWidth: '50%',
                        maxHeight: '50%',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        marginTop: '5px',
                        marginBottom: '50px',
                    }}
                    />
            </Grid>
        </>
    );
};

export default CaseEffectDiagram;