import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../../theme/Colors';
import PreviewLayout from '../../components/PreviewLayout';

const Page13 = () => {
  const [alignContent, setAlignContent] = useState('flex-start');

  return (
    <PreviewLayout
      label='alignContent'
      selectedValue={alignContent}
      values={[
        'flex-start',
        'flex-end',
        'stretch',
        'center',
        'space-between',
        'space-around',
      ]}
      setSelectedValue={setAlignContent}
    >
      <View style={[styles.box, { backgroundColor: Colors.primary }]} />
      <View style={[styles.box, { backgroundColor: Colors.brown }]} />
      <View style={[styles.box, { backgroundColor: Colors.secondary }]} />
      <View style={[styles.box, { backgroundColor: Colors.white }]} />
      <View style={[styles.box, { backgroundColor: Colors.tertiary }]} />
    </PreviewLayout>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 150,
  },
});

export default Page13;
