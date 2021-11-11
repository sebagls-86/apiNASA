import React from 'react'
import { Image, Text, Button, View } from 'react-native'


const image = { uri: "https://reactjs.org/logo-og.png" };

export default class Welcome extends React.Component {


   
    render() {
        return (
           <View style={{flex:1, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./assets/earth.jpg')} style={{position: 'absolute', zIndex: -1}}/>
               <Text style={{fontSize:35, marginVertical:120, color:'#0095f6'}}>Bienvenido a Earth</Text>
               

               <Button 
                onPress={()=> this.props.navigation.navigate('Earth') }
                color="0095f6"
                title = "Ingresar"/>


            <Text style={{fontSize:20, marginVertical:200, textAlign: 'center',marginLeft: 20, marginRight: 20, color:'#0095f6'}}>
                  Foto del día de la Tierra</Text>
                

           </View>
        )
    }
}