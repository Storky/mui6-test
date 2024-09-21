import AdbIcon from "@mui/icons-material/Adb";
import Typography from "@mui/material/Typography";


const NavMenuLogo = () => {
    return (<>
        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
            }}
        >
            LOGO
        </Typography>
    </>);
};

export default NavMenuLogo;