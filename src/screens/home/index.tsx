import { SectionList, Text } from "react-native";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { List } from "../../components/list";
import { Percent } from "../../components/percent";
import { Container } from "./styles";

export function Home() {
  const DATA = [
    {
      day: '12.08.22',
      data: [
        { hour: "20:00", title: 'Burger', isHealthy: true },
        { hour: "20:00", title: 'Cheese', isHealthy: true },
        { hour: "20:00", title: 'x-TUDO', isHealthy: true },
        { hour: "20:00", title: 'Salada', isHealthy: true }
      ]
    },
  ];

  return (
    <Container>
      <Header />
      <Percent title="90,86%" subtitle="das refeições dentro da dieta" />

      <Button />

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