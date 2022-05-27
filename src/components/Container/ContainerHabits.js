import { Container } from "./styles";



export default function ContainerHabits ({children}) {

    const enabled = false; 

    return (
        <>
        <Container habilitado={enabled}>
            {children}
        </Container>
        </>
    )
}