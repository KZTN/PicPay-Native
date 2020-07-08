import React, {useState} from 'react';
import {StatusBar, Switch} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

import creditCardImage from '../../images/credit-card.png';

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UserBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardDetails,
  CardTitle,
  CardInfo,
  CardImg,
  CardBody,
  AddContainer,
  AddLabel,
  AddButton,
  UseTicketButton,
  UseTicketLabel,
} from './styles';

export default function Wallet() {
  const [isVisible, setIsVisible] = useState(true);
  const [UseBalance, setUseBalance] = useState(true);

  function handleToggleVisibility() {
    setIsVisible((prevState) => !prevState);
  }
  function handleToggleUseBalance() {
    setUseBalance((prevState) => !prevState);
  }
  return (
    <Wrapper>
      <StatusBar barStyle="light-content" backgroundColor="#52e78c" />
      <Header>
        <HeaderContainer>
          <Title>Saldo Picpay </Title>
          <BalanceContainer>
            <Value>
              R$ <Bold>{isVisible ? '0,00' : '----'}</Bold>
            </Value>
            <EyeButton onPress={handleToggleVisibility}>
              <FeatherIcons
                name={isVisible ? 'eye' : 'eye-off'}
                size={28}
                color="#FFF"
              />
            </EyeButton>
          </BalanceContainer>
          <Info>Seu saldo está rendendo 100% do CDI</Info>
          <Actions>
            <Action>
              <MaterialComunityIcons name="cash" size={20} color="#fff" />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>
            <Action>
              <FontAwesomeIcons name="bank" size={20} color="#fff" />
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>
      <UserBalance>
        <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
        <Switch value={UseBalance} onValueChange={handleToggleUseBalance} />
      </UserBalance>
      <PaymentMethods>
        <PaymentMethodsTitle>Forma de pagamento</PaymentMethodsTitle>
        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>Cadastre seu cartão de crédito</CardTitle>
              <CardInfo>
                Cadastre um cartão de crédito para poder fazer pagamentos mesmo
                quando não tiver saldo no seu Picpay
              </CardInfo>
            </CardDetails>
            <CardImg source={creditCardImage} resizeMode="contain" />
          </CardBody>
          <AddContainer>
            <AddButton>
              <AntDesignIcons name="pluscircleo" size={30} color="#0db660" />
            </AddButton>
            <AddLabel>Adicionar cartão de crédito</AddLabel>
          </AddContainer>
        </Card>
        <UseTicketButton>
          <MaterialComunityIcons
            name="ticket-outline"
            size={20}
            color="#0db660"
          />
          <UseTicketLabel>Usar código promocional</UseTicketLabel>
        </UseTicketButton>
      </PaymentMethods>
    </Wrapper>
  );
}
