import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'slide1',
    title: 'Welcome to our Car Booking App',
    text: 'Book a car hassle-free with just a few taps!',
    image: require('../assets/slide1.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'slide2',
    title: 'Choose Your Destination',
    text: 'Select your desired location and we will find the nearest available cars for you.',
    image: require('../assets/slide2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'slide3',
    title: 'Confirm and Ride',
    text: 'Confirm your booking and get ready for a comfortable ride.',
    image: require('../assets/slide3.png'),
    backgroundColor: '#22bcb5',
  },
];

const IntroSlider = () => {
  const _renderItem = ({ item }) => {
     return (
       <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
         {/* <Text style={styles.title}>{item.title}</Text> */}
         <Image source={item.image} style={styles.image} />
         <Text style={styles.text}>{item.text}</Text>
       </View>
     );
  };
 
  return (
     <AppIntroSlider renderItem={_renderItem} slides={slides} />
  );
 };
 
 const styles = StyleSheet.create({
  slide: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     padding: 10,
  },
  title: {
     fontSize: 22,
     textAlign: 'center',
     color: 'white',
  },
  text: {
     fontSize: 16,
     textAlign: 'center',
     color: 'white',
  },
  image: {
     width: 320,
     height: 320,
     resizeMode: 'contain',
  },
 });
 
 export default IntroSlider;



// import React, { useState } from 'react';
// import { StyleSheet, View, Text, Image } from 'react-native';
// import AppIntroSlider from 'react-native-app-intro-slider';

// const slides = [
//   {
//     key: 1,
//     title: 'Title 1',
//     text: 'Description.\nSay something cool',
//     image: require('../assets/slide1.png'),
//   },
//   {
//     key: 2,
//     title: 'Title 2',
//     text: 'Other cool stuff',
//     image: require('../assets/slide2.png'),
//   },
//   {
//     key: 3,
//     title: 'Rocket guy',
//     text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
//     image: require('../assets/slide3.png'),
//   }
// ];

// export default function IntroSlider() {
//   const [showRealApp, setShowRealApp] = useState(false);

//   const renderItem = ({ item }) => {
//     return (
//       <View style={styles.slide}>
//         <Text style={styles.title}>{item.title}</Text>
//         <Image source={item.image} />
//         <Text style={styles.text}>{item.text}</Text>
//       </View>
//     );
//   };

//   const onDone = () => {
//     setShowRealApp(true);
//   };

//   if (showRealApp) {
//     return <App />;
//   } else {
//     return <AppIntroSlider renderItem={renderItem} data={slides} onDone={onDone} />;
//   }
// }

// const styles = StyleSheet.create({
//   slide: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'transparent',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   text: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginHorizontal: 32,
//   },
// });
