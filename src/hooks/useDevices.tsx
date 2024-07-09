import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/baseUrl";

interface DeviceProps {
    description: string;
    email: string;
    id: string;
    image: string;
    name: string;
    createdAt: Date;
    hourFeed: string[];
    doorTime: string;
    amountFood: string;
    macAddress: string;
}

const useGetDevices = (email: string) => {
    const [devices, setDevices] = useState<DeviceProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDevices = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`${BASE_URL}/${email}`);
                console.log("response",response)
                setDevices(response.data);
            } catch (err: any) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        if (email) {
            fetchDevices();
        }
    }, [email]);

    return { devices, loading, error, setDevices };
};

export default useGetDevices;
