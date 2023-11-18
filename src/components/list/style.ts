import styled from "styled-components/native"

export type HealthyTypeStyleProps = true | false

type Props = {
  type: HealthyTypeStyleProps
}

export const Container = styled.View`
  width: 100%;

  flex-direction: row;

  padding: 16px;
  margin-bottom: 12px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_4};
`

export const Hour = styled.Text`
  padding: 0 6px 0 0;
  border-width: 0 1px 0 0;
  border-color: ${({ theme }) => theme.COLORS.GRAY_4};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`

export const Title = styled.Text`
  flex: 1;
  margin-left: 12px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_3};
`

export const Healthy = styled.View<Props>`
  width: 20px;
  padding: 12px;
  margin-left: 12px;

  justify-content: flex-end;
  align-items: flex-end;
  background-color: ${({ theme, type }) => type ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  border-radius: 44px;
`