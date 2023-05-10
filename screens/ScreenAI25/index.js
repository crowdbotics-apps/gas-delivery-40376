import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';

const DirectMessageScreen = () => {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([{
    id: '1',
    message: 'Hey, how are you?',
    sender: 'me'
  }, {
    id: '2',
    message: 'I am good, thanks for asking. How about you?',
    sender: 'other'
  }, {
    id: '3',
    message: 'I am doing great too. What brings you here?',
    sender: 'me'
  }, {
    id: '4',
    message: 'Just wanted to catch up with you. It has been a while since we talked.',
    sender: 'other'
  }, {
    id: '5',
    message: 'Yeah, it has been a while. How is your work going?',
    sender: 'me'
  }, {
    id: '6',
    message: 'It is going well. I am really busy these days, but I am enjoying it.',
    sender: 'other'
  }, {
    id: '7',
    message: 'That is great to hear. I am also busy with my work, but I am managing it.',
    sender: 'me'
  }, {
    id: '8',
    message: 'That is good. We should catch up sometime and talk more about our work.',
    sender: 'other'
  }]);

  const sendMessage = () => {
    if (message.trim() !== '') {
      setConversation([...conversation, {
        id: `${conversation.length + 1}`,
        message,
        sender: 'me'
      }]);
      setMessage('');
    }
  };

  const renderItem = ({
    item
  }) => <View style={{
    flexDirection: item.sender === 'me' ? 'row-reverse' : 'row',
    marginVertical: 5
  }}>
      <View style={{
      backgroundColor: item.sender === 'me' ? '#0084ff' : '#f2f2f2',
      borderRadius: 10,
      padding: 10
    }}>
        <Text style={{
        color: item.sender === 'me' ? '#fff' : '#000'
      }}>{item.message}</Text>
      </View>
    </View>;

  return <View style={_styles.udnSecTB}>
      <View style={_styles.VBsAsxDG}>
        <Image source={{
        uri: 'https://randomuser.me/api/portraits/men/1.jpg'
      }} style={_styles.LPaLDuQA} />
        <Text style={_styles.BbBEKQLU}>John Doe</Text>
      </View>
      <FlatList data={conversation} renderItem={renderItem} keyExtractor={item => item.id} inverted style={_styles.xcoCnKVs} />
      <View style={_styles.xwEbMgFq}>
        <TextInput value={message} onChangeText={text => setMessage(text)} placeholder="Type a message" style={_styles.OWmCVgAl} />
        <TouchableOpacity onPress={sendMessage} style={_styles.fZROdHPC}>
          <Image source={{
          uri: 'https://img.icons8.com/ios-glyphs/30/0084ff/send.png'
        }} style={_styles.xKDSklkE} />
        </TouchableOpacity>
      </View>
    </View>;
};

export default DirectMessageScreen;

const _styles = StyleSheet.create({
  udnSecTB: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20
  },
  VBsAsxDG: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10
  },
  LPaLDuQA: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  BbBEKQLU: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold"
  },
  xcoCnKVs: {
    flex: 1
  },
  xwEbMgFq: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10
  },
  OWmCVgAl: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    paddingHorizontal: 20
  },
  fZROdHPC: {
    marginLeft: 10
  },
  xKDSklkE: {
    width: 30,
    height: 30
  }
});