import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Menu from '@mui/material/Menu';
import * as React from "react";

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavSettingsItem = () => {

    const [anchorElSettings, setAnchorElSettings] = React.useState<null | HTMLElement>(null);

    const handleOpenSettingsMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElSettings(event.currentTarget);
    };

    const handleCloseSettingsMenu = () => {
        setAnchorElSettings(null);
    };

    return (
        <>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenSettingsMenu} sx={{ p: 0, color: 'white' }}>
                    <SettingsIcon />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElSettings}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElSettings)}
                onClose={handleCloseSettingsMenu}
            >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseSettingsMenu}>
                        <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                    </MenuItem>
                ))}
            </Menu>

        </>
    );
};

export default NavSettingsItem;