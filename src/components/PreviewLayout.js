import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Colors from '../theme/Colors';

const PreviewLayout = ({ label, children, values, selectedValue, setSelectedValue }) => (
  <View style={{ padding: 10, flex: 1 }}>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}
        >
          <Text style={[styles.buttonLabel, selectedValue === value && styles.selectedLabel]}>{value}</Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, { [label]: selectedValue }]}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: Colors.primary30,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: Colors.primary30,
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: Colors.tertiary,
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.tertiary,
  },
  selectedLabel: {
    color: Colors.white,
  },
});

export default PreviewLayout;
