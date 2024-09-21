import NavMenuItem from "src/components/page-parts/header/menu-item";

const pages: string[] = ['Btn1', 'Btn2', 'Btn3', 'Btn4'];

const NavMenuList = () => {
    return pages.map((page) => (
        <NavMenuItem page={page}/>
    ));
};

export default NavMenuList;