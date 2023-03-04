import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';


export default function App() {
	const[nome,setNome] = useState("Marcelo");
	
	function lerNome(){
		setNome("Ana");
	}
	
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
						  <TouchableOpacity style={styles.botao} onPress={lerNome}>
							<text style={styles.txtbotao}>Enviar</text>
						  </TouchableOpacity>
			  
			  	<text style={styles.titulo}>Nome: {nome}</text>
		  </view>
		  
    </View>
  );
}

const styles = StyleSheet.create({
	botao:{
	backgroundColor: '#000',
	alignItems: 'center',
	marginTop: 20,
	},
	txtbotao:{
	color:"#fff",
	marginTop: 5,
	},
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
