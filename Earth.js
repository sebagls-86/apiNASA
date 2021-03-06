import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { WebView } from 'react-native-webview'

import main from './main.js';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Titulo',
      pic: 'Foto',
      explanation: 'Explicacion',
      date: 'Fecha',
      media: '',
    };
  }

  componentDidMount(){

    main.getImage().then(response=>response.data).then(response => {
        this.setState({
          title: response.title,
          pic: response.url,
          explanation: response.explanation,
          date: response.date,
          media: response.media_type
        });

      })
      .catch((error) => {
        console.error(error);
      });

}
  

  render() {
    return (
      <View style={styles.container}>
      
        <Text style={styles.titulo}>{this.state.date}</Text>
        <Text style={styles.titulo}>{this.state.title}</Text>
        {this.state.media === 'video' ?
        <WebView
        javaScriptEnabled={true}
        source={{url:this.state.pic}}
        
        /> :
        <Image
         source={{uri:this.state.pic}}
        style={styles.imagen}
         />}
        <Text style={styles.paragraph}>{this.state.explanation}</Text>
              
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'black',
      padding: 8,
    },
    paragraph: {
      fontSize: 16,
      textAlign: 'justify',
      color: 'white'
      
    },
    titulo:{
      
      color: 'white',
      fontSize: 20,
      textAlign: 'center'
      
    },
    imagen:{
      width: 380,
      height: 200,
      justifyContent: 'center',
        alignItems: 'center',
      
  
    }
  });