import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const Actions = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const ActionElement = styled.Text`
  color: #10c86e;
  font-size: 16px;
  font-weight: bold;
  margin-left: 15px;
  text-decoration: underline;
`;

export const Card = styled.View`
  background: #1e222b;
  border-radius: 8px;
  margin-top: 20px;
  padding: 15px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

export const Description = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 15px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const CardBody = styled.View`
  margin-top: 20px;
`;

export const UserName = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const CardFooter = styled.View`
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
`;
export const Details = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  color: #f75175;
  font-size: 14px;
  font-weight: bold;
`;

export const Divider = styled.View`
  margin: 0 10px;
  width: 2px;
  height: 13px;
  background: rgba(255, 255, 255, 0.4);
`;
export const Date = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const DateLabel = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-left: 5px;
`;

export const Option = styled.TouchableOpacity`
  flex-direction: row;
`;
export const OptionLabel = styled.Text`
  margin: 0 10px;
  color: #fff;
`;
