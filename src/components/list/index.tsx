import { TouchableOpacityProps } from "react-native";
import { Container, Healthy, Hour, Title } from "./style";

type Props = TouchableOpacityProps & {
  hour: string
  title: string
  isHealthy: boolean
}

export function List({ hour, title, isHealthy }: Props) {
  return (
    <Container>
      <Hour>{hour}</Hour>
      <Title>{title.length > 23 ? title.slice(0, 23).concat('...') : title}</Title>
      <Healthy type={isHealthy} />
    </Container>
  )
}