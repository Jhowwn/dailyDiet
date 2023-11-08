import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, NewButton, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string
  width?: string
  height?: string
  type?: ButtonTypeStyleProps
}

export function Button({ title, type = 'NEW', width = '100%', height = '50', ...rest }: Props) {
  return (
    <NewButton
      type={type}
      w={width}
      h={height}
      {...rest}
    >
      <Title>{title}</Title>
    </NewButton>
  )
}