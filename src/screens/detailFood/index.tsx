import { useNavigation, useRoute } from "@react-navigation/native";
import { Container, DataDetails, DetailsContainer, HeaderTitle, IsHealthy, Subtitle, Title } from "./styles";

type RouteParams = {
  title: string
  description: string
  date: Date
  hour: number
  isHealthy: boolean
}

export function DetailsFood() {
  const route = useRoute()
  const { title, description, date, hour, isHealthy } = (route.params as RouteParams) || {}

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container healthy={isHealthy}>

      <HeaderTitle>Refeição</HeaderTitle>

      <DetailsContainer>
        <Title>{title}</Title>

        <Subtitle>{description}</Subtitle>

        <Title>Data e hora</Title>
        <Subtitle>{`${date} às ${hour}`}</Subtitle>

        {isHealthy ?
          <DataDetails>
            <IsHealthy healthy={isHealthy} />
            <Title>dentro da dieta </Title>
          </DataDetails>
          :
          <DataDetails>
            <IsHealthy healthy={isHealthy} />
            <Title>fora da dieta</Title>
          </DataDetails>
        }

      </DetailsContainer>

    </Container >
  )
}