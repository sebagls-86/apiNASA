import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Earth from './Earth';
import Welcome from './Welcome';


const Stack = createStackNavigator();

export default class Navigator extends React.Component{

 render(){
    
    return(
        
             <Stack.Navigator initialRouteName='Welcome'>
                <Stack.Screen name= 'Welcome' component={Welcome} />
                <Stack.Screen name= 'Earth' component={Earth} />
            </Stack.Navigator>
        
    )
    }
}
