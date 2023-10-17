import React from 'react';

import { Paper, Typography, Grid, Box, } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import MyBox from '../../Common/MyBox';
import '../TestingLab3/Graph.css'

const Graph: React.FC = () => {
    const theme = useTheme();
    const PrimaryMainColor = theme.palette.primary.main;

    return (
        <>
            <Typography sx={{
                'text-align': 'center',
                color: `${PrimaryMainColor}`,
                transition: 'color 1s ease'
            }}>
                <h2>Control Flow Graph of the Program</h2>
            </Typography>
            <Grid container spacing={6} sx={{
                paddingTop: '1%',
                paddingBottom: '1%',
                paddingLeft: '3%', 
                paddingRight: '3%', 
            }}>
                <Grid item xs={6} md={6}>
                    <MyBox className="product-box">
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
                    </MyBox>
                </Grid>
                <Grid item xs={6} md={6}>
                    <MyBox className="product-box">
                        <Typography sx={{
                            'text-align': 'center',
                        }}>
                            Цикломатическая сложность V(G) - число независимых
                            линейных путей в базовом множестве, которое
                            определяется одним из способов:
                        </Typography>
                        <Typography sx={{
                            'text-align': 'center',
                            color: `${PrimaryMainColor}`,
                            transition: 'color 1s ease'
                        }}>
                            V(G) = R1 + R2
                        </Typography>
                        <Typography sx={{
                            'text-align': 'center',
                            color: `${PrimaryMainColor}`,
                            transition: 'color 1s ease'
                        }}>
                            V(G) = E - V + 2
                        </Typography>
                        <Typography sx={{
                            'text-align': 'center',
                            color: `${PrimaryMainColor}`,
                            transition: 'color 1s ease'
                        }}>
                            V(G) = P + 1
                        </Typography>
                        <img style={{height: '280px'} }
                        />
                    </MyBox>
                </Grid>
            </Grid>

        </>
    );
};

export default Graph;