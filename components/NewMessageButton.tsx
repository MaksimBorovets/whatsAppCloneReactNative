import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Colors from '../constants/Colors'
import {useNavigation} from '@react-navigation/native'



const NewMessageButton = () => {
    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate('Contacts')
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <MaterialCommunityIcons
            name="message-reply-text"
            size={28}
            color="white"
          />
        </TouchableOpacity>
      </View>
    );
}

export default NewMessageButton

const styles = StyleSheet.create({
  container: {
      backgroundColor: Colors.light.tint,
      width:50,
      height:50,
      borderRadius:25,
      alignItems:'center',
      justifyContent:'center',
      position:'absolute',
      bottom:30,
      right:30,
  },
});
