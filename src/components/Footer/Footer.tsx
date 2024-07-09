import { FooterContainer, FooterText } from "./styled";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>
                &copy; {new Date().getFullYear()} AP <span>PET</span>. Todos os
                direitos reservados.
            </FooterText>
        </FooterContainer>
    );
};

export default Footer;
