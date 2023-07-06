import { SectionList, Text } from "react-native";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { List } from "../../components/list";
import { Percent } from "../../components/percent";
import { Container } from "./styles";

import { useNavigation } from "@react-navigation/native";

export function Home() {
  const DATA = [
    {
      day: '12.08.22',
      data: [
        { hour: "20:00", title: 'Burger', isHealthy: false },
        { hour: "20:00", title: 'Cheese', isHealthy: false },
        { hour: "20:00", title: 'x-TUDO com salada e queijo', isHealthy: false },
        { hour: "20:00", title: 'Salada', isHealthy: true }
      ]
    },
  ];

  const navigation = useNavigation()

  function handleNewFood() {
    navigation.navigate('home')
  }

  return (
    <Container>
      <Header />
      <Percent title="90,86%" subtitle="das refeições dentro da dieta" />

      <Button title="Nova Refeição" onPress={handleNewFood} />

      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <List key={item.title} hour={item.hour} title={item.title} isHealthy={item.isHealthy}></List>
        )}
        renderSectionHeader={({ section: { day } }) => (
          <Text>{day}</Text>
        )}
      />
    </Container>
  )
}