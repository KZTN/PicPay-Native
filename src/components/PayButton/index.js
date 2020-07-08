import React from 'react';
import {Button, Label} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableWithoutFeedback} from 'react-native';
export default function PayButton({onPress, focused}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button style={focused ? {backgroundColor: '#00ac4a'} : {}}>
        <Icon name="attach-money" size={30} color={focused ? '#000' : '#fff'} />
        <Label style={focused ? {color: '#000'} : {}}>Pagar</Label>
      </Button>
    </TouchableWithoutFeedback>
  );
}
