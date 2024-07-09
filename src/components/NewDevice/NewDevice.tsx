import React, { createRef, useEffect, useState } from "react";
import {
    FormContainer,
    FormTitulo,
    FormLabel,
    FormInput,
    FormTextarea,
    FormButton,
} from "./styled";
import axios from "axios";
import { BASE_URL } from "../../utils/baseUrl";
import toast from "react-hot-toast";
import { useClerk } from "@clerk/clerk-react";
import {
    AddHourButton,
    CustomContainer,
    DeleteButton,
    HourComponent,
    Message,
} from "../MyDevices/styled";
import { FaPlus } from "react-icons/fa";

import { DeviceData } from "@/pages/Admin/Admin";
import ImageUpload from "../ImageUpload/ImageUpload";

interface NewDeviceProps {
    email?: string;
    name?: string;
    description?: string;
    image?: string;
    hourFeed: string[];
    doorTime?: string;
    macAddress: string;
}

interface NovoDeviceProps {
    deviceForm: DeviceData | null;
    setActiveComponent: React.Dispatch<React.SetStateAction<string>>;
}

const NovoDevice: React.FC<NovoDeviceProps> = ({ deviceForm }) => {
    const [profileImage, setProfileImage] = React.useState<string | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const [device, setDevice] = useState<NewDeviceProps>({
        email: "",
        name: "",
        description: "",
        image: "",
        hourFeed: [""],
        doorTime: "",
        macAddress: "",
    });

    const { user } = useClerk();

    console.log("deviceForm", deviceForm);

    if (!user) {
        return (
            <CustomContainer>
                <Message>
                    Você precisa estar logado para ver os dispositivos.
                </Message>
            </CustomContainer>
        );
    }

    useEffect(() => {
        if (!deviceForm) {
            setDevice({
                email: "",
                name: "",
                description: "",
                image: "",
                hourFeed: [""],
                doorTime: "",
                macAddress: "",
            });
        }
        if (deviceForm) {
            setDevice({
                name: deviceForm.name,
                description: deviceForm.description,
                image: deviceForm.image,
                hourFeed: deviceForm.hourFeed,
                doorTime: deviceForm.doorTime,
                macAddress: deviceForm.macAddress,
            });
            setImagePreview(deviceForm.image);
        }
    }, [deviceForm]);

    const handleOnChangeDevice = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setDevice((prevDevice) => ({
            ...prevDevice,
            [name]: value,
        }));
    };

    const handleOnChangeHourFeed = (
        index: number,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newHourFeeds = [...device.hourFeed];
        newHourFeeds[index] = e.target.value;
        setDevice((prevDevice) => ({
            ...prevDevice,
            hourFeed: newHourFeeds,
        }));
    };

    const addHourFeedField = () => {
        setDevice((prevDevice) => ({
            ...prevDevice,
            hourFeed: [...prevDevice.hourFeed, ""],
        }));
    };

    const removeHourFeedField = (index: number) => {
        const newHourFeeds = device.hourFeed.filter((_, i) => i !== index);
        setDevice((prevDevice) => ({
            ...prevDevice,
            hourFeed: newHourFeeds,
        }));
    };

    const inputFileRef = createRef<HTMLInputElement>();

    const cleanup = () => {
        if (profileImage) {
            URL.revokeObjectURL(profileImage);
        }
        if (inputFileRef.current) {
            inputFileRef.current.value = "";
        }
    };

    const setImageUpload = (newImage: any) => {
        if (profileImage) {
            cleanup();
        }
        setImagePreview(newImage);
    };

    const handleImageChange = (e: any) => {
        const newImage = e.target.files[0];
        if (newImage) {
            setProfileImage(newImage);
            setImageUpload(URL.createObjectURL(newImage));
        }
    };

    const uploadImage = async () => {
        if (profileImage) {
            const formData = new FormData();
            formData.append("file", profileImage);
            formData.append("upload_preset", "wg69ohrd");

            const response = await axios.post(
                "https://api.cloudinary.com/v1_1/wg69ohrd/image/upload",
                formData,
                {
                    params: {
                        api_key: "475668981383711",
                    },
                }
            );

            return response.data["secure_url"];
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const imageUrl = await uploadImage();

            const registerDevice: NewDeviceProps = {
                ...device,
                email: user?.emailAddresses[0].emailAddress,
                image: imageUrl,
            };

            if (deviceForm?.name) {
                const response = await axios.put(
                    `${BASE_URL}/${deviceForm.id}`,
                    registerDevice
                );
                console.log(response.data);
            } else {
                const response = await axios.post(
                    `${BASE_URL}/create`,
                    registerDevice
                );
                console.log(response.data);
            }

            toast.success("Cadastrado com sucesso!");
            setDevice({
                email: "",
                name: "",
                description: "",
                image: "",
                hourFeed: [""],
                doorTime: "",
                macAddress: "",
            });
            setImagePreview("");
            setProfileImage("");
        } catch (error) {
            console.error("Erro ao fazer upload:", error);
            toast.error("Algo deu errado");
        }
    };

    return (
        <FormContainer>
            <FormTitulo>
                Cadastro de um novo device
            </FormTitulo>
            <form onSubmit={handleSubmit}>
                <div>
                    <FormLabel>MAC/ID:</FormLabel>
                    <FormInput
                        id="macAddress"
                        type="text"
                        name="macAddress"
                        value={device.macAddress}
                        onChange={handleOnChangeDevice}
                        required
                    />
                </div>
                <div>
                    <FormLabel>Nome:</FormLabel>
                    <FormInput
                        id="nome"
                        type="text"
                        name="name"
                        value={device.name}
                        onChange={handleOnChangeDevice}
                        required
                    />
                </div>
                <div>
                    <FormLabel htmlFor="description">Descrição:</FormLabel>
                    <FormTextarea
                        id="description"
                        name="description"
                        value={device.description}
                        onChange={handleOnChangeDevice}
                        required
                    />
                </div>
                <div>
                    <FormLabel>Horários (HH:mm):</FormLabel>
                    {device.hourFeed.map((hourFeed, index) => (
                        <div key={index} style={{ display: "flex" }}>
                            <FormInput
                                type="time"
                                name={`hourFeed${index}`}
                                value={hourFeed}
                                onChange={(e) =>
                                    handleOnChangeHourFeed(index, e)
                                }
                                required
                            />

                            {index >= 1 && (
                                <DeleteButton
                                    type="button"
                                    onClick={() => removeHourFeedField(index)}
                                >
                                    X
                                </DeleteButton>
                            )}
                        </div>
                    ))}
                    <HourComponent>
                        <AddHourButton type="button" onClick={addHourFeedField}>
                            <FaPlus />
                        </AddHourButton>
                    </HourComponent>
                </div>
                <div>
                    <FormLabel htmlFor="doorTime">
                        Tempo de Porta Aberta (em segundos):
                    </FormLabel>
                    <FormInput
                        id="doorTime"
                        name="doorTime"
                        type="text"
                        value={device.doorTime}
                        onChange={handleOnChangeDevice}
                        required
                    />
                </div>
                <div>
                    <FormLabel htmlFor="image">Imagem:</FormLabel>
                    <ImageUpload
                        handleImageChange={handleImageChange}
                        imagePreview={imagePreview}
                        inputFileRef={inputFileRef}
                    />
                </div>
                <FormButton type="submit">Salvar</FormButton>
            </form>
        </FormContainer>
    );
};

export default NovoDevice;
