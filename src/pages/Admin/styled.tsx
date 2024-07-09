import { Button } from "@/components/ui/button";
import styled from "styled-components";

export const AdminContainer = styled.div`
    padding: 20px;
    max-width: 900px;
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 8px;
    background-color: #888888; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
`;

export const AdminHeader = styled.div`
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
    color: #333; 
`;

export const AdminMenu = styled.div`
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        text-align: center;
    }
`;

export const AdminMenuItemButton = styled(Button)`
    padding: 10px 20px;
    border: 1px solid #ccc; 
    border-radius: 4px;
    margin: 5px;
    background-color: #e0e0e0; 
    color: #333;
    transition: background-color 0.3s, color 0.3s;
    cursor: pointer;

    &:hover {
        background-color: #d1d1d1; 
        color: #000;
    }

    &.active {
        background-color: #ffc000; 
        color: white;
        border-color: #ffc000;
    }
`;

export const AdminContent = styled.div`
    border-top: 1px solid #ddd;
    color: #333; 

    table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;

        th,
        td {
            padding: 10px;
            border: 1px solid #ddd;
        }

        th {
            background-color: #888888; 
            color: #333; 
        }

        td {
            background-color: #888888; 
        }
    }
`;
