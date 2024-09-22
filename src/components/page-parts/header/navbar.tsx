import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';

import Stack from '@mui/material/Stack';
import SearchMenuItem from "src/components/page-parts/header/search";
import NavMenuList from "src/components/page-parts/header/menu-list";
import NavMenuLogo from "src/components/page-parts/header/logo";
import NavSettingsItem from "src/components/page-parts/header/settings";


// todo deal with responsibility triggers in js


function ResponsiveAppBar() {

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <NavMenuLogo/>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <NavMenuList/>
                    </Box>


                    <Stack spacing={2} direction={'row'} sx={{
                        justifyContent: "flex-end",
                        alignItems: "center",
                    }}>
                        <Box>
                            <SearchMenuItem/>
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <NavSettingsItem/>
                        </Box>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;