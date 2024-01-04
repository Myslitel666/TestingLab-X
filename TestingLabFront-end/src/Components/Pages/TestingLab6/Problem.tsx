import { Typography } from '@mui/material';
import React from 'react';

//MUI Import
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box'

//MyComponents Import
import DrawerLab5 from '../TestingLab5/DrawerLab5'
import LabsMenu from '../../Common/Header/LabsMenu';

const Problem: React.FC = () => {
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
                marginTop: '20px'
            }}>
                The Main Task
            </Typography>

            <Typography sx={{ marginLeft: '30px', marginRight: '30px', marginTop: '10px' }}>
                <span style={{
                    color: `${PrimaryMainColor}`,
                    marginRight: '10px',
                    marginLeft: '20px',
                    transition: 'color 1s ease'
                }}>
                    Цель:
                </span>
                <span>
                    закрепить теоретические знания и получить практические
                    навыки в разработке программы тестирования методом
                    нисходящего тестирования.
                </span>
            </Typography>

            <Typography sx={{ marginLeft: '30px', marginRight: '30px', marginTop: '10px' } }>
                <span style={{
                    color: `${PrimaryMainColor}`,
                    marginRight: '10px',
                    marginLeft: '20px',
                    transition: 'color 1s ease'
                }}>
                    Используемые приёмы и технологии:
                </span>
                <span>
                    платформа разработки сайтов и web-приложений ASP.NET Core.
                    Архитектурный pattern разработки программного обеспечения
                    MVC (Model-View-Controller), стиль для построения
                    распределенных систем Rest, библиотека JavaScript для
                    создания пользовательских интерфейсов React. Среда
                    разработки Visual Studio Community 2022.
                </span>
            </Typography>

            <Typography sx={{ marginLeft: '30px', marginRight: '30px', marginTop: '10px' }}>
                <span style={{
                    color: `${PrimaryMainColor}`,
                    marginRight: '10px',
                    marginLeft: '20px',
                    transition: 'color 1s ease'
                }}>
                    Ключевые термины:
                </span>
                <span>
                    интеграционное тестирование, модуль-заглушка, категории заглушек,
                    монолитная сборка модулей, пошаговая сборка модулей.
                </span>
            </Typography>
            <Box
                textAlign = 'center'
            >
                <Typography variant="h4"
                    sx={{
                        textAlign: 'center',
                        color: `${PrimaryMainColor}`,
                        transition: 'color 1s ease',
                        marginTop: '20px'
                    }}>
                    Variant N
                </Typography>
                <Typography sx={{ marginLeft: '30px', marginRight: '30px', marginTop: '10px' }}>
                    В одномерном динамическом массиве, состоящем из целых чисел:
                </Typography>
                <Typography sx={{ marginLeft: '30px', marginRight: '30px', marginTop: '10px' }}>
                    1) Вычислить сумму всех элементов
                </Typography>
                <Typography sx={{ marginLeft: '30px', marginRight: '30px', marginTop: '10px' }}>
                    2) Определить кол-во элементов в массиве
                </Typography>
                <Typography sx={{ marginLeft: '30px', marginRight: '30px', marginTop: '10px' }}>
                    3) Вычислить среднее арифметическое значение всех чисел в массиве
                </Typography>
            </Box>
        </>
    );
};

export default Problem;