import React from "react";
import { useClerk } from "@clerk/clerk-react";
import axios from "axios";
import { BASE_URL } from "../../utils/baseUrl";
import useGetDevices from "../../hooks/useDevices";
import {
    CustomActionTd,
    CustomImage,
    CustomTable,
    CustomTd,
    CustomTh,
    IconButton,
} from "./styled";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";

interface DetailProps {
    editDevice: (macAddress: string) => void;
}

const Detalhes: React.FC<DetailProps> = ({ editDevice }) => {
    const { user } = useClerk();

    const email = user?.emailAddresses[0]?.emailAddress;
    const { devices, loading, error, setDevices } = useGetDevices(email!);

    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`${BASE_URL}/${id}`);
            setDevices(devices.filter((device) => device.id !== id));
            toast.success('Deletado com sucesso')
        } catch (error) {
            console.error("Error deleting device:", error);
        }
    };


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    console.log("devices", devices);

    return (
        <CustomTable>
            <thead>
                <tr>
                    <CustomTh>FOTO</CustomTh>
                    <th>DEVICE</th>
                    <th>HORÁRIOS</th>
                    <th>AÇÕES</th>
                </tr>
            </thead>
            <tbody>
                {devices.map((device) => (
                    <tr key={device.id}>
                        <CustomTd>
                            <CustomImage
                                src={device.image}
                                alt={`Foto de ${device.name}`}
                            />
                        </CustomTd>
                        <td>{device.name}</td>
                        <td>{device.hourFeed.join(" - ")}</td>
                        <CustomActionTd>
                            {
                                <>
                                    <IconButton
                                        onClick={() => editDevice(device.macAddress)}
                                    >
                                        <FaEdit />
                                    </IconButton>
                                    <IconButton
                                        onClick={() => handleDelete(device.id)}
                                    >
                                        <FaTrashAlt />
                                    </IconButton>
                                </>
                            }
                        </CustomActionTd>
                    </tr>
                ))}
            </tbody>
        </CustomTable>
    );
};

export default Detalhes;
