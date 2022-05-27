import { Container } from "./styles";

export default function ContainerInitial ({children}) {

    const enabled = true; 

    return (
        <>
        <Container habilitado={enabled}>
            {children}
        </Container>
        </>
    )
}


