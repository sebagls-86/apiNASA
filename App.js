import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './Navitgator';
import { createDrawerNavigator} from '@react-navigation/drawer';
import Welcome from './Welcome';
import Earth from './Earth';

const Drawer = createDrawerNavigator();

export default class App extends Component {
  
  render(){
    return (

      <NavigationContainer>
     

      <Drawer.Navigator initialRouteName="Welcome">
       <Drawer.Screen name="Welcome" component={Welcome} />
       <Drawer.Screen name="Earth" component={Earth} />
     </Drawer.Navigator>

      </NavigationContainer>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});