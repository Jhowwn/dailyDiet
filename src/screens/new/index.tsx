import { Button } from "@components/button";
import { Checked } from "@components/checked";
import { newFood } from "@storage/food/newFood";
import { useState } from 'react';
import { TextInput } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, DataDetails, DescriptionText, DetailsContainer, HeaderTitle, MainContainer, NameText, TimeInput, Title } from "./styles";


export function New({ ...rest }: TextInput) {
  const { COLORS } = useTheme()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [hour, setHour] = useState('')
  const [isHealthy, setIsHealthy] = useState<boolean | null>(null)

  async function fetchFood() {
    try {
      if (isHealthy === null) {
        return console.log('Não pode deixar vazio ')
      }

      await newFood({ title, description, date, hour, isHealthy });
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <HeaderTitle>Nova refeição</HeaderTitle>

      <DetailsContainer>
        <Title>Nome</Title>
        <NameText
          placeholderTextColor={COLORS.GRAY_4}
          placeholder="Nome"
          onChangeText={setTitle}
          {...rest}
        />

        <Title>Descrição</Title>
        <DescriptionText
          placeholderTextColor={COLORS.GRAY_4}
          placeholder="Descrição"
          multiline
          numberOfLines={4}
          onChangeText={setDescription}
          {...rest}
        />

        <MainContainer>
          <DataDetails>
            <Title>Data</Title>
            <TimeInput
              onChangeText={setDate}
            />
          </DataDetails>

          <DataDetails>
            <Title>Hora</Title>
            <TimeInput
              onChangeText={setHour}
            />
          </DataDetails>
        </MainContainer>

        <Title>Está dentro da dieta?</Title>
        <MainContainer>
          <DataDetails>
            <Checked
              title="Sim"
              type={true}
              isHealthy={isHealthy ? isHealthy : null}
              onPress={() => setIsHealthy(true)}
            />
          </DataDetails>
          <DataDetails>
            <Checked
              title="Não"
              type={false}
              isHealthy={!isHealthy ? isHealthy : null}
              onPress={() => setIsHealthy(false)}
            />
          </DataDetails>
        </MainContainer>

        <Button title="Cadastrar refeição" />
      </DetailsContainer>
    </Container >
  );
}