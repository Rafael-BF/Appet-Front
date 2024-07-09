import styled from "styled-components";
import {
    SignInButton as ClerkSignInButton,
    UserButton as ClerkUserButton,
} from "@clerk/clerk-react";

export const SignInButtonStyled = styled(ClerkSignInButton)`
    background: none;
    border: none;
    color: inherit;
    font: inherit;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;
    padding: 0;
    margin: 0;

    &:hover {
        color: #ffc000;
        text-decoration: underline;
        background-color: #58617b;
    }
`;

export const UserButtonStyled = styled(ClerkUserButton)`
    background: none;
    border: none;
    color: inherit;
    font: inherit;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.25rem;
    padding: 0.5rem;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        text-decoration: underline;
    }
`;

export const MainNav = styled.nav`
    background: #58617b;
    color: white;
    min-height: 5vh;
    display: flex;
    margin: auto;
    justify-content: space-evenly;
    align-items: center;
    position: sticky;
`;

export const LogoMain = styled.div`
    display: flex;
    align-items: center;

    img {
        height: 90px;
    }
`;

export const LogoName = styled.div`
    text-decoration: none;
    color: inherit;

    span {
        color: #ffc000;
        font-weight: bold;
    }
`;

interface ListMenuProps {
    open: boolean;
}

export const ListMenu = styled.ul<ListMenuProps>`
    display: flex;
    list-style: none;
    background-color: #58617b;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.3s ease-in-out;

    @media (min-width: 768px) {
        position: static;
        transform: translateX(0);
        flex-direction: row;
        height: auto;
        background-color: transparent;
        width: auto;
    }

    li {
        padding: 10px;
    }

    a {
        color: white;
        text-decoration: none;

        &:hover {
            color: #ffc000;
            text-decoration: underline;
        }
    }
`;

export const Hamburger = styled.div<ListMenuProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 10;

    @media (min-width: 768px) {
        display: none;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background: white;
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        :first-child {
            transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
        }

        :nth-child(2) {
            opacity: ${({ open }) => (open ? "0" : "1")};
            transform: ${({ open }) =>
                open ? "translateX(20px)" : "translateX(0)"};
        }

        :nth-child(3) {
            transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
        }
    }
`;
