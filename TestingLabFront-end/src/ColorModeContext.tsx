import React, { createContext, useContext, useMemo, useState, ReactNode } from 'react';
import { ThemeProvider, createTheme, Theme } from '@mui/material';

interface ColorModeContextProps {
    toggleColorMode: () => void;
    theme: Theme;
}

const ColorModeContext = createContext<ColorModeContextProps | undefined>(undefined);

export const useColorMode = () => {
    const context = useContext(ColorModeContext);
    if (!context) {
        throw new Error('useColorMode must be used within a ColorModeProvider');
    }
    return context;
};

interface ColorModeProviderProps {
    children: ReactNode;
}

export const ColorModeProvider: React.FC<ColorModeProviderProps> = ({ children }) => {
    const [MyTheme, setMyTheme] = useState<'yellow' | 'purple'>('yellow');

    const toggleColorMode = () => {
        setMyTheme(prevMode => (prevMode === 'yellow' ? 'purple' : 'yellow'));
    };

    const theme = useMemo(
        () =>
            createTheme({
                typography: {
                    fontFamily: 'Century Gothic'
                },
                palette: {
                    mode: MyTheme === 'yellow' ? 'light' : 'dark',
                    primary: {
                        main: MyTheme === 'yellow' ? '#0fba81' : '#ba0f0f',
                        dark: MyTheme === 'purple' ? '#0fba81' : '#ba0f0f',
                    },
                    text: {
                        primary: MyTheme === 'yellow' ? '#000000' : '#FFFFFF',
                        //secondary: '#FFFFFF', // Устанавливаем цвет второстепенного текста в темной теме (например, для подзаголовков и т. д.)
                    },
                    background: {
                        default: MyTheme === 'yellow' ? '#FFFFFF' : '#060606',
                    },
                    action: {
                        disabledBackground: MyTheme === 'yellow' ? '#FFFFFF' : '#252525',
                    }
                },
            }),
        [MyTheme]
    );

    const contextValue = useMemo(() => {
        return { toggleColorMode, theme };
    }, [MyTheme]);

    return (
        <ColorModeContext.Provider value={contextValue}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};