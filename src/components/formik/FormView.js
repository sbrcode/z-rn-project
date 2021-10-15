import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';

import Alignments from '../../theme/Alignments';

export default function FormView({ children, style }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={[Alignments.fill, style]}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={useHeaderHeight()}
      >
        <ScrollView keyboardShouldPersistTaps={'handled'}>{children}</ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
