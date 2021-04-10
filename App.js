import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CountDown from 'react-native-countdown-component';
import PomodoroTimer from './PomodoroTimer'

function HomeScreen({ navigation }) {

  const [input, setInput] = useState(null)
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.text}>What Would You Like To Focus On?</Text>
      </View>

      <View style={styles.box2}>
        <TextInput
          style={styles.inputField}
          onChangeText={userInput => setInput(userInput)}
          placeholder="Enter your wish" />

        <TouchableOpacity
          onPress={() => navigation.navigate('Details', { otherParam: input })}
          style={styles.roundButton}>
          <Text>+</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  const { otherParam } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: 'skyblue' }}>

      <PomodoroTimer text={otherParam} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'skyblue'
  },
  box1: {
    paddingTop: 20,
    flexDirection: 'column'
  },

  box2: {
    marginLeft: 20,
    marginTop: 20,
    flexDirection: 'row'

  },
  inputField: {
    borderWidth: 3,
    borderRadius: 15,
    width: '80%',
    padding: 5,
    backgroundColor: 'white'
  },

  text: {
    color: 'black',
    fontSize: 22,
    marginLeft: 25,
    fontWeight: 'bold'
  },

  roundButton: {
    marginLeft: 10,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 100,
    backgroundColor: 'orange',
  },
  roundButton2: {
    marginTop: 20,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 100,
    backgroundColor: 'orange',
  },

});
