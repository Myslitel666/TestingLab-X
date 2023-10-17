﻿import React from 'react';

import { Paper, Typography, Grid, Box, } from '@mui/material';

import { useTheme } from '@mui/material/styles';

const Graph: React.FC = () => {
    const theme = useTheme();
    const PrimaryMainColor = theme.palette.primary.main;

    return (
        <>
            <Typography sx={{
                'text-align': 'center',
                color: `${PrimaryMainColor}`
            }}>
                <h2>Control Flow Graph of the Program</h2>
            </Typography>
            <Grid container spacing={2} sx={{
                paddingTop: '1%',
                paddingBottom: '1%',
                paddingLeft: '1%', 
                paddingRight: '1%', 
            }}>
                <Grid item xs={6} md={6}>
                    <Box
                        sx={{
                            border: `1px solid ${PrimaryMainColor}`,
                            borderRadius: '10px',
                            padding: '10px',
                            cursor: 'pointer',
                        }}
                    >
                        <Typography sx={{
                            'text-align': 'center',
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
                    </Box>
                </Grid>
                <Grid item xs={6} md={6}>
                    <Box
                        sx={{
                            border: `1px solid ${PrimaryMainColor}`,
                            borderRadius: '10px',
                            padding: '10px',
                            cursor: 'pointer',
                        }}
                    >
                        <Typography sx={{
                            'text-align': 'center',
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
                    </Box>
                </Grid>
            </Grid>

        </>
    );
};

export default Graph;