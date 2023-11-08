import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonTypeStyleProps = "NEW" | "SAVE"

type Props = {
  type: ButtonTypeStyleProps
  w: string
  h: string
}

export const NewButton = styled(TouchableOpacity) <Props>`
  width: ${({ w }) => w === '100%' ? '100%' : '250px'};
  height: ${({ h }) => h}px;
  justify-content: center;
  align-items: center;
  
  border-radius: 8px;
  background-color: ${({ theme, type }) => type === "NEW" ? theme.COLORS.GRAY_1 : theme.COLORS.GRAY_1};

  margin-top: 12px;
  margin-bottom: 24px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.WHITE};
`
