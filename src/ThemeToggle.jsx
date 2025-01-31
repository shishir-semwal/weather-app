import { ThemeProvider, createTheme, Paper, Container, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useState } from 'react';

export default function ThemeToggle({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            background: {
                default: darkMode ? '#1a1a2e' : '#f0f2f5',
                paper: darkMode ? '#2d3436' : '#ffffff',
            },
            primary: {
                main: darkMode ? '#00b4d8' : '#0096c7',
            },
            text: {
                primary: darkMode ? '#ffffff' : '#2d3436',
            }
        },
        typography: {
            h2: {
                fontSize: '2.5rem',
                fontWeight: 600,
                marginBottom: '1rem',
                color: darkMode ? '#ffffff' : '#2d3436'
            },
            h5: {
                fontWeight: 500,
                marginBottom: '1rem'
            }
        },
        components: {
            MuiCard: {
                styleOverrides: {
                    root: {
                        borderRadius: '12px',
                        boxShadow: darkMode 
                            ? '0 4px 20px rgba(0,0,0,0.4)'
                            : '0 4px 20px rgba(0,0,0,0.1)',
                        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                        '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: darkMode 
                                ? '0 8px 25px rgba(0,0,0,0.5)'
                                : '0 8px 25px rgba(0,0,0,0.15)'
                        }
                    }
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: '8px',
                        textTransform: 'none',
                        fontWeight: 500,
                        padding: '8px 24px'
                    }
                }
            },
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '8px'
                        }
                    }
                }
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    minHeight: '100vh',
                    backgroundColor: theme.palette.background.default,
                    transition: 'background-color 0.3s ease',
                    pt: 4,
                    pb: 8
                }}
            >
                <Container maxWidth="lg">
                    <Box sx={{ position: 'relative', mb: 4 }}>
                        <IconButton 
                            sx={{ 
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                backgroundColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                                '&:hover': {
                                    backgroundColor: darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)',
                                }
                            }}
                            onClick={() => setDarkMode(!darkMode)} 
                            color="inherit"
                        >
                            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                    </Box>
                    <Paper 
                        elevation={0}
                        sx={{ 
                            borderRadius: '16px',
                            padding: { xs: 2, sm: 4 },
                            backgroundColor: 'transparent'
                        }}
                    >
                        {children}
                    </Paper>
                </Container>
            </Box>
        </ThemeProvider>
    );
}