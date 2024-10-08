import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [currentPoints, setCurrentPoints] = useState(0);

  const handleWin = () => {
    const updatedPoints = currentPoints + 100;
    setCurrentPoints(updatedPoints);
    navigation.navigate('VictoryScreen', { points: updatedPoints });
  };

  const handleLose = () => {
    const updatedPoints = currentPoints - 50;
    setCurrentPoints(updatedPoints);
    navigation.navigate('LosingScreen', { points: updatedPoints });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pointsText}>Current Points: {currentPoints}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.winButton} onPress={handleWin}>
          <Text style={styles.buttonText}>Win</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loseButton} onPress={handleLose}>
          <Text style={styles.buttonText}>Lose</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const VictoryScreen = ({ route, navigation }) => {
  const { points } = route.params;

  return (
    <View style={[styles.container, styles.victoryContainer]}>
      <Text style={styles.victoryText}>You have {points} points!</Text>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const LosingScreen = ({ route, navigation }) => {
  const { points } = route.params;

  return (
    <View style={[styles.container, styles.losingContainer]}>
      <Text style={styles.losingText}>You have {points} points!</Text>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Win or lose app' }} />
        <Stack.Screen name="VictoryScreen" component={VictoryScreen} options={{ title: 'Victory' }} />
        <Stack.Screen name="LosingScreen" component={LosingScreen} options={{ title: 'Losing' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointsText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#00796b',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  winButton: {
    backgroundColor: '#4caf50',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
    elevation: 3,
  },
  loseButton: {
    backgroundColor: '#f44336',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
    elevation: 3,
  },
  victoryContainer: {
    backgroundColor: '#e8f5e9',
  },
  losingContainer: {
    backgroundColor: '#ffebee',
  },
  victoryText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4caf50',
  },
  losingText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#f44336',
  },
  backButton: {
    backgroundColor: '#2196f3',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default App;
