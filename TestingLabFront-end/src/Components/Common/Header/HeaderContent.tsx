import React, { useState } from 'react';

//MyComponents Import
import Logo from '../Header/Logo';
import ShopName from './SiteName';
import MyButton from '../MyButton';

//MUI Import
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';

export default function HeaderContent() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Logo />
            <Link underline="none" href = "/">
                <ShopName />
            </Link>
            <div style={{ flexGrow: 1, marginRight: '130px' }}></div>
            <div style={{
                display: 'flex', alignItems: 'center',
                marginRight: '10px'
            }}>
                <InputBase
                    placeholder={"Search in the TestingLab-X..."}
                    sx={{
                        width: '300px', backgroundColor: '#F3F3F3',
                        color: "#212121", paddingLeft: '10px',
                        marginRight: '10px'
                    }}
                />
                <MyButton
                    variant="contained"
                    color="primary"
                    startIcon={<SearchIcon />}
                    style={{ marginRight: '200px' }}
                >
                    Search
                </MyButton>
            </div>
            {/*position: 'static' äëÿ èñïðàâëåíèÿ áàãîâ ñìåùåíèÿ îáúåêòîâ*/}
            {/*âî âðåìÿ óâåëè÷åíèÿ ëîãî*/}
            <MyButton variant="outlined" color="primary"
                style={{
                    marginRight: '10px',
                    borderWidth: '2px',
                    position: 'static',
                }}>
                Sign in
            </MyButton>

            <MyButton variant="outlined" color="primary"
                style={{
                    borderWidth: '2px',
                    position: 'static',
                    //transition: 'background-color 5.3s ease;'
                }}
            >
                Sign up
                </MyButton>
        </div>

    );
}