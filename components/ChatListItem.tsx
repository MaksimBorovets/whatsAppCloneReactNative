import moment from 'moment';
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import { ChatRoom } from '../types'
import { useNavigation } from '@react-navigation/native'

export type ChatListItemProps = {
    chatRoom:ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const {chatRoom} = props;
    const user = chatRoom.users[1];
    const navigation = useNavigation()
  const onClick = () => {
    navigation.navigate('ChatRoom', {id: chatRoom.id, name: user.name})
  } 
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar} />
          <View style={styles.midContainer}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text numberOfLines={2} style={styles.lastMessage}>
              {chatRoom.lastMessage.content}
            </Text>
          </View>
        </View>

        <View style={styles.rightContainer}>
          <Text style={styles.time}>
            {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatListItem

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
  },
  midContainer: {
    justifyContent:'space-around'
  },
  leftContainer: {
    flexDirection: "row",
  },
  rightContainer: {},
  time: {
    fontSize: 14,
    color: "grey",
  },
  lastMessage: {
    fontSize: 16,
    color: "grey",
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 50,
  },
});
