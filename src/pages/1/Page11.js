import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../../theme/Colors';
import PreviewLayout from '../../components/PreviewLayout';

const Page11 = () => {
  const [justifyContent, setJustifyContent] = useState('flex-start');

  return (
    <PreviewLayout
      label='justifyContent'
      selectedValue={justifyContent}
      values={[
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ]}
      setSelectedValue={setJustifyContent}
    >
      <View style={[styles.box, { backgroundColor: Colors.primary }]} />
      <View style={[styles.box, { backgroundColor: Colors.secondary }]} />
      <View style={[styles.box, { backgroundColor: Colors.tertiary }]} />
    </PreviewLayout>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
  },
});

export default Page11;
