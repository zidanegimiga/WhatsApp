import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatListItem from './src/components/ChatListItem';
import chats from './chats';

export default function App() {
  return (
    <View style={styles.container}>
      <ChatListItem chat={chats[0]}/>
      <ChatListItem chat={chats[1]}/>
      <ChatListItem chat={chats[2]}/>
      <ChatListItem chat={chats[3]}/>
      <ChatListItem chat={chats[4]}/>
      <ChatListItem chat={chats[5]}/>
      <ChatListItem chat={chats[6]}/>
      <ChatListItem chat={chats[7]}/>
      <ChatListItem chat={chats[8]}/>
      <ChatListItem chat={chats[8]}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
