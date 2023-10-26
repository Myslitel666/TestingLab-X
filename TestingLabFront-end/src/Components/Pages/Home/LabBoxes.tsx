import React, { useState, useEffect } from 'react';
import axios from 'axios';

//MUI Import
import { Paper, Typography, Grid, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';

//MyComponents Import
import MyButton from '../../Common/MyButton'
import MyBox from '../../Common/MyBox';

//CSS Import
import '../Home/LabBoxes.css';

const LabsBoxes: React.FC = () => {
    const [labBoxes, setLabBoxes] = useState<{
        descriptionLabsId: number; labDescription: string;
        labName: number; imageUrl: string; labLink: string;
    }[]>([]);

    const apiUrl = process.env.REACT_APP_API_URL as string;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/home/popular-products`);
                setLabBoxes(response.data);
            } catch (error) {
                console.error('Error fetching popular products:', error);
            }
        };

        fetchData();
    }, []); // Пустой массив зависимостей, чтобы useEffect выполнился только один раз после монтирования компонента

    const theme = useTheme();
    const PrimaryDarkColor = theme.palette.text.primary;

    return (
        <Paper elevation={3} sx={{ paddingLeft: '20px', paddingTop: '13px', paddingRight: '20px'}}>
            <Typography fontWeight="bold" variant="h5">Works List</Typography>
            <Grid container spacing={2} sx={{
                paddingTop: '13px',
                paddingBottom: '27px'
                }}>
                {labBoxes.map((labBox) => (
                    <Grid item xs={2} md={2} key={labBox.descriptionLabsId}>
                        <Link href={labBox.labLink}
                              underline="none"
                        >
                            <MyBox>
                                <Grid justifyContent="center"
                                    container spacing={0}>
                                    <img
                                        src={labBox.imageUrl}
                                        alt={labBox.labDescription}
                                        style={{
                                            maxWidth: '100%',
                                            maxHeight: '200px',
                                            objectFit: 'cover',
                                            borderRadius: '8px',
                                            marginTop: '5px',
                                        }}
                                    />
                                    <Typography
                                        fontWeight="bold"
                                        variant="h5"
                                        color="primary"
                                        sx={{
                                            marginTop: '7px',
                                            transition: 'color 1s ease'
                                        }}
                                    >
                                        {labBox.labName}
                                    </Typography>
                                    <Typography
                                        className="product-name"
                                        variant="subtitle1"
                                        color={PrimaryDarkColor}
                                    >
                                        {labBox.labDescription}
                                    </Typography>
                                    <MyButton
                                        variant="contained"
                                        color="primary"
                                        sx={{
                                            marginBottom: '5px',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        View Lab Page
                                    </MyButton>
                                </Grid>
                            </MyBox>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default LabsBoxes;
