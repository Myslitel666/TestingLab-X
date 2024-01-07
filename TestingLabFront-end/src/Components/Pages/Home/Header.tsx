import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HeaderContent from '../../Common/Header/HeaderContent'
import { styled, useTheme } from '@mui/material/styles';

export default function ButtonAppBar() {
    const theme = useTheme();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                elevation={ 0 }
                sx={{
                    backgroundColor: `${theme.palette.action.disabledBackground}`
                }}
            >
                <Toolbar>
                    <HeaderContent/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}