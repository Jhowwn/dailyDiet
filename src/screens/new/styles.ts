import { TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_4};
`;

export const HeaderTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  padding: 14px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`

export const DetailsContainer = styled.View`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding:  24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const NameText = styled(TextInput)`
  min-height: 56px;
  max-height:  56px;
  
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  
  padding:  16px;
  
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_4};
  border-radius: 8px;
`;

export const DescriptionText = styled(TextInput)`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  padding: 0 16px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_4};
  border-radius: 8px;
`

export const TimeInput = styled(TextInput)`
  min-height: 56px;
  max-height:  56px;
  
  color: ${({ theme }) => theme.COLORS.GRAY_1};

  padding: 16px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_4};
  border-radius: 8px;
`

export const MainContainer = styled.View`
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-between;
`

export const DataDetails = styled.View`
  width: 160px;
`