import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Input, Button, TouchableOpacity, TextInput } from 'react-native';
const Avatar = require("../bago/components/images/praktis.jpg")


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.greet}>Hello Lord</Text>
      <StatusBar style="auto" />
     
      <View>
      <Image style = {styles.Avatar} source={Avatar}/>
    </View>

    <View style={styles.But}>
      <Button title='hello high'/>
    </View>

    <View>
     <TouchableOpacity style={styles.settingItem}>
      <Text style={styles.langText}>Langauge</Text>
     </TouchableOpacity>
    </View>

    <View>
      <TouchableOpacity style={styles.contactus}>
        <Text style={styles.contactText}>Contact us</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.input}>
      <TextInput/>
    </View>

    </SafeAreaView> 

    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
  },
  Avatar: {
    position:"absolute",
    width:200,
    height:200,
    marginTop:100,
    marginLeft: -100,
    borderRadius:100,
    borderColor:""
  },
  

  greet:{
    position:"absolute",
    marginTop:330,
    fontSize: 20,
    fontWeight:"Bold",
  },
  But:{
    position:"absolute",
    marginTop:360,
    borderRadius:20,
    paddingHorizontal:20
  },
  settingItem: {
   position:"absolute",
   backgroundColor:"white",
   width:340,
   height:60,
   marginTop:450,
   marginLeft:-170,
   borderRadius:10
  },
  langText:{
    fontSize:20,
    marginTop: 15,
    marginLeft:10, 
    color:"gray"
  },
  contactus:{
    position:"absolute",
    backgroundColor:"White",
    width:340,
    height:60,
    marginTop:520,
    borderRadius:10,
    marginLeft:-170,
    justifyContent:"center"
  },
  contactText:{
    fontSize:20,
    marginTop: 15,
    marginLeft:10, 
    color:"gray"
  },
  input:{
    height:100,
    margin:12,
    padding:10,
    borderWidth:1,
    position:"absolute",
    width:300,
    marginTop: 600
  }

  
});
