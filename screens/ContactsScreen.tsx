import React from 'react'
import { StyleSheet,FlatList, Text, TouchableOpacity, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import users from '../data/Users'
import ContactListItem from '../components/ContactListItem'

const ContactsScreen = () => {
    return (
    <View style={styles.container}>
      <FlatList  
      style={{width:'100%'}}
      data={users}
      renderItem={({item}) => <ContactListItem user={item} />}
      keyExtractor={(item) => item.id}
      /> 
    </View>
    );
}

export default ContactsScreen

const styles = StyleSheet.create({})
