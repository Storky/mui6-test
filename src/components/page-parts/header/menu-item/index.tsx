import Button from "@mui/material/Button";

const NavMenuItem = ({page}: {page: string}) => {
    return (
        <Button
            key={page}
            sx={{ my: 2, color: 'white', display: 'block' }}
        >
            {page}
        </Button>
    );
};

export default NavMenuItem;