import { Container, NewButton, Subtitle, Title } from "./styles";

export function Button() {
  return (
    <Container>
      <Subtitle>Refeições</Subtitle>
      <NewButton>
        <Title>Nova refeição</Title>
      </NewButton>
    </Container>
  )
}