import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import {
    MainNav,
    LogoMain,
    LogoName,
    ListMenu,
    Hamburger,
    SignInButtonStyled,
    UserButtonStyled,
} from "./styled";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

interface MenuItem {
    to: string;
    label: string | JSX.Element;
}

const Menu = () => {
    const { isSignedIn } = useUser();
    const [open, setOpen] = useState(false);

    const menuItems: MenuItem[] = [
        { to: "/apresentacao", label: "Apresentação" },
        { to: "/contato", label: "Contato" },
    ];

    const signedOutItems: MenuItem[] = [
        { to: "/", label: <SignInButtonStyled>Login</SignInButtonStyled> },
    ];

    const signedInItems: MenuItem[] = [
        { to: "/admin", label: "Administração" },
        { to: "/logout", label: <UserButtonStyled /> },
    ];

    const handleItemClick = () => {
        setOpen(false);
    };

    const renderMenuItems = (items: MenuItem[]) =>
        items.map((item, index) => (
            
            <li key={index}>
                <Link to={item.to} onClick={handleItemClick}>
                    {item.label}
                </Link>
            </li>
        ));

    return (
        <MainNav>
            <LogoMain>
                <Link to="/">
                    <img src={Logo} alt="logo" />
                </Link>
                <LogoName>
                    <h1>
                        AP <span>PET</span>
                    </h1>
                </LogoName>
            </LogoMain>
            <Hamburger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </Hamburger>
            <ListMenu open={open}>
                {renderMenuItems(menuItems)}
                {!isSignedIn && renderMenuItems(signedOutItems)}
                {isSignedIn && renderMenuItems(signedInItems)}
            </ListMenu>
        </MainNav>
    );
};

export default Menu;
