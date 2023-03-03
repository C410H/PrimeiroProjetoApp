import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';


export default function App() {
  return (
    <View style={styles.container}>
      	<Text style={styles.titulo}>Martalo</Text>
		  <Image
        style={styles.logo}
        source={{
          uri: 'https://uploads.metropoles.com/wp-content/uploads/2019/11/16113237/caneta-azul.jpg',
        }}
      />
    
		  <view>
				  <text style={styles.bloco}>Nome: </text>
				  <TextInput style={styles.input}/>
		  </view>
		  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#732',
    alignItems: 'center',
    justifyContent: 'center',
	fontFamily: 'verdana',
   },
	titulo:{
		color: '#368',
	},
	input: {
		backgroundColor: '#fff',
		borderWidth: 2,
	},
	logo:{
		width: 120,
		height: 120,
	},
});
