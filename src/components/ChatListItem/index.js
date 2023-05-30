import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ChatListItem = () => {
  return (
    <View style={styles.container}>
        <Image 
            source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg'}}
            style={styles.image}
        />
        <View style={styles.content}>
            <View style={styles.row}>
                <Text style={styles.name} numberOfLines={1}>Lukas</Text>
                <Text style={styles.time}>8:30</Text>
            </View>
            <Text numberOfLines={2} style={styles.subTitle}> Hello there</Text>
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
    subTitle: {
        color: 'gray'
    }
})