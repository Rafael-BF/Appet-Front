import styled from "styled-components";

export const FormContainer = styled.div`
    background-color: #333;
    color: #f9f9f9;
    padding: 40px;
    max-width: 600px;
    margin: 0 auto;
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
    margin-top: 40px;
`;

export const FormTitulo = styled.h2`
    font-size: 28px;
    font-weight: bold;
    color: #ffc000;
    margin-bottom: 30px;
    text-align: center;
    text-transform: uppercase;
`;

export const FormLabel = styled.label`
    font-size: 16px;
    margin-bottom: 8px;
    display: block;
    color: #e0e0e0;
`;

export const FormInput = styled.input`
    width: 100%;
    padding: 12px;
    margin-bottom: 20px;
    font-size: 16px;
    border: 1px solid #fff;
    border-radius: 4px;
    background-color: #444;
    color: #fff;
    outline: none;

    &:focus {
        border-color: #ffc000;
        box-shadow: 0 0 5px rgba(255, 192, 0, 0.5);
    }
`;

export const FormTextarea = styled.textarea`
    width: 100%;
    padding: 12px;
    margin-bottom: 20px;
    font-size: 16px;
    border-radius: 4px;
    background-color: #444;
    color: #f9f9f9;
    resize: vertical;
    height: 150px;
    outline: none;

    border: 1px solid #fff;
    &:focus {
        border-color: #ffc000;
        box-shadow: 0 0 5px rgba(255, 192, 0, 0.5);
    }
`;

export const FormButton = styled.button`
    background-color: #ffc000;
    color: #333;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease, transform 0.3s ease;
    margin-top: 20px;
    width: 100%;

    &:hover {
        background-color: #e0a800;
        transform: translateY(-2px);
    }

    &:active {
        background-color: #c69000;
    }
`;
