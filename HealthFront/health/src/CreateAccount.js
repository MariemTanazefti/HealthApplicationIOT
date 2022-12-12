import { View, Text, TextInput, ScrollView, Image,StyleSheet, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios';

const CreateAccount = ({ navigation }) => {
    const [checked, setChecked] = useState('first');
    const[male,setMale]= useState(false);
    const [female,setFemale]=useState(false)
    const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[name,setName]=useState('')
  const[age,setAge]=useState('')

  function submitData ()  {
    if (isValid()){
      axios.post(`http://192.168.1.104:8080/health/users_add`, {
     
        name:name,
        email:email,
        password:password,
        age:age
    })
    .then(res => navigation.navigate("Home"))
  
    alert("Successful user added!");

    }
    
     
  }


    const isValid = () => {

      if (!name.trim() || !email.trim()|| !password.trim()|| !age.trim())
          return alert("Please fill in all fields are required ");
      return true;
  };
  return (
    <SafeAreaView> 
    <View style={styles.container}>
     <Image source={require("./.././assets/imageBg.jpg")} style={styles.image}/>
     <View style={styles.form}>
     <TextInput  style={styles.input} placeholder='Name'onChangeText={text => setName(text)}/>
     <TextInput  style={styles.input} placeholder='Email' onChangeText={text => setEmail(text)}/>
    <TextInput style={styles.input} placeholder="Password" onChangeText={text => setPassword(text)}/> 
     <TextInput  style={styles.input} placeholder='Age' onChangeText={text => setAge(text)}/>
     
     <TouchableOpacity style={styles.Signupbutton} onPress={() => submitData()}>
         <Text style={{
               textAlign: "center",
               color: "white",
               fontSize: 15,
               fontWeight: "500",
             }}>SignUp</Text>
     </TouchableOpacity>
     <View style={styles.textCenter}>
         <TouchableOpacity onPress={() => navigation.navigate("Login")}>
             <Text style={{ fontSize: 24, color:"#902cd3" }} >Login</Text>
         </TouchableOpacity>
     </View>

     </View>
     

    
 </View>
 </SafeAreaView>
)
}

const styles = StyleSheet.create({
 container: {
    flexDirection: "column",
    flex: 1,
    padding: '2%',
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

export default CreateAccount