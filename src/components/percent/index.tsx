import { TouchableOpacityProps } from "react-native";
import { Container, Subtitle, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string
  subtitle: string
  isHealthy: boolean
}

export function Percent({ title, subtitle, isHealthy, ...rest }: Props) {
  return (
    <Container isHealthy={isHealthy}  {...rest}>
      <Title>
        {title}
      </Title>
      <Subtitle>
        {subtitle}
      </Subtitle>
    </Container>
  )
}