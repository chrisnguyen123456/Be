import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import IntroSlider from './src/introslider';
import LoginScreen from './src/LoginScreen';

export default function App() {
  return (
      <View>
        <LoginScreen/>
        {/* <IntroSlider/> */}
      </View>

  );
}


