import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, NewButton, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string
  type?: ButtonTypeStyleProps
}

export function Button({ title, type = 'NEW', ...rest }: Props) {
  return (
    <NewButton type={type}
      {...rest}
    >
      <Title>{title}</Title>
    </NewButton>
  )
}