import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../../theme/Colors';
import PreviewLayout from '../../components/PreviewLayout';

const Page5 = () => {
  const [alignItems, setAlignItems] = useState('stretch');

  return (
    <PreviewLayout
      label='alignItems'
      selectedValue={alignItems}
      values={['stretch', 'flex-start', 'flex-end', 'center', 'baseline']}
      setSelectedValue={setAlignItems}
    >
      <View style={[styles.box, { backgroundColor: Colors.primary }]} />
      <View style={[styles.box, { backgroundColor: Colors.secondary }]} />
      <View style={[styles.box, { backgroundColor: Colors.tertiary }]} />
    </PreviewLayout>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 'auto',
    minWidth: 50,
    height: 50,
  },
});

export default Page5;
