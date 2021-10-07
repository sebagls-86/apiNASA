import * as React from 'react';
import { Text, View, StyleSheet, Image, WebView} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

//import getImage from './main.js';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      pic: '',
      explanation: '',
      date: '',
      media: '',
      count: 0
    };
  }

componentDidMount(){
 fetch('https://api.nasa.gov/planetary/apod?api_key=QViRwGQN1ZYqcGMLhLyQ4ktlw8CW5EzN6gsNnIac').then(res=>res.json()).then(response => {
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
      <Text style={styles.titulo}>NASA API - FOTO DEL DIA</Text>
        <Text style={styles.text}>{this.state.date}</Text>
        <Text style={styles.text}>{this.state.title}</Text>
        {this.state.media === 'video' ?
        <WebView
        javaScriptEnabled={true}
        source={{url:this.state.pic}}
        style={{width: 370, height:200}}
        />:
        <Image
         source={{uri:this.state.pic}}
        style={{width: 370, height:200}}
        />}
        
        <Text style={styles.text}>{this.state.explanation}</Text>
              
      </View>
    );
  }
}

const styles = StyleSheet.create({

  titulo:{
    color: 'red',
    fontSize: 25
    
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  text: {
    color: '',
    fontSize: 15,
    padding: 10
  },
});
