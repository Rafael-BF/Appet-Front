import { useClerk } from "@clerk/clerk-react";

const UsuarioLogado = () => {
    const { user } = useClerk();
    return (
        <div>
            <p>
                <strong style={{ color: "#FFC000" }}> Usuario logado: </strong>
                {user?.fullName?.toUpperCase()} -{" "}
                {user?.emailAddresses[0].emailAddress.toUpperCase()}
            </p>
        </div>
    );
};
export default UsuarioLogado;
