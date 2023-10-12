﻿import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Paper, Typography, Grid, Box, } from '@mui/material';
import { Button } from '@mui/material';
import './PopularProducts.css'; // Импортируйте стили
import { useTheme } from '@mui/material/styles';
import MyButton from '../../Common/MyButton'

const PopularProducts: React.FC = () => {
    const [popularProducts, setPopularProducts] = useState<{
        descriptionLabsId: number; labDescription: string;
        labName: number; imageUrl: string
    }[]>([]);

    const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

    const handleMouseEnter = (descriptionLabsId: number) => {
        setHoveredProduct(descriptionLabsId);
    };

    const handleMouseLeave = () => {
        setHoveredProduct(null);
    };

    const theme = useTheme();
    const PrimaryMainColor = theme.palette.primary.main;
    const PrimaryDarkColor = theme.palette.primary.dark;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:7275/api/home/popular-products');
                setPopularProducts(response.data);
            } catch (error) {
                console.error('Error fetching popular products:', error);
            }
        };

        fetchData();
    }, []); // Пустой массив зависимостей, чтобы useEffect выполнился только один раз после монтирования компонента

    return (
        <Paper elevation={3} sx={{ paddingLeft: '20px', paddingTop: '13px', paddingRight: '20px'}}>
            <Typography fontWeight="bold" variant="h5">Works List</Typography>
            <Grid container spacing={2} sx={{
                paddingTop: '13px',
                paddingBottom: '27px'
                }}>
                {popularProducts.map((product) => (
                    <Grid item xs={2} md={2} key={product.descriptionLabsId}>
                        <Box
                            onMouseEnter={() => handleMouseEnter(product.descriptionLabsId)}
                            onMouseLeave={handleMouseLeave}
                            sx={{
                                border: `1px solid ${hoveredProduct === product.descriptionLabsId ? PrimaryDarkColor : PrimaryMainColor}`,
                                borderRadius: '10px',
                                padding: '10px',
                                textAlign: 'center',
                                cursor: 'pointer',
                            }}
                            className="product-box"
                        >
                            {/* Фотография товара */}
                            <img
                                src={product.imageUrl}
                                alt={product.labDescription}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '200px',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                    marginTop: '5px'
                                }}
                            />
                            {/* Информация о товаре */}
                            <Typography
                                fontWeight="bold"
                                variant="h5"
                                color="primary"
                                sx={{
                                    marginTop: '7px',
                                    transition: 'color 1s ease'
                                }}
                            >
                                {product.labName}
                            </Typography>
                            <Typography
                                className="product-name"
                                variant="subtitle1">
                                {product.labDescription}
                            </Typography>
                            <MyButton
                                variant="contained"
                                color="primary"
                                sx={{ marginBottom: '5px', }}>
                                Add to Cart
                            </MyButton>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default PopularProducts;
