import { createTheme } from "@mui/material";

const theme = createTheme({
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    maxWidth: '430px !important',
                    backgroundColor: '#05012b',
                    margin: '0 auto ',
                    padding: '0px 0px 40px 0px !important',
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    padding: '0 !important',
                },
            },
        },
    },
    palette: {
        primary: {
            main: '#00ECBE',
        },
        secondary: {
            main: '#f50057',
        },
        error: {
            main: '#f50057',
        },
    },
});

export default theme;