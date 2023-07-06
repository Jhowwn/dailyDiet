import { Container, Healthy, Hour, Title } from "./style";

type Props = {
  hour: string
  title: string
  isHealthy: boolean
}

export function List({ hour, title, isHealthy }: Props) {
  return (
    <Container>
      <Hour>{hour}</Hour>
      <Title>{title}</Title>
      <Healthy type={isHealthy} />
    </Container>
  )
}