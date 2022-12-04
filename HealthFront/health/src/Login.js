import { View, Text, TextInput, ScrollView, Image,StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';


const Login = ({ navigation }) => {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')


  const addData = () => {   
    axios.post("http://192.168.1.104:8080/health/Login",{
      email:email,
      password:password
    }) 
    .then(res =>console.log(res.data),
    navigation.navigate("Home"))
    
  }
  return (
    <View style={styles.container}>
       <ScrollView>
        <Image source={require("./.././assets/imageBg.jpg")} style={styles.image}/>
        <View style={styles.form}>
        <TextInput  style={styles.input} placeholder='Email'value={email} onChangeText={text => setEmail(text)}/>
        <TextInput style={styles.input} placeholder="Password"  value={password} secureTextEntry={true}onChangeText={text => setPassword(text)}/>
        <TouchableOpacity style={styles.Signupbutton} onPress={addData}>
            <Text style={{textAlign: "center",color: "white",fontSize: 15,fontWeight: "500",}}>Login</Text>
        </TouchableOpacity>
        <View style={styles.textCenter}>
            <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
                <Text style={{ fontSize: 24, color:"#902cd3" }} >Create account</Text>
            </TouchableOpacity>
        </View>

        </View>
        

        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    justifyContent: "space-between",
      },
      image:{
        width:200,
        height:200,
        alignSelf:'center',
        marginTop:20,
       
         
      },
      input:{
        alignItems: 'center',
        textAlign:"center",
        width: "100%",
        height: "17%",
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

      form:{
        alignItems: "center",
        padding: 20,
      },
      Signupbutton: {
        display: "flex",
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
      textCenter: {
        alignItems: "center",
        margin: 5,
        
      },




})


export default Login