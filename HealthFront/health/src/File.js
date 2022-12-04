import { View, Text, TextInput, Image,StyleSheet } from 'react-native'
import React from 'react'

const File = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:40, textAlign:'center', color:"#902cd3", marginBottom:50}}>Today's values</Text>
    <View style={styles.Liste1}>
      <Image
            source={require("./.././assets/steps.jpg")}
            style={{width: 120,height: 120,}} />
      <Text>nombre de pas</Text>
   
      <Image
           source={require("./.././assets/temperature.jpg")}
           style={{width:110, height:120}}/>
           <Text>Temperature</Text>

    </View>
    <View style={styles.Liste1}>
      <Image
           source={require("./.././assets/o2.jpg")}
           style={{width:120, height:120}}/>
           <Text>Oxygene</Text>

      <Image
           source={require("./.././assets/frequence.png")}
           style={{width:120, height:120}}/>
           <Text>Frequence</Text>

    </View>
    <View style={styles.Liste1}>
      <Image
           source={require("./.././assets/pression.jpg")}
           style={{width:110, height:120}}/>
           <Text>Pression</Text>

    </View> 
    </View>
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