import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Header({navigation, title}) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <ImageBackground
      source={require('../assets/game_bg.png')}
      style={styles.header}>
      <FontAwesome5
        style={styles.icon}
        name={'bars'}
        solid
        size={28}
        color="#333"
        onPress={openMenu}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require('../assets/heart_logo.png')}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: [{translateX: -210}, {translateY: -30}],
    width: 420,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    left: 16,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  headerTitle: {
    flexDirection: 'row',
  },
  headerImage: {
    marginHorizontal: 10,
    width: 26,
    height: 26,
  },
});
