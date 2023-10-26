import { Typography } from '@mui/material';
import React from 'react';

//MUI Import
import { useTheme } from '@mui/material/styles';

//MyComponents Import
import DrawerLab4 from '../TestingLab4/DrawerLab4'
import LabsMenu from '../../Common/Header/LabsMenu';

const Problem: React.FC = () => {
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
                    закрепить теоретические знания и получить практические навыки
                    в разработке программы тестирования методом эквивалентного
                    разбиения классов.
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
                    структурное тестировние, класс эквивалентности, правильный
                    класс, неправильный класс, предусловия, постусловия,
                    дерево разбиения области данных, анализ граничных значений.
                </span>
            </Typography>

            <Typography variant="h4"
                sx={{'textAlign': 'center',
                color: `${PrimaryMainColor}`,
                    transition: 'color 1s ease',
                    marginTop: '20px'
            }}>
                Variant N
            </Typography>

            <Typography sx={{
                'textAlign': 'center',
            }}>
            <img
                src='/images/expressions/FormulaTesting.png'
                alt='Formula'
                style={{
                    maxWidth: '100%',
                    maxHeight: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginTop: '5px'
                }}
                />
            </Typography>
        </>
    );
};

export default Problem;