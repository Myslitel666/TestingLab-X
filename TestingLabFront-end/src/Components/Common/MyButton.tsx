import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

interface MyButtonProps extends ButtonProps {
    // Дополнительные свойства, если необходимо
}

const MyButton: React.FC<MyButtonProps> = (props) => {
    return (
        <Button
            {...props}
            disableElevation
            sx={{
                transition: 'background-color 1s ease, color 1s ease, border-color 1s ease',
                boxShadow: '0px 0px 0px 1px',
                '&:hover': {
                    boxShadow: '0px 0px 0px 1px',
                }
                //...props.sx // Позволяет вам передавать другие стили через props
            }}
        />
    );
};

export default MyButton;
