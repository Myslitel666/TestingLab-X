import React, { useState } from 'react';

//MUI Import
import { Typography, Grid, Box, } from '@mui/material';
import { useTheme } from '@mui/material/styles';

//MyComponents Import
import MyBox from '../../Common/MyBox';
import DrawerLab6 from '../TestingLab6/DrawerLab6'
import LabsMenu from '../../Common/Header/LabsMenu';

//CSS Import
import '../TestingLab6/ModuleDiagram.css'
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const CaseEffectDiagram: React.FC = () => {
    const theme = useTheme();
    const PrimaryMainColor = theme.palette.primary.main;

    return (
        <>
            <DrawerLab6 />
            <LabsMenu />
            <Typography variant="h4"
                sx={{'textAlign': 'center',
                color: `${PrimaryMainColor}`,
                    transition: 'color 1s ease',
                    marginTop: '2%'
            }}>
                Module Diagram
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
                                src='/images/ModuleDiagram.png'
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
                    <MyBox minHeight = '485px'>
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
                            }}>Интеграционное тестирование </span>
                            - тестирование программного обеспечения,
                            на этапе сборки модулей в единый комплекс.
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
                            }}>Модуль-заглушка </span>
                            - программный модуль, обладающий тем же
                            интерфейсом, что и замещаемый модуль
                            нижележащего уровня.
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
                            }}>Монолитная сборка модулей </span>
                            – одновременное объединение модулей
                            в тестируемый комплекс
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
                            }}>Пошаговая сборка модулей </span>
                            – пошаговое (помодульное) наращивание комплекса программ
                            с пошаговым тестированием собираемого комплекса.
                        </Typography>
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

export default CaseEffectDiagram;