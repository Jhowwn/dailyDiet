import { Button } from "@components/button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FoodStorageDTO } from "@storage/food/FoodStorage.DTO";
import { deleteFood } from "@storage/food/deleteFood";
import { Container, DataDetails, DetailsContainer, HeaderTitle, IsHealthy, Subtitle, Title, TitleH2 } from "./styles";

type RouteParams = {
  id: string
  title: string
  description: string
  date: string
  hour: string
  isHealthy: boolean
}

export function DetailsFood() {
  const route = useRoute()
  const { title, description, date, hour, isHealthy } = (route.params as RouteParams) || {}
  const food = route.params as RouteParams

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack();
  }

  function handleEditFood(item: FoodStorageDTO) {
    navigation.navigate('new', item)
  }

  async function handleDeleteFood(item: FoodStorageDTO) {
    await deleteFood(item.id)
    navigation.goBack();
  }

  return (
    <Container healthy={isHealthy}>

      <HeaderTitle>Refeição</HeaderTitle>

      <DetailsContainer>
        <Title>{title}</Title>

        <Subtitle>{description}</Subtitle>

        <TitleH2>Data e hora</TitleH2>
        <Subtitle>{`${date} às ${hour}`}</Subtitle>

        {isHealthy ?
          <DataDetails>
            <IsHealthy healthy={isHealthy} />
            <TitleH2>dentro da dieta </TitleH2>
          </DataDetails>
          :
          <DataDetails>
            <IsHealthy healthy={isHealthy} />
            <TitleH2>fora da dieta</TitleH2>
          </DataDetails>
        }

      <Button title="Editar refeição" onPress={() => handleEditFood(food)}/>
      <Button title="Excluir refeição" type="SAVE" onPress={() => handleDeleteFood(food)} />
      </DetailsContainer>
    </Container >
  )
}