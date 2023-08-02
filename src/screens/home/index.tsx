import { List } from "@components/list";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { FoodStorageDTO } from "@storage/food/FoodStorage.DTO";
import { foodGetAll } from "@storage/food/foodsGetAll";
import { useCallback, useState } from "react";
import { SectionList } from "react-native";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Percent } from "../../components/percent";
import { ButtonContainer, Container, Day, Subtitle } from "./styles";


export function Home() {
  const [foods, setFoods] = useState<FoodStorageDTO[]>([])

  const navigation = useNavigation()

  function handleNewFood() {
    navigation.navigate('new')
  }

  let healthy = 0
  let notHealthy = 0
  //Calculate total of foods in the diet and out
  foods.map(food => {
    if (food.isHealthy === true) {
      healthy++
    } else {
      notHealthy++
    }
  })

  //Calculate the percent of foods stay in the diet and calculate all foods 
  const registerMeals = foods.length
  const percent = Number(((healthy / foods.length) * 100))

  //Send the infos for the datails
  function handleDetails() {
    navigation.navigate('details', {
      percent: percent,
      registerMeals: registerMeals,
      sequency: sequency,
      isHealthy: percent > 50 ? true : false,
      healthy: healthy,
      notHealthy: notHealthy
    })
  }


  //Get all register of foods
  async function fetchFood() {
    try {
      const data = await foodGetAll();
      setFoods(data);
    } catch (error) {
      console.log(error)
    }
  }

  //Using to refresh always the focus on sceens change to home
  useFocusEffect(useCallback(() => {
    fetchFood()
  }, []))

  //Calculate the best sequency of meals for the user
  let totalInDiet = 0;
  const sequency = foods.reduce((acc, item, index, array) => {
    if (item.isHealthy === true && array[index]?.isHealthy === true) {
      totalInDiet++;
    } else {
      totalInDiet = 0;
    }
    if (totalInDiet > acc) {
      acc = totalInDiet;
    }
    return acc;
  }, 0);


  //Listing all foods by the day
  const datas = Object.values(
    foods.reduce((acc, item) => {
      const date = item.date;
      if (!acc[date]) {
        acc[date] = {
          day: date,
          data: [],
        };
      }
      acc[date].data.push(item);
      return acc;
    }, {} as Record<string, { day: string; data: FoodStorageDTO[] }>)
  ).reverse();

  return (
    <Container>
      <Header />
      <Percent
        title={`${!percent ? 0 : percent.toFixed(2).replace('.', ',')} %`}
        subtitle="das refeições dentro da dieta" onPress={handleDetails}
      />

      <ButtonContainer>
        <Subtitle>Refeições</Subtitle>
        <Button title="Nova Refeição" onPress={handleNewFood} />
      </ButtonContainer>

      <SectionList
        sections={datas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <List key={item.title} hour={item.hour} title={item.title} isHealthy={item.isHealthy}></List>
        )}
        renderSectionHeader={({ section: { day } }) => (
          <Day>{day}</Day>
        )}
      />
    </Container>
  )
}