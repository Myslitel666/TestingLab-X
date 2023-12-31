﻿import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const SiteName: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const theme = useTheme();
    const primaryMainColor = theme.palette.primary.main;
    const primaryDarkColor = theme.palette.primary.dark;

    return (
        <Typography
            variant="h6"
            color={theme.palette.primary.main}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
                cursor: 'pointer',
                //color: isHovered ? `${primaryDarkColor}` : `${primaryMainColor}`,
                transition: 'color 1s ease',
                width:'130px'
            }}
        >
            TestingLab-X
        </Typography>
    );
};

export default SiteName;