import { View, Text, TextInput, TouchableOpacity,StyleSheet,Image } from 'react-native'
import React, { useState } from 'react'


const CalculImc = () => {
    const[weight,setWeight]=useState('')
    const[height,setHeight]=useState('')
    const[bmi,setBmi]=useState('')
    

    const calclulBMI=()=>{
        const bmi= weight / ((height/100)*(height/100))
        setBmi(bmi.toFixed(1))
        if(bmi < 18.5){
            alert("Underweight, eat more")
        }
        else if( bmi>= 18 && bmi<=24.9){
            alert("Normal, keep it up ")
        }
        else if(bmi >=25 && bmi <= 29.9){
            alert("Overweight, start working out ")
        }
        else if(bmi >= 30){
            alert("Obese , hit the gym")
        }
    }
  return (
    <View style={styles.container} >
        <View>
        <Text style={{fontSize:40, textAlign:'center', color:"#902cd3", marginBottom:50}}>IMC Calculator</Text>
        </View>
        <View style={styles.sectionStyle}>
        <Image style={styles.imageStyle} source={require("./.././assets/weight.png")} />
        <TextInput
            style={{flex: 1,width:"90%",height:90}}
            value={weight}
            onChangeText={(text)=>setWeight(text)}
            placeholder="Weight in Kg"
            keyboardType="numeric"
            
        />

        </View>
        <View style={styles.sectionStyle}>
        <Image style={styles.imageStyle} source={require("./.././assets/height.png")} />
        <TextInput
             style={{flex: 1,width:"90%",height:90}}
            value={height}
            onChangeText={(text)=>setHeight(text)}
            placeholder="Height in Cm"
            keyboardType="numeric"
            
        />
        </View>
        
        <TouchableOpacity onPress={calclulBMI}  style={styles.Calculbutton}>
            <Text style={{textAlign: "center",color: "white",fontSize: 15,fontWeight: "500",}}>Calculate</Text>

        </TouchableOpacity>
        <View style={styles.resultView}>
            <Text style={styles.result}>IMC = {bmi}</Text>
        </View>
      
    </View>
  )
}

export default CalculImc
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
        padding: '2%',
     },
     input:{
        alignItems: 'center',
        textAlign:"center",
        width: "90%",
        height: "10%",
        backgroundColor: '#fff',
        borderColor: '#00561B',
        borderWidth: 1.5,
        color: 'black',
        margin: "3%",
        padding: "2%",
        borderRadius: 20,
        fontSize: 18,
        marginTop:20
      },
      Calculbutton: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00561B",
        width: "50%",
        height: 45,
        marginTop:50,
        textAlign: "center",
        borderRadius: 20,
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1.5,
        borderColor: '#00561B',
        height: "13%",
        borderRadius: 20,
        margin: 10, 
        shadowOpacity: 0.25,
      },
    imageStyle: {
     padding: 10,
    margin: 15,
    height: 40,
    width: 40, 
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  resultView:{
    margin:15
  },
  result:{
    fontSize:30,
    fontWeight:'bold'
  }
    })