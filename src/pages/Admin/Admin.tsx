import { useState } from "react";
import {
    AdminContainer,
    AdminHeader,
    AdminMenu,
    AdminMenuItemButton,
    AdminContent,
} from "./styled";
import MeusDevices from "../../components/MyDevices/MyDevices";
import Detalhes from "../../components/Details/Details";
import NovoDevice from "../../components/NewDevice/NewDevice";
import UsuarioLogado from "../../components/UserLogin/UserLogin";
import axios from "axios";
import { deviceEditBase_URL } from "@/utils/baseUrl";

export interface DeviceData {
    id: string;
    name: string;
    description: string;
    hourFeed: string[];
    doorTime: string;
    image: string;
    macAddress: string;
}

const Admin = () => {
    const [activeComponent, setActiveComponent] = useState("MeusDevices");
    const [deviceForm, setDevice] = useState<DeviceData>({
        id: "",
        name: "",
        description: "",
        hourFeed: [""],
        doorTime: "",
        image: "",
        macAddress: "",
    });

    const editDevice = async (macAddress: string) => {
        try {
            console.log("macAddress", macAddress);
            const response = await axios.get(
                `${deviceEditBase_URL}/${macAddress}`
            );
            console.log(response.data);
            setDevice({
                id: response.data.id,
                name: response.data.name,
                description: response.data.description,
                hourFeed: response.data.hourFeed,
                doorTime: response.data.doorTime,
                image: response.data.image,
                macAddress: response.data.macAddress,
            });
            setActiveComponent("NovoDevice");
        } catch (err) {
            console.log(err);
        }
    };

    const renderComponent = () => {
        switch (activeComponent) {
            case "MeusDevices":
                return <MeusDevices />;
            case "Detalhes":
                return <Detalhes editDevice={editDevice} />;
            case "NovoDevice":
                return (
                    <NovoDevice
                        deviceForm={deviceForm}
                        setActiveComponent={setActiveComponent}
                    />
                );
            case "UsuarioLogado":
                return <UsuarioLogado />;
            default:
                return <MeusDevices />;
        }
    };

    return (
        <AdminContainer>
            <AdminHeader>Área Administrativa</AdminHeader>
            <AdminMenu>
                <AdminMenuItemButton
                    className={
                        activeComponent === "MeusDevices" ? "active" : ""
                    }
                    onClick={() => setActiveComponent("MeusDevices")}
                >
                    Meus Devices
                </AdminMenuItemButton>
                <AdminMenuItemButton
                    className={activeComponent === "Detalhes" ? "active" : ""}
                    onClick={() => setActiveComponent("Detalhes")}
                >
                    Detalhes
                </AdminMenuItemButton>
                <AdminMenuItemButton
                    className={activeComponent === "NovoDevice" ? "active" : ""}
                    onClick={() => setActiveComponent("NovoDevice")}
                >
                    Novo Device
                </AdminMenuItemButton>
                <AdminMenuItemButton
                    className={
                        activeComponent === "UsuarioLogado" ? "active" : ""
                    }
                    onClick={() => setActiveComponent("UsuarioLogado")}
                >
                    Usuário logado
                </AdminMenuItemButton>
            </AdminMenu>
            <AdminContent>{renderComponent()}</AdminContent>
        </AdminContainer>
    );
};

export default Admin;
