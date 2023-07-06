import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, NewButton, Subtitle, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string
  type?: ButtonTypeStyleProps
}

export function Button({ title, type = 'NEW', ...rest }: Props) {
  return (
    <Container>
      <Subtitle>Refeições</Subtitle>
      <NewButton type={type}
        {...rest}
      >
        <Title>{title}</Title>
      </NewButton>
    </Container>
  )
}