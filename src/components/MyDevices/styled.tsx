import styled from "styled-components";

export const CustomContainer = styled.div`
    margin-top: 20px;
    padding: 0 20px;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
`;

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

export const CustomImage = styled.img`
    height: 50px;
    border-radius: 4px;
`;

export const Message = styled.div`
    margin-top: 20px;
    font-size: 18px;
    color: #6e6e6e;
`;

export const DeleteButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 47px;
    margin-left: 10px;
    font-size: 16px;
    border: 1px solid #4c4c4c;
    border-radius: 4px;
    background-color: #616161;
    cursor: pointer;
    color: #ffc000;
    transition: filter 0.3s ease;

    &:hover {
        background-color: #7d7d7d;
        color: #ffc000;
    }
`;

export const CustomDeviceTh = styled.th`
    @media (max-width: 768px) {
        display: none;
    }
`;

export const CustomDeviceTd = styled.th`
    @media (max-width: 768px) {
        display: none;
    }
`;

export const HourComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
`;

export const AddHourButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 40px;
    margin-bottom: 10px;
    font-size: 16px;
    border: 1px solid #4c4c4c;
    border-radius: 4px;
    background-color: #616161;
    cursor: pointer;
    color: #ffc000;
    transition: filter 0.3s ease;

    &:hover {
        background-color: #7d7d7d;
        color: #ffc000;
    }
`;

export interface FoodQuantityProps {
    quantity: "CHEIO" | "METADE" | "BAIXO" | " - ";
}

export const FoodQuantity = styled.td<FoodQuantityProps>`
    @media (max-width: 768px) {
        display: none;
    }
    color: ${(props) => {
        switch (props.quantity) {
            case "CHEIO":
                return "lightgreen";
            case "METADE":
                return "#FFC000";
            case "BAIXO":
                return "red";
            default:
                return "inherit";
        }
    }};
`;
