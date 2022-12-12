import { View, Text, TextInput, Image,StyleSheet, ScrollView } from 'react-native'
import React ,{useState,useEffect}from 'react'
import pahoMqtt from "paho-mqtt";
 const client = new pahoMqtt.Client(
  "broker.hivemq.com",
 Number(8000),
`mqtt-random-${parseInt(Math.random() * 100)}`
 )

const File = () => {
   const [subscribe, setSubscribe] = useState([
    { name: "hc/temp", messages: [] ,photo:require("./.././assets/temperature.jpg"),max:40,min:36},
    { name: "hc/freq", messages: [] ,photo:require("./.././assets/frequence.png"),max:100,min:50},
    { name: "hc/steps", messages: [] ,photo:require("./.././assets/steps.jpg")},
    { name: "hc/o2", messages: [],photo:require("./.././assets/o2.jpg"),min:94},
    { name: "hc/pres", messages: [] ,photo:require("./.././assets/pression.jpg"),max:140,min:100},
  ]);
  const onMessage = (value) => {
    console.log(subscribe);
    const foundIndex = subscribe.findIndex(
      (x) => x.name == value.destinationName
    );
    console.log(foundIndex);
    if (foundIndex != -1) {
      const cpy = [...subscribe];
      cpy[foundIndex].messages.push({ 
        value: value.payloadString,
        date: new Date(),
       
        
      });
      console.log(cpy);

      setSubscribe(cpy);
      if(el.name="hc/temp"){
        if(value>40 && value < 36){
          alert("erreur")
        }
      }
      
    /*   
        if(el.name="hc/temp"){
        if(value>40 && value < 35){
          alert("Consult a doctor")
        }
      } */
      /* else
      if(el.name="hc/o2"){
        if(value < 94){
          alert("Consult a doctor")
        }
      }
      else
      if(el.name="hc/freq"){
        if(value > 100 && value < 50 ){
          alert("Consult a doctor")
        }
      }   
      else
      if(el.name="hc/pres"){
        if(value > 140 && value <100){
          alert("Consult a doctor")
        }
      }   */
     
      
      
    
  }


  };

  client.onMessageArrived = onMessage;
  useEffect(() => {
    client.connect({
      onSuccess: () => {
        console.log("connected succefully");
        subscribe.forEach((el) => client.subscribe(el.name));
      
      },
      onFailure: () => {
        console.log("Connection failed");
      },
    });
  }, []);
 
  return (
    <ScrollView style={styles.container} >
      <Text style={{fontSize:40, textAlign:'center', color:"#902cd3", marginBottom:50}}>Today's values </Text>
    {subscribe.map((el, i) => (
      <View key={i}>
      {el.messages.map((value, index) => (
      <View  key={index}>
   
      <Image style={{width: 120,height: 120,}} source={el.photo}/>
      <Text style={{fontSize:15}}> {value.value}</Text>
      <Text style={{flexDirection:"row",marginLeft:50}}> Date: 
          {new Date(value.date).toLocaleDateString() +
           " " +
          new Date(value.date).toLocaleTimeString()}
      </Text>

    </View>
      ))}
    </View>
         ))}
         </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
      flexDirection: "column",
      flex: 1,
      padding: '2%',
      
      
      
      
   },
   Liste1:{
   flexDirection:"row",
   marginTop:50,
   
   
   
   

   }
 
  
  
  });

export default File