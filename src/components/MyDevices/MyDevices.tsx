import { useClerk } from "@clerk/clerk-react";
import {
    CustomContainer,
    CustomDeviceTd,
    CustomDeviceTh,
    CustomImage,
    CustomTable,
    FoodQuantity,
    Message,
} from "./styled";
import useGetDevices from "../../hooks/useDevices";

const MeusDevices = () => {
    const { user } = useClerk();

    const email = user?.emailAddresses[0]?.emailAddress;
    const { devices, loading, error } = useGetDevices(email!);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!user) {
        return (
            <CustomContainer>
                <Message>
                    Você precisa estar logado para ver os dispositivos.
                </Message>
            </CustomContainer>
        );
    }

    console.log("devices", devices);

    return (
        <>
            <CustomTable>
                <thead>
                    <tr>
                        <CustomDeviceTh>FOTO</CustomDeviceTh>
                        <th>DEVICE</th>
                        <th>HORÁRIOS</th>
                        <th>TEMPO DO MOTOR</th>
                        <CustomDeviceTh>NÍVEL DE ALIMENTO</CustomDeviceTh>
                    </tr>
                </thead>
                <tbody>
                    {devices.map((device) => (
                        <tr key={device.id}>
                            <CustomDeviceTd>
                                <CustomImage
                                    src={device.image}
                                    alt={`Foto de ${device.name}`}
                                />
                            </CustomDeviceTd>
                            <td>{device.name}</td>
                            <td>{device.hourFeed.join(" - ")}</td>
                            <td>{device.doorTime} segundos</td>
                            <FoodQuantity
                                quantity={normalizeAmountFood(
                                    device.amountFood
                                )}
                            >
                                {device.amountFood
                                    ? device.amountFood
                                    : "BAIXO"}
                            </FoodQuantity>
                        </tr>
                    ))}
                </tbody>
            </CustomTable>
        </>
    );
};

function normalizeAmountFood(amountFood: string): "CHEIO" | "METADE" | "BAIXO" {
    const normalized = amountFood.toUpperCase();
    if (
        normalized === "CHEIO" ||
        normalized === "METADE" ||
        normalized === "BAIXO"
    ) {
        return normalized as "CHEIO" | "METADE" | "BAIXO";
    } else {
        return "BAIXO";
    }
}

export default MeusDevices;
