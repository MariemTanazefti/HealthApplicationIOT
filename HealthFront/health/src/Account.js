import { View, Text, TextInput,StyleSheet,TouchableOpacity, Pressable,Image, ScrollView } from 'react-native'
import React,{ useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign, Entypo } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';



const Account = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleNumber, setModalVisibleNumber] = useState(false);
    const [loader, setloader] = useState(false);


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
    
      const handleUpload = (image) => {
        setloader(true)
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', 'dementia')
        data.append("cloud_name", "elaa")
        fetch("https://api.cloudinary.com/v1_1/elaa/image/upload", {
          method: "post",
          body: data
        }).then(res => res.json()).
          then(data => {
            setloader(false)
            console.log(data.url)
            setImage(data.url)
          }).catch(err => {
            alert("error while uploading")
          })
      }
    
  return (
    
    
    <SafeAreaView> 
    <View style={styles.container}>
   
    <Text style={styles.title}>Your informations :</Text>
    <View style={styles.form}>
 
    <TextInput  style={styles.input} placeholder='Name'/>
    <TextInput  style={styles.input} placeholder='Email'/>
    <TextInput style={styles.input} placeholder="Password"/>
    <TouchableOpacity onPress={showDatepicker}>
        <Entypo style={styles.DateTimePicker} name="clock" size={50} color="#4A0D66" />
    </TouchableOpacity>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="spinner"
            /* onChange={onChange} */
          />
        )}
         <Pressable
            onPress={() => pickFromGallery()}>
            {loader == false ? <Entypo name="image" size={40} color="black" /> :
            <Text>loading</Text>}
            <Image
                resizeMode='stretch'
                style={styles.image}
                //source={{ uri: image }}
            />
        </Pressable>
    <View style={[styles.fixToText]}>
        <TouchableOpacity style={styles.donebutton}>
           <Text color="white">Update</Text>
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