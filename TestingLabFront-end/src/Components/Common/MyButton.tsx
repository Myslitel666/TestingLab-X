import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

interface MyButtonProps extends ButtonProps {
    // Дополнительные свойства, если необходимо
}

const MyButton: React.FC<MyButtonProps> = (props) => {
    const theme = useTheme();
    return (
        <Button
            {...props}
            disableElevation
            sx={{
                transition: 'background-color 1s ease, color 1s ease, border-color 1s ease',
                border: 1,
                '&:hover': {
                    border: 1,
                }
            }}
        />
    );
};

export default MyButton;
