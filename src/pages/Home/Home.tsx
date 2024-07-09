import {
    InicioContainer,
    ImagemContainer,
    ImagemLateral,
    Descricao,
    PrimeiraLetra,
    DescricaoH1,
    DescricaoTexto,
} from "./styled";
import Pet from '../../assets/pet.png'

const Home = () => {
    return (
        <InicioContainer>
            <ImagemContainer>
                <ImagemLateral src={Pet} alt="Alimentador Programável PET" />
            </ImagemContainer>
            <Descricao>
                <DescricaoH1>
                    <PrimeiraLetra>A</PrimeiraLetra>limentador{" "}
                    <PrimeiraLetra>P</PrimeiraLetra>rogramável PET
                </DescricaoH1>
                <DescricaoTexto>
                    Conheça o projeto inovador que automatiza a tarefa de
                    alimentar seu pet. Com ele, você pode agendar e controlar a
                    alimentação do seu amigo de estimação através de um
                    aplicativo, de qualquer lugar do mundo. Ofereça ao seu pet
                    uma rotina mais saudável e conveniente, enquanto desfruta de
                    tranquilidade com nosso sistema avançado e acessível.
                </DescricaoTexto>
            </Descricao>
        </InicioContainer>
    );
};

export default Home;
