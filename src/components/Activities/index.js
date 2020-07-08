import React from 'react';
import avatar from '../../images/avatar.jpg';
import FeatherIcons from 'react-native-vector-icons/Feather';
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

import {
  Container,
  Header,
  Title,
  Actions,
  ActionElement,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  DateLabel,
  Option,
  OptionLabel,
} from './styles';
export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
        <Actions>
          <ActionElement>Todas</ActionElement>
          <ActionElement>Minhas</ActionElement>
        </Actions>
      </Header>
      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>você</Bold> pagou a <Bold>@KaioCésar</Bold>
          </Description>
        </CardHeader>
        <CardBody>
          <UserName>KZTN</UserName>
        </CardBody>
        <CardFooter>
          <Details>
            <Value>R$ 18,00</Value>
            <Divider />
            <Date>
              <FeatherIcons name="lock" color="#fff" />
              <DateLabel>há 2 anos</DateLabel>
            </Date>
          </Details>
          <Actions>
            <Option>
              <MaterialComunityIcons
                name="comment-outline"
                size={14}
                color="#fff"
              />
              <OptionLabel>0</OptionLabel>
            </Option>
            <Option>
              <AntDesignIcons name="heart" size={14} color="#fff" />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}
