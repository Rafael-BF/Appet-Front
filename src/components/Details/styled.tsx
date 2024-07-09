import styled from "styled-components";

export const CustomTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: #f8f9fa;
    color: #fff;

    th,
    td {
        padding: 12px;
        border: 1px solid #dee2e6;
        text-align: center;
    }

    th {
        background-color: #343a40;
        color: #ffffff;
    }

    tbody tr:hover {
        background-color: #e9ecef;
    }
`;

export const CustomTh = styled.th`
    @media (max-width: 768px) {
        display: none;
    }
`;

export const CustomTd = styled.th`
    @media (max-width: 768px) {
        display: none;
    }
`;

export const CustomActionTd = styled.th`
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const CustomImage = styled.img`
    height: 50px;
    border-radius: 4px;
`;

export const IconButton = styled.button`
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #ffc000;
    }

    &:last-child {
        margin-right: 0;
    }

    svg {
        width: 16px;
        height: 16px;
    }
`;
