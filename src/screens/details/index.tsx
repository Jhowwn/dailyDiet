import { useNavigation, useRoute } from "@react-navigation/native";
import { Container, DataDetails, DetailsContainer, HeaderSubtitle, HeaderTitle, QuantityDetails, QuantityDetailsContainer, Subtitle, Title } from "./styles";

type RouteParams = {
  percent: number
  registerMeals: number
  sequency: number
  isHealthy: boolean
  healthy: number
  notHealthy: number
}

export function Details() {

  const route = useRoute()
  const { percent, registerMeals, sequency, healthy, notHealthy, isHealthy } = route.params as RouteParams

  console.log(isHealthy)

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container healthy={isHealthy}>

      <HeaderTitle>{!percent ? 0 : percent.toFixed(2).replace('.', ',')} %</HeaderTitle>
      <HeaderSubtitle>das refeições dentro da dieta</HeaderSubtitle>

      <DetailsContainer>
        <Title>Estatísticas gerais</Title>

        <DataDetails>
          <Title>{sequency}</Title>

          <Subtitle>melhor sequência de pratos dentro da dieta</Subtitle>
        </DataDetails>

        <DataDetails>
          <Title>{registerMeals}</Title>

          <Subtitle>refeições registradas</Subtitle>
        </DataDetails>

        <QuantityDetailsContainer>

          <QuantityDetails healthy={true} >
            <Title>{healthy}</Title>

            <Subtitle>refeições dentro da dieta</Subtitle>
          </QuantityDetails>

          <QuantityDetails healthy={false}>
            <Title>{notHealthy}</Title>

            <Subtitle>refeições fora da dieta</Subtitle>
          </QuantityDetails>

        </QuantityDetailsContainer>

      </DetailsContainer>

    </Container >
  )
}