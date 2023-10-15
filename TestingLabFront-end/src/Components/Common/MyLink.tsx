import React, { useState } from 'react';
import Link, { LinkProps } from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';

interface MyButtonProps extends LinkProps {
    // �������������� ��������, ���� ����������
}

const MyButton: React.FC<MyButtonProps> = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const theme = useTheme();
    const primaryMainColor = theme.palette.primary.main;
    const primaryDarkColor = theme.palette.text.primary;

    return (
        <Link
            {...props}
            color={theme.palette.primary.main}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            underline="none"
            sx={{
                cursor: 'pointer',
                color: isHovered ? `${primaryMainColor}` : `${primaryDarkColor}`,
                transition: 'color 1s ease'
            }}
        />
    );
};

export default MyButton;
