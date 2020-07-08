import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background: #000;
  flex: 1;
  margin: 0;
  padding: 0;
`;

export const Header = styled.View`
  background: #52e78c;
  height: 240px;
  margin-top: -20px;
  padding-top: 20px;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const BalanceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
`;

export const Value = styled.Text`
  color: #fff;
  font-size: 38px;
  font-weight: 200;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const Info = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const Actions = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;
export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.6);
  padding: 8px 10px;
  border-radius: 25px;
  margin: 0 5px;
`;
export const ActionLabel = styled.Text`
  color: #fff;
  margin-left: 5px;
`;

export const UserBalance = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #1c1c1e;
  height: 60px;
  padding: 0 16px;
`;

export const UseBalanceTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

export const PaymentMethods = styled.View`
  margin-top: 30px;
  padding: 0 16px;
`;

export const PaymentMethodsTitle = styled.Text`
  color: #8e8e93;
  text-transform: uppercase;
`;

export const Card = styled.View`
  align-items: center;
  background: #1e232a;
  padding: 20px;
  border-radius: 8px;
  margin-top: 10px;
`;

export const CardBody = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CardDetails = styled.View`
  flex: 1;
`;

export const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
export const CardInfo = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.8);
`;

export const CardImg = styled.Image`
  margin-left: 20px;
  width: 50px;
`;

export const AddContainer = styled.TouchableOpacity`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  margin-right: auto;
`;

export const AddButton = styled.View``;

export const AddLabel = styled.Text`
  margin-left: 10px;
  color: #8e8e93;
`;

export const UseTicketButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
`;
export const UseTicketLabel = styled.Text`
  margin-left: 15px;
  color: #0db660;
  text-decoration: underline;
`;
