import React from 'react';
import { View, Text, Button } from 'react-native';

const container = { flex: 1, alignItems: 'center', justifyContent: 'center' };

const message = ({ navigation }) => {
  return (
    <View style={container}>
      <Text>Messages Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
};

export default message;
