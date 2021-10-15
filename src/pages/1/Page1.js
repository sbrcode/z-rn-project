import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import UserContext from '../../contexts/UserContext';
import RoutesNames from '../../navigation/RoutesNames';
import Alignments from '../../theme/Alignments';
import Colors from '../../theme/Colors';
// import Fonts from '../../theme/Fonts';

const Page1 = ({ navigation }) => {
  const { logout } = useContext(UserContext);

  return (
    <View style={[Alignments.fillColMain, { backgroundColor: Colors.primary30 }]}>
      <Button mode={'contained'} onPress={() => navigation.navigate(RoutesNames.Page4)} style={styles.btn}>
        <Text>{RoutesNames.Page4}</Text>
      </Button>

      <Button mode={'contained'} onPress={logout} style={styles.btn} dark>
        <Text>{'logout'}</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    margin: 20,
    padding: 10,
    borderRadius: 5,
  },
});

export default Page1;
