import { FormEvent, useRef } from "react";
import {
    FormContainer,
    FormTitulo,
    FormLabel,
    FormInput,
    FormTextarea,
    FormButton,
    RedesSociaisContainer,
} from "./styled";
import { FiLinkedin, FiInstagram, FiFacebook } from "react-icons/fi";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) {
            return;
        }

        emailjs
            .sendForm(
                "service_3nw00qw",
                "template_d2s595c",
                form.current,
                "jXwU-YDws07-5ljX5"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    toast.success("Enviado com sucesso");
                    form.current?.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <FormContainer>
            <FormTitulo>Entre em contato</FormTitulo>
            <form ref={form} onSubmit={handleSubmit}>
                <div>
                    <FormLabel>Nome:</FormLabel>
                    <FormInput type="text" name="user_name" required />
                </div>
                <div>
                    <FormLabel>Email:</FormLabel>
                    <FormInput type="text" name="user_email" required />
                </div>
                <div>
                    <FormLabel>Mensagem:</FormLabel>
                    <FormTextarea name="message" required />
                </div>
                <FormButton type="submit">Enviar</FormButton>
            </form>
            <RedesSociaisContainer>
                <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FiLinkedin />
                </a>
                <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FiInstagram />
                </a>
                <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FiFacebook />
                </a>
            </RedesSociaisContainer>
        </FormContainer>
    );
};

export default Contact;
