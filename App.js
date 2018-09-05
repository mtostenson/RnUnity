import React from 'react';
import { Text, StyleSheet, Image, View, Dimensions } from 'react-native';
import UnityView from 'react-native-unity-view';

export default class App extends React.Component<Props, State> {
    render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <UnityView style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 300, }} /> : null}
        <Text>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}