import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import React, {useState, component} from 'react';


export default function App() {
	const[nome,setNome] = useState("");
	const[nomeTxt, setNomeTxt] = useState("")
	
	const[valor1, setValor1] = useState(0);
	const[valor2, setValor2] = useState(0);
	const[resultado, setResultado] = useState(0);
	
	function somar(){
		let r = parseFloat(valor1) + parseFloat(valor2);
		setResultado(r);
	}
	
	function subtrair(){
		let r = parseFloat(valor1) - parseFloat(valor2);
		setResultado(r);
	}
	
	function dividir(){
		let r = parseFloat(valor1) / parseFloat(valor2);
		setResultado(r);
	}
	
	function multiplicar(){
		let r = parseFloat(valor1) * parseFloat(valor2);
		setResultado(r);
	}
	
	function lerNome(){
		setNome(nomeTxt);
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
					 <TextInput style={styles.input} 
						 value={nomeTxt}
						 onChangeText={(texto)=>setNomeTxt(texto)}
					/>
					<TouchableOpacity style={styles.botao} onPress={lerNome}>
						<text style={styles.txtbotao}>Enviar</text>
					</TouchableOpacity>
				<text style={styles.titulo}>Nome: {nome}</text>
		  </view>
		  
		  <view style={styles.bloco}>
			<text style={styles.label}> valor 1: </text>	
				<TextInput style={styles}
				  value={valor1}
				  onChangeText={setValor1}>
			  	</TextInput>
		  </view>
		  
		  <view style={styles.bloco}>
		  	<text style={styles.label}> valor 2: </text>	
			  <TextInput style={styles}
				  value={valor2}
				  onChangeText={setValor2}>
			  </TextInput>
		  </view>
		  
		  <view style={styles.blocoFlex}>
			    <TouchableOpacity style={styles.botao1} onPress={somar}>
							<text style={styles.txtbotao}>Somar</text>
				</TouchableOpacity>
			  
			  <TouchableOpacity style={styles.botao1} onPress={subtrair}>
							<text style={styles.txtbotao}>Subtrair</text>
				</TouchableOpacity>
			  
			  <TouchableOpacity style={styles.botao3} onPress={dividir}>
							<text style={styles.txtbotao}>Dividir</text>
				</TouchableOpacity>
			  
			  <TouchableOpacity style={styles.botao4} onPress={multiplicar}>
							<text style={styles.txtbotao}>Multiplicar</text>
				</TouchableOpacity>
		  </view>
		  
		   <view style={styles.bloco}>
		  	<text style={styles.label}> Resultado: {resultado}</text>	
			  
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
    flex: 2,
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
	blocoFlex:{
		width: 150,
		alignItems: 'baseline',
		backgroundColor: '#000',
		marginTop: 20,
		justifyContent: 'space-evenly',
		flexDirection: 'row',
	},
	botao1:{
		width: 75,
		height: 30,
	},
	botao2:{
		width: 75,
		height: 30,
	},
	botao3:{
		width: 75,
		height: 30,
	},
	botao4:{
		width: 75,
		height: 30,
	}
});
