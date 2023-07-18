import { TextInput } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, DataDetails, DescriptionText, DetailsContainer, HeaderTitle, MainContainer, NameText, TimeInput, Title } from "./styles";

export function New({ ...rest }: TextInput) {
  const { COLORS } = useTheme()
  return (
    <Container>
      <HeaderTitle>Nova refeição</HeaderTitle>

      <DetailsContainer>
        <Title>Nome</Title>
        <NameText
          placeholderTextColor={COLORS.GRAY_4}
          placeholder="Nome"
          {...rest}
        />

        <Title>Descrição</Title>
        <DescriptionText
          placeholderTextColor={COLORS.GRAY_4}
          placeholder="Descrição"
          multiline
          numberOfLines={4}
          {...rest}
        />


        <MainContainer>
          <DataDetails>
            <Title>Data</Title>
            <TimeInput />
          </DataDetails>

          <DataDetails>
            <Title>Hora</Title>
            <TimeInput />
          </DataDetails>
        </MainContainer>

        <MainContainer>
          <Title>Está dentro da dieta?</Title>
        </MainContainer>
      </DetailsContainer>

    </Container >
  );
}