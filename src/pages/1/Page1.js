import React, { useContext } from 'react';
import { View } from 'react-native';
import UserContext from '../../contexts/UserContext';
import RoutesNames from '../../navigation/RoutesNames';
import Alignments from '../../theme/Alignments';
import Colors from '../../theme/Colors';
import CustomButton from '../../components/CustomButton';
// import Fonts from '../../theme/Fonts';

const Page1 = ({ navigation }) => {
  const { logout } = useContext(UserContext);

  return (
    <View style={[Alignments.fillColMain, { backgroundColor: Colors.primary30 }]}>
      <CustomButton
        label={RoutesNames.Page11}
        onPress={() => navigation.navigate(RoutesNames.Page11)}
      />
      <CustomButton
        label={RoutesNames.Page12}
        onPress={() => navigation.navigate(RoutesNames.Page12)}
      />
      <CustomButton
        label={RoutesNames.Page13}
        onPress={() => navigation.navigate(RoutesNames.Page13)}
      />
      <CustomButton
        label={'logout'}
        onPress={logout}
        customStyle={{ backgroundColor: Colors.grey }}
      />
    </View>
  );
};

export default Page1;
