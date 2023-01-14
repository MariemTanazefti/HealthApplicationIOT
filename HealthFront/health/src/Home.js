import { View, Text, TextInput, ScrollView, Image,StyleSheet, TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { MaterialIcons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';




const Home = ({}) =>  {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const isFocused = useIsFocused();
  const [name,setName]=useState('')
  const [userData, setuserData] =useState()
  const [currentDate, setCurrentDate] = useState('');
  const navigation=useNavigation()
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + '/' + month + '/' + year 
      + ' ' + hours + ':' + min + ':' + sec
    );
  }, []);

  const Logout = () => {
    try {
       AsyncStorage.clear()
      navigation.navigate("Login")


    } catch(e) {
      console.log(e) 
    
     }
  
    console.log('Done.')
  }  



  return (  
   


    <View style={styles.container} >
        <View style={{backgroundColor:"#00a46c",height:"25%",borderBottomLeftRadius:20,borderBottomRightRadius:20,paddingHorizontal:20}} >
        
          <View style={styles.head}>
          <Icon  name="clockcircleo" size={30} color="#fff"/>

          <Text style={styles.textStyle}>
            {currentDate}
          </Text>
          

          </View>
          <View style={styles.head1}>
          <Icon name="logout" size={30} color="#fff" onPress={Logout}
           />
          </View>
          <Text style={styles.title}>Welcome</Text>

      


        </View>

            <View  style={{ flex: 2,flexDirection: "row",justifyContent: "space-between",  marginLeft:"15%",marginRight:'15%',marginTop:"20%"}}  >
              <TouchableOpacity 
                 onPress={() => navigation.navigate("File")}>
                <Image
                  source={require("./.././assets/dossier.jpg")}
                   style={{
                    width: 120,
                    height: 150,
                    borderRadius: 40 / 2,
                    marginTop: 10,
                  }}  />
                <Text style={styles.Title2}>Your file</Text>
              </TouchableOpacity>
              
               <TouchableOpacity  onPress={() => navigation.navigate("Account")}>
                <Image
                  source={require("./.././assets/compte.jpg")}
                  style={{
                    width: 120,
                    height: 150,
                    borderRadius: 40 / 2,
                  }}  />
                <Text style={styles.Title2}>Your account</Text>
                </TouchableOpacity>
                </View>
                <View style={{ flex: 2,flexDirection: "row", justifyContent: "space-between",  marginLeft:"15%",marginRight:'15%',marginTop:"10%"}} >

                <TouchableOpacity  onPress={() => navigation.navigate("CalculImc")}>
                <Image
                  source={require("./.././assets/IMC.png")}
                  style={{
                    width: 120,
                    height: 150,
                    borderRadius: 40 / 2,
                  }}  />
                <Text style={styles.Title2}>Calcul your IMC</Text>
                </TouchableOpacity>

                
                <TouchableOpacity  onPress={() => navigation.navigate("DrinkScreen")}>
                <Image
                  source={require("./.././assets/drinkicon.png")}
                  style={{
                    width: 120,
                    height: 150,
                    borderRadius: 40 / 2,
                  }}  />
                <Text style={styles.Title2}>Drink</Text>
                </TouchableOpacity>


            

            </View>


           

          </View>
    


     

     

    
)
}

const styles = StyleSheet.create({
    container: {
      flex: 3,
      flexDirection: "column",
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
        ,color:"#fff",
        marginTop:"12%"
       },
       Title2: {
        paddingBottom: 2,
        fontWeight: "bold",
        fontSize: 18, 
        textAlign:"center"
      }, 
      textStyle: {
        //textAlign: 'center',
         fontSize: 18,
        color: 'white', 
        marginLeft:"2%"
      },
      head:{
        flexDirection: "row",
        /* justifyContent: "space-between",
        marginRight:"25%",
        marginLeft:"25%", */
        marginTop:"8%"


      },
      head1:{
        flexDirection: "row",
        marginTop:"-7%",
        marginLeft:"92%"
      }

    
    
    });

export default Home