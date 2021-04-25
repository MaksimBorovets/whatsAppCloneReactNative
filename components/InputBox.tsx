import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { FontAwesome5, MaterialCommunityIcons, Entypo, Fontisto, MaterialIcons } from '@expo/vector-icons'
import Colors from '../constants/Colors';

const InputBox = () => {
  const [message, setMessage] = React.useState("");

const onMicrophonePress =()=> {
    console.log('Microphone')
}

const onSendPress =()=> {
    console.log(`Message => '${message}'`)
    // send message to the backend
    setMessage('')
}

    const onPress = () => {
        if (!message){
            onMicrophonePress()
        }else{
            onSendPress()
        }
    }
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name="laugh-beam" size={24} color="grey" />
        <TextInput
          placeholder="Type a message"
          value={message}
          onChangeText={setMessage}
          multiline
          style={styles.textInput}
        />
        <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
        {!message && (
          <Fontisto name="camera" size={24} color="grey" style={styles.icon} />
        )}
      </View>
      <TouchableOpacity onPress={onPress}> 
        <View style={styles.buttonContainer}>
          {!message ? (
            <MaterialCommunityIcons name="microphone" size={28} color="white" />
          ) : (
            <MaterialIcons name="send" size={28} color="white" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default InputBox

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        margin:10,
        alignItems:'center',
    },
    mainContainer:{
        flexDirection: 'row',
        backgroundColor: 'white',
        padding:10,
        borderRadius:25,
        marginRight:10,
        flex:1,
        alignItems:'flex-end',
    },
    buttonContainer: {
        backgroundColor: Colors.light.tint,
        borderRadius:25,
        width:50,
        height:50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput:{
        flex:1,
        marginHorizontal:10,
    },
    icon:{
        marginHorizontal:5,
    }
})
