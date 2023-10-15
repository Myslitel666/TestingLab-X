import { Typography } from '@mui/material';
import React from 'react';

import { useTheme } from '@mui/material/styles';

const Problem: React.FC = () => {
    const theme = useTheme();
    const primaryMainColor = theme.palette.primary.main;

    return (
        <>
            <Typography sx={{
                'text-align': 'center',
                color: `${primaryMainColor}`
            }}>
                <h2>Основная задача</h2>
            </Typography>
            <Typography>
                <span style={{
                    color: `${primaryMainColor}`,
                    marginRight: '10px',
                    marginLeft: '20px'
                }}>
                    Цель:
                </span>
                <span>
                    закрепить теоретические знания и получить практические навыки
                    в разработке программы тестирования методом базового пути.
                </span>
            </Typography>
        </>
    );
};

export default Problem;