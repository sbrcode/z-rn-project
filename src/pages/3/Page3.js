import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Image, FlatList, SafeAreaView, View } from 'react-native';
import Colors from '../../theme/Colors';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../../components/CustomButton';

const Page3 = () => {
  const [selectedList, setSelectedList] = useState([]);

  const openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedList((prevState) => [...prevState, pickerResult]);
  };

  const imageToTrash = (index) => {
    const newSelectedList = selectedList.slice();
    newSelectedList.splice(index, 1);
    return setSelectedList(newSelectedList);
  };

  let openShareDialogAsync = async (index) => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }
    console.log(selectedList[index]);
    await Sharing.shareAsync(selectedList[index].uri);
  };

  return (
    <SafeAreaView style={styles.container}>
      {selectedList && selectedList.length !== 0 && (
        <>
          <FlatList
            data={selectedList}
            keyExtractor={(item) => item.uri}
            contentContainerStyle={styles.images}
            renderItem={({ item, index }) => (
              <>
                <Image source={{ uri: item.uri }} style={styles.thumbnail} />
                {item.uri && (
                  <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => imageToTrash(index)}>
                      <MaterialCommunityIcons name='trash-can' color={Colors.brown} size={48} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openShareDialogAsync(index)}>
                      <MaterialCommunityIcons name='export-variant' color={Colors.secondary} size={40} />
                    </TouchableOpacity>
                  </View>
                )}
              </>
            )}
          />
          <CustomButton
            label={'Delete All Images !'}
            onPress={() => setSelectedList([])}
            customStyle={{ backgroundColor: Colors.grey }}
          />
        </>
      )}
      <CustomButton label={'Pick a photo'} onPress={openImagePickerAsync} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  images: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    width: 150,
    height: 300,
    resizeMode: 'cover',
    marginHorizontal: 5,
  },
});

export default Page3;
