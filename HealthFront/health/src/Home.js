import { View, Text, TextInput, ScrollView, Image,StyleSheet, TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import axios from 'axios';




const Home = ({ route, navigation }) =>  {
  const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
  const isFocused = useIsFocused();
  const [name,setName]=useState('')
  const [userData, setuserData] =useState()


/*   const getUsersbyId = async (id) => {
    try {
      const response = await fetch(`http://192.168.1.104:8080/health/users/${id}`);
      const json = await response.json();
      console.log(json.user1)
      setData(json.user1.name);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(()=>{
    getUsersbyId();
  },[id]); */


  return (  
   


    <View >
      <ScrollView>
      
      <Text style={styles.title}>Welcome</Text>

       

        <View style={{ flex: 6, marginTop:140 }}>
          <View style={{ flexDirection: "row" }}>

            <View style={{ flex: 3}} >
              <TouchableOpacity 
                style={{ alignItems: "center" }} onPress={() => navigation.navigate("File")}>
                <Image
                  source={require("./.././assets/dossier.jpg")}
                  style={{
                    width: 120,
                    height: 150,
                    borderRadius: 40 / 2,
                    marginTop: 10,
                  }} />
                <Text style={styles.Title2}>Your file</Text>
              </TouchableOpacity>
              
               <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate("Account")}>
                <Image
                  source={require("./.././assets/compte.jpg")}
                  style={{
                    width: 120,
                    height: 150,
                    borderRadius: 40 / 2,
                  }} />
                <Text style={styles.Title2}>Your account</Text>
                </TouchableOpacity>

              {/*   <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate("History")}>
                <Image
                  source={require("./.././assets/historique.jpg")}
                  style={{
                    width: 120,
                    height: 150,
                    borderRadius: 40 / 2,
                  }} />
                <Text style={styles.Title2}>Your history</Text>
                </TouchableOpacity> */}

            

            </View>


           

          </View>
        </View>

      </ScrollView>
      
    </View>


     

     

    
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
       title:{
        textAlign:'center',
        fontSize:40,
        fontWeight:"bold"
        ,color:"#902cd3",
        marginTop:30
       },
       Title2: {
        paddingBottom: 2,
        fontWeight: "bold",
        fontSize: 18,
      },
    
    
    });

export default Home