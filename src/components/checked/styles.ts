import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export type HealthyTypeStyleProps = null | true | false

type Props = {
  type: HealthyTypeStyleProps
}

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`

export const CheckedButton = styled(TouchableOpacity) <Props>`
  min-height: 56px;
  max-height:  56px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
  
  background-color: ${({ theme, type }) =>
    type === null ? theme.COLORS.GRAY_6
      : type ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  padding: 16px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_4};
  border-radius: 8px;

  margin-top: 12px;
  margin-bottom: 24px;
`

export const Healthy = styled.View<Props>`
  width: 5px;
  padding: 5px;
  margin-right: 15px;

  justify-content: flex-end;
  align-items: flex-end;
  background-color: ${({ theme, type }) => type ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  border-radius: 44px;
`
