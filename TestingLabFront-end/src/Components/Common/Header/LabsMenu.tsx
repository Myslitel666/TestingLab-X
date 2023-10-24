import React, { useState, useEffect } from 'react';
import axios from 'axios';

//MUI Import
import BatteryCharging20Icon from '@mui/icons-material/BatteryCharging20';
import BatteryCharging30Icon from '@mui/icons-material/BatteryCharging30';
import BatteryCharging60Icon from '@mui/icons-material/BatteryCharging60';
import BatteryCharging80Icon from '@mui/icons-material/BatteryCharging80';
import BatteryCharging90Icon from '@mui/icons-material/BatteryCharging90';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import { useTheme } from '@mui/material/styles';
import MyTypography from '../MyTypography';

import ArchiveIcon from '@mui/icons-material/Archive';

//CSS Import
import './LabsMenu.css';

const renderIcon = (iconName: string) => {
    const iconMappings: { [key: string]: React.ReactNode } = {
        'BatteryCharging20': <BatteryCharging20Icon />,
        'BatteryCharging30': <BatteryCharging30Icon />,
        'BatteryCharging60': <BatteryCharging60Icon />,
        'BatteryCharging80': <BatteryCharging80Icon />,
        'BatteryCharging90': <BatteryCharging90Icon />,
        'BatteryChargingFull': <BatteryChargingFullIcon />,
        'Archive': <ArchiveIcon />,
    };
    return iconMappings[iconName] || null;
};

const LabsMenu: React.FC = () => {

    const apiUrl = process.env.REACT_APP_API_URL as string;

    const [data, setData] = useState<{ labName: string; labIcon: string }[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<{
                    labName: string; labIcon: string
                }[]>(`${apiUrl}/api/home/categories`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="category-menu">
            {data.map((labObject, index) => (
                <div key={index} className="category-item">
                    <MyTypography>
                        {renderIcon(labObject.labIcon) || <div>No Icon</div>}
                        {labObject.labName}
                    </MyTypography>
                </div>
            ))}
        </div>
    );
};

export default LabsMenu;