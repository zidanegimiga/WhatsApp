import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ChatListItem = ({chat}) => {
    const d = new Date(chat.lastMessage.createdAt)
    const h = d.getHours()
    const m = d.getMinutes()
  return (
    <View style={styles.container}>
        <Image 
            source={{ uri: `${chat.user.image}`}}
            style={styles.image}
        />
        <View style={styles.content}>
            <View style={styles.row}>
                <Text style={styles.name} numberOfLines={1}>{chat.user.name}</Text>
                <Text style={styles.time}>{h}:{m}</Text>
            </View>
            <Text numberOfLines={2} style={styles.subTitle}>{chat.lastMessage.text}</Text>
        </View>
    </View>
  )
}

export default ChatListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5
    },
    content: {
        flex: 1,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'lightgray'
    },
    image: {
        width: 56, 
        height: 56,
        aspectRatio: 1,
        borderRadius: 32,
        marginRight: 10 
    },
    row: {
        flexDirection: 'row',
        marginBottom: 5
    },
    name: {
        fontWeight: "bold",
        flex: 1,
    },
    time: {
        color: 'lightgray'
    },
    subTitle: {
        color: 'gray'
    }
})