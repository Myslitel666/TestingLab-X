import { Typography } from '@mui/material';
import React from 'react';

import { useTheme } from '@mui/material/styles';

const Problem: React.FC = () => {
    const theme = useTheme();
    const PrimaryMainColor = theme.palette.primary.main;

    return (
        <>
            <Typography sx={{
                'text-align': 'center',
                color: `${PrimaryMainColor}`,
                transition: 'color 1s ease'
            }}>
                <h2>Основная задача</h2>
            </Typography>

            <Typography sx={{ marginLeft: '30px', marginRight: '30px' }}>
                <Typography>
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
                        в разработке программы тестирования методом базового пути.
                        </span>
                </Typography>
                <Typography sx={{ marginTop: '10px' } }>
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
                <Typography sx={{ marginTop: '10px' }}>
                    <span style={{
                        color: `${PrimaryMainColor}`,
                        marginRight: '10px',
                        marginLeft: '20px',
                        transition: 'color 1s ease'
                    }}>
                        Ключевые термины:
                    </span>
                    <span>
                        структурное тестирование, управляющий потоковый граф
                        программы, цикломатическая сложность, путь, ветвь, узел,
                        дуга, операторный узел, предикатный узел, независимый путь,
                        регион.
                    </span>
                </Typography>
            </Typography>

            <Typography sx={{
                'text-align': 'center',
                color: `${PrimaryMainColor}`,
                transition: 'color 1s ease'
            }}>
                <h2>Вариант n</h2>
            </Typography>

            <Typography sx={{
                'text-align': 'center',
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