import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export type HealthyStyleProps = true | false

type Props = {
  healthy: boolean
}

export const Container = styled(SafeAreaView) <Props>`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, healthy }) => healthy ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const HeaderTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  margin-top: 14px;
  text-align: center;
  margin-bottom: 14px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`

export const TitleH2 = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_3};
  line-height: 20px;
  margin-bottom: 20px;
`

export const DetailsContainer = styled.View`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding:  24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const DataDetails = styled.View`
  min-height: 34px;
  max-width: 50%;
  align-items: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};

  border-radius: 44px;

  margin-top: 12px;
  margin-bottom: 24px;
`

export const IsHealthy = styled.View<Props>`
  width: 10px;
  padding: 5px;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 44px;

  background-color: ${({ theme, healthy }) => healthy ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`
