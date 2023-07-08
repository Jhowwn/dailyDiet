import { TouchableOpacityProps } from "react-native";
import { Container, Subtitle, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string
  subtitle: string
}

export function Percent({ title, subtitle, ...rest }: Props) {
  return (
    <Container  {...rest}>
      <Title>
        {title}
      </Title>
      <Subtitle>
        {subtitle}
      </Subtitle>
    </Container>
  )
}