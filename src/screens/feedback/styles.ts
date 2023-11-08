import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

type Props = {
  healthy: boolean
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<Props>`
  align-items: center;
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme, healthy }) => healthy ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  line-height: 31.2px;
`

export const Subtitle = styled.Text<Props>`
  align-items: center;
  text-align: center;
  padding: 12px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  margin-bottom: 12px;
`
export const Strong = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`

export const Image = styled.Image`
  margin-top: 12px;
  width: 224px;
  height: 288px;
`
