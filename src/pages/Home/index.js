import React from 'react';
import {Text} from 'react-native';
import QRcodeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import GiftIcon from 'react-native-vector-icons/AntDesign';

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

import {
  Wrapper,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
  Container,
} from './styles';

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <QRcodeIcon name="qrcode-scan" size={30} color="#10c86e" />
          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>
          <GiftIcon name="gift" size={30} color="#10c86e" />
        </Header>
        <Suggestions />
        <Activities />
        <Tips />
        <Banner />
      </Container>
    </Wrapper>
  );
}
