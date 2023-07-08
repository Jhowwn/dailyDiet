import { useNavigation, useRoute } from "@react-navigation/native";
import { Container, DataDetails, DetailsContainer, HeaderSubtitle, HeaderTitle, QuantityDetails, QuantityDetailsContainer, Subtitle, Title } from "./styles";

type RouteParams = {
  title: string
  subtitle: string
  healthy: boolean
}

export function Details() {

  const route = useRoute()
  const { title, subtitle, healthy } = route.params as RouteParams

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container healthy={healthy}>

      <HeaderTitle>{title}</HeaderTitle>
      <HeaderSubtitle>{subtitle}</HeaderSubtitle>

      <DetailsContainer>
        <Title>Estatísticas gerais</Title>

        <DataDetails>
          <Title>4</Title>

          <Subtitle>melhor sequência de pratos dentro da dieta</Subtitle>
        </DataDetails>

        <DataDetails>
          <Title>109</Title>

          <Subtitle>refeições registradas</Subtitle>
        </DataDetails>

        <QuantityDetailsContainer>

          <QuantityDetails healthy={true} >
            <Title>32</Title>

            <Subtitle>refeições dentro da dieta</Subtitle>
          </QuantityDetails>

          <QuantityDetails healthy={false}>
            <Title>77</Title>

            <Subtitle>refeições fora da dieta</Subtitle>
          </QuantityDetails>

        </QuantityDetailsContainer>

      </DetailsContainer>

    </Container >
  )
}