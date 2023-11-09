import React, { useState } from 'react';

//MUI Import
import { Typography, Grid, Box, } from '@mui/material';
import { useTheme } from '@mui/material/styles';

//MyComponents Import
import MyBox from '../../Common/MyBox';
import DrawerLab4 from '../TestingLab4/DrawerLab4'
import LabsMenu from '../../Common/Header/LabsMenu';

//CSS Import
import '../TestingLab4/DecisionTree.css'

const Graph: React.FC = () => {
    const theme = useTheme();
    const PrimaryMainColor = theme.palette.primary.main;

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
                Decision Tree of the Program
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
                                src='/images/DecisionTree.png'
                                alt='Formula'
                                style={{
                                    maxWidth: '97%',
                                    maxHeight: '97%',
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
                            }}>Класс эквивалентности в тестировании </span>
                            - это набор тестовых случаев, которые имеют
                            одинаковую логику и ожидаемый результат.
                            Мы используем классы эквивалентности для
                            представления группы входных данных или
                            состояний программы, которые должны 
                            обрабатываться одинаково.
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

                        <img style={{ height: '63px' }}/>
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
        </>
    );
};

export default Graph;