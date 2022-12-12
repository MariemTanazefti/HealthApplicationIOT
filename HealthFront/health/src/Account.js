import { View, Text, TextInput,StyleSheet,TouchableOpacity, Pressable,Image, ScrollView } from 'react-native'
import React,{ useState,useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign, Entypo } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Navigation, useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';





const Account = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleNumber, setModalVisibleNumber] = useState(false);
    const [loader, setloader] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword] =useState("");
    const [picture,setPicture]= useState(null);
    const [userData, setuserData] = useState(null);
    const [state, setState] = useState('valid');
    const isFocused = useIsFocused()
//const [user1,setUser]= useState([route.params]);
    const [data, setData] = useState([]);
    const navigation=useNavigation()

  
  const updateData = () => { 
   
      axios.put("http://192.168.1.104:8080/health/users/1",{
        
        name:name,
        email:email,
        password:password
      }) 
      .then(res =>console.log(res.data),
      alert("User updated"),
      navigation.navigate("Home"))
  
    }  
    
    
     

 /*  useEffect(()=>{
    getUsersbyId();
  },[]); */


    const showMode = (currentMode) => { 
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
    
      const showTimepicker = () => {
        showMode('time');
      };


      const pickFromGallery = async () => {
        const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if (granted) {
          let data = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5
          })
          if (!data.cancelled) {
            let newfile = {
              uri: data.uri,
              type: `test/${data.uri.split(".")[1]}`,
              name: `test.${data.uri.split(".")[1]}`
            }
            handleUpload(newfile)
          }
        } else {
          alert("you need to give up permission to work")
        }
      }
      const handleUpload = (picture) => {
        setloader(true)
        const data = new FormData()
        data.append('file', picture)
        data.append('upload_preset', 'dementia')
        data.append("cloud_name", "elaa")
        fetch("https://api.cloudinary.com/v1_1/elaa/image/upload", {
          method: "post",
          body: data
        }).then(res => res.json()).
          then(data => {
            setloader(false)
            console.log(data.url)
            setPicture(data.url)
          }).catch(err => {
            alert("error while uploading")
          })
      }
  return (
    
    
    <SafeAreaView> 
    <View style={styles.container}>
   
    <Text style={styles.title}>Modify your data</Text>
    <View style={styles.form}>
 
    <TextInput  style={styles.input} placeholder='Name' onChangeText={name => setName(name)} value={name}/>
    <TextInput  style={styles.input} placeholder='Email'onChangeText={email => setEmail(email)} value={email}/>
    <TextInput style={styles.input} placeholder="Password"  secureTextEntry={true} onChangeText={password => setPassword(password)} value={password}/>
  
    <View style={[styles.fixToText]}>
        <TouchableOpacity style={styles.donebutton} onPress={updateData}>
           <Text style={{color: "white"}}>Update</Text>
        </TouchableOpacity>
    </View>

   
    </View>
    </View>
    </SafeAreaView>




  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: "#902cd3",
        marginLeft: "1%",
        paddingTop: "3%"
    
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
    /*   image: {
        justifyContent: "center",
        padding: "30%",
        width: "50%",
        height: "50%",
        borderRadius: 40 / 2,
      },
      DateTimePicker: {
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 50,
        padding: "5%"
      } */
      donebutton: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        borderColor: "#359A8E",
        backgroundColor: "#00561B",
        shadowColor: "#359A8E",
        shadowOpacity: 0.55,
        shadowRadius: 2.22,
        elevation: 11,
      },
    



})

export default Account