import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"

type Props = {
  isHealthy: boolean
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  height: 102px;
  
  justify-content: center;
  align-items: center;
  
  padding: 24px;
  margin-bottom: 12px;

  background-color: ${({ theme, isHealthy }) => isHealthy ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
  `

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_3};
`
