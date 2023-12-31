import { Button } from "@components/button";
import { Checked } from "@components/checked";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FoodStorageDTO } from "@storage/food/FoodStorage.DTO";
import { newFood } from "@storage/food/newFood";
import { updateFood } from "@storage/food/updateFood";
import { useState } from 'react';
import { useTheme } from "styled-components/native";
import { Container, DataDetails, DescriptionText, DetailsContainer, HeaderTitle, MainContainer, NameText, TimeInput, Title } from "./styles";


export function New() {
  const route = useRoute()
  const food = (route.params as FoodStorageDTO) || {}

  const [title, setTitle] = useState(food.title || '')
  const [description, setDescription] = useState(food.description || '')
  const [date, setDate] = useState(food.date || '')
  const [hour, setHour] = useState(food.hour || '')
  const [isHealthy, setIsHealthy] = useState<boolean | null>(food.isHealthy)
  
  const navigation = useNavigation()

  function handleFeedback() {
    if (isHealthy !== null) {
      navigation.navigate('feedback', {isHealthy: isHealthy})
    }
  }

  const { COLORS } = useTheme()

  const handleNewDate = (date: string) => {
    let newDate = '';
    let numbers = '0123456789';

    for (let i = 0; i < date.length; i++) {
      if (numbers.indexOf(date[i]) > -1) {
        newDate = newDate + date[i];
      }
    }

    if (newDate.length <= 2) {
      setDate(newDate)
    } else if (newDate.length <= 4) {
      setDate(`${newDate.substring(0, 2)}/${newDate.substring(2)}`)
    } else if (newDate.length <= 8) {
      setDate(`${newDate.substring(0, 2)}/${newDate.substring(2, 4)}/${newDate.substring(4)}`)
    }
  }

  const handleNewHour = (time: string) => {
    if (parseInt(time.substring(0, 2)) > 24 || parseInt(time.substring(3, 5)) > 59) {
      console.log('data invalida')
    }

    let newText = '';
    let numbers = '0123456789';

    for (let i = 0; i < time.length; i++) {
      if (numbers.indexOf(time[i]) > -1) {
        newText = newText + time[i];
      }
    }

    if (newText.length <= 2) {
      setHour(newText)
    }
    if (newText.length <= 4) {
      setHour(`${newText.substring(0, 2)}:${newText.substring(2)}`)
    }
  }

  async function handleNewFood() {
    if (isHealthy === null) {
      return console.log('Não pode deixar vazio ')
    }
    
    try {
      const id = food.id || Math.random().toString()

      if (food) {
        await updateFood({ id, title, description, date, hour, isHealthy })
      } else {
        await newFood({ id, title, description, date, hour, isHealthy });
      }

      handleFeedback()
      setIsHealthy(null)
      setHour('')
      setDate('')
      setDescription('')
      setTitle('')

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
          value={title}
        />

        <Title>Descrição</Title>
        <DescriptionText
          placeholderTextColor={COLORS.GRAY_4}
          placeholder="Descrição"
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          onChangeText={setDescription}
          value={description}
        />

        <MainContainer>
          <DataDetails>
            <Title>Data</Title>
            <TimeInput
              placeholder="XX/XX/XXXX"
              keyboardType="numeric"
              maxLength={10}
              value={date}
              onChangeText={handleNewDate}
            />
          </DataDetails>

          <DataDetails>
            <Title>Hora</Title>
            <TimeInput
              placeholder="00:00"
              keyboardType="numeric"
              maxLength={5}
              value={hour}
              onChangeText={handleNewHour}
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

        <Button title={!food ? "Cadastrar refeição" : "Salvar Alteração"} onPress={handleNewFood} />
      </DetailsContainer>
    </Container >
  );
}