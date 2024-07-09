import {
    Container,
    Input,
    Label,
    PreviewContainer,
    PreviewImage,
    PreviewTitle,
} from "./styled";

const ImageUpload = ({
    handleImageChange,
    imagePreview,
    inputFileRef,
}: any) => {
    return (
        <Container>
            <Label>Upload da Imagem</Label>
            <Input
                ref={inputFileRef}
                type="file"
                hidden
                accept="image/*"
                name="image"
                onChange={handleImageChange}
            />

            {imagePreview && (
                <PreviewContainer>
                    <PreviewTitle>Pré-visualização da Imagem</PreviewTitle>
                    <PreviewImage src={imagePreview} alt="Preview" />
                </PreviewContainer>
            )}
        </Container>
    );
};

export default ImageUpload;
