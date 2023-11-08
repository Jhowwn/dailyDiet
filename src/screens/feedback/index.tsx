import inDiet from '../../assets/inDiet.png';
import outDiet from '../../assets/outDiet.png';

import { Button } from "@components/button";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Container, Image, Strong, Subtitle, Title } from "./styles";

type RouteParams = {
  isHealthy: boolean
}

export function Feedback() {
  const navigation = useNavigation()

  function handleGoHome() {
    navigation.navigate('home')
  }

  const route = useRoute()
  const { isHealthy } = route.params as RouteParams

  return (
    <Container>
      <Title healthy={isHealthy}>{isHealthy ? "Continue assim!" : "Que Pena!"}</Title>
      {isHealthy ?
        (<Subtitle healthy={isHealthy}>
          Você continua <Strong>dentro da dieta</Strong>. Muito bem!
        </Subtitle>)
        :
        (<Subtitle healthy={isHealthy}>
          Você <Strong>saiu da dieta</Strong> dessa vez, mas continue se esforçando e não desista!
        </Subtitle>)
      }
      <Image source={isHealthy ? inDiet : outDiet} />
      <Button
        onPress={() => handleGoHome()}
        title="Ir para a página inicial"
        width='100'
        height='50'
      />
    </Container>
  )
}