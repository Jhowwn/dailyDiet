import { TouchableOpacityProps } from "react-native";
import { CheckedButton, Healthy, HealthyTypeStyleProps, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string
  type: boolean
  isHealthy: HealthyTypeStyleProps
}


export function Checked({ title, type, isHealthy, ...rest }: Props) {
  return (
    <CheckedButton
      type={isHealthy}
      {...rest}>
      <Healthy type={type} />
      <Title>{title}</Title>
    </CheckedButton>
  )
}