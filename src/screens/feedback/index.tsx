import inDiet from '../../assets/inDiet.png';
import outDiet from '../../assets/outDiet.png';

import { Button } from "@components/button";
import { useRoute } from '@react-navigation/native';
import { Container, Image, Subtitle, Title } from "./styles";

type RouteParams = {
  isHealthy: boolean
}

export function Feedback() {
  const route = useRoute()
  // const { isHealthy } = route.params as RouteParams

  const issHealthy = false

  return (
    <Container>
      <Title healthy={issHealthy}>{issHealthy ? "Continue assim!" : "Que Pena!"}</Title>
      <Subtitle
        healthy={issHealthy}>
        {issHealthy ? "Você continua dentro da dieta. Muito bem!"
          : "Você saiu da dieta dessa vez, mas continue se esforçando e não desista!"}
      </Subtitle>
      <Image source={issHealthy ? inDiet : outDiet} />
      <Button title="Ir para a página inicial" />
    </Container>
  )
}