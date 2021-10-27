import React from 'react';
import { Button } from 'react-native-paper';
import AppStyle from '../theme/AppStyle';

export default function CustomButton(props) {
  return (
    <Button mode={'contained'} style={[AppStyle.button, props.customStyle]} dark {...props}>
      {props.label}
    </Button>
  );
}
