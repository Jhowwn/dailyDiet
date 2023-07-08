import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export type HealthyStyleProps = true | false

type Props = {
  healthy: HealthyStyleProps
}

export const Container = styled(SafeAreaView) <Props>`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, healthy }) => healthy ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;

export const HeaderTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  margin-top: 14px;
`

export const HeaderSubtitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_3};
  text-align: center;
  margin-bottom: 14px;
`
export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  line-height: 31.2px;
`

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_3};
  line-height: 20px;
  text-align: center;
`

export const DetailsContainer = styled.View`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding:  24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  align-items: center;
`

export const DataDetails = styled.View`
  width: 100%;
  height: 90px;

  margin-top: 20px;
  align-items: center;
  justify-content: center;
  
  padding:  16px;
  border-radius: 8px;
  
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
`

export const QuantityDetailsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 20px;

  width: 100%;
`

export const QuantityDetails = styled.View<Props>`
  width: 164px;
  height:107px;
  background-color: ${({ theme, healthy }) => healthy ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
  padding: 16px;
  align-items: center;
  justify-content: center;
`
