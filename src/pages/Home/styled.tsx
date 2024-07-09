import styled from "styled-components";

export const InicioContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 30px;
    color: white;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 20px;
    }
`;

export const ImagemContainer = styled.div`
    flex: 0 0 40%;
    margin-left: 20px;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const ImagemLateral = styled.img`
    margin-top: 60px;
    width: 100%;
    height: auto;
`;

export const Descricao = styled.div`
    flex: 0 0 60%;
    padding-right: 180px;
    @media (max-width: 768px) {
        padding-right: 0;
    }
`;

export const PrimeiraLetra = styled.span`
    color: white;
    font-weight: bold;
`;

export const DescricaoH1 = styled.h1`
    color: #ffc000;
    font-weight: bold;
    font-size: 50px;
    @media (max-width: 768px) {
        font-size: 36px;
        text-align: center;
    }
`;

export const DescricaoTexto = styled.p`
    font-size: 24px;
    color: white;
    text-align: justify;
    @media (max-width: 768px) {
        font-size: 18px;
        text-align: center;
    }
`;
