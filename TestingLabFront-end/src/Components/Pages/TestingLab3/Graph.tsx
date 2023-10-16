import React from 'react';

import { Typography } from '@mui/material';

import { useTheme } from '@mui/material/styles';

const Graph: React.FC = () => {
    const theme = useTheme();
    const primaryMainColor = theme.palette.primary.main;

    return (
        <>
            <Typography sx={{
                'text-align': 'center',
                color: `${primaryMainColor}`
            }}>
                <h2>Управляющий Потоквый Граф</h2>
            </Typography>

            <Typography sx={{
                'text-align': 'center',
            }}>
                <img
                    src='/images/Graph.png'
                    alt='Formula'
                    style={{
                        maxWidth: '40%',
                        maxHeight: '40%',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        marginTop: '5px'
                    }}
                />
            </Typography>
        </>
    );
};

export default Graph;