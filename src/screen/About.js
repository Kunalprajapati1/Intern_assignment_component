import React from 'react';

import { StyleSheet, Text, View, Image, Pressable,StatusBar, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const About = () => {
  const navigation = useNavigation();

  const navigateToPage = (pageName) => {
    navigation.navigate(pageName);
  };
 

  return (
    <View style={styles.container}>
         <StatusBar barStyle="light-content" backgroundColor="#01968B" />
      {/* Header with back arrow button and rectangle */}
      <View style={styles.headerContainer}>
       
          <Image
            source={require('../../assets/left.png')}
            style={styles.backButtonImage}
          />
      
        <View style={styles.aboutRectangle}>
          <Text style={styles.aboutHeaderText}>About Us</Text>
        </View>
      </View>
<ScrollView>
      <Image source={require('../../assets/bit.jpg')} style={styles.image2} />
      <Image source={require('../../assets/Logo.jpg')} style={styles.image3} />
      <Text style={styles.subHeading}>Hi News </Text>
      <Text style={styles.paraHeading}>We Focus on the Digital News </Text>
      <Text style={styles.para}>Lorem ipsum dolor sit amet consectetur. Lec
tus volutpat vitae viverra risus. Penatibus pla
cerat sem cursus tellus commodo cras ornar
e arcu. Diam eget id vitae convallis aenean v
iverra orci auctor volutpat. Lacus in cursus 
sed aenean pellentesque. Orci feugiat aliquet
ultrices quis massa et non in. Nisi parturient 
tincidunt pharetra dignissim massa euismod 
nibh. Ullamcorper fermentum phasellus tristi
que aenean eget scelerisque nulla. Sit duis a
enean vitae massa sed.{'\n'}{'\n'}
Lorem ipsum dolor sit amet consectetur. Lec
tus volutpat vitae viverra risus. Penatibus pla
cerat sem cursus tellus commodo cras ornar
e arcu. Diam eget id vitae convallis aenean v
iverra orci auctor volutpat. Lacus in cursus 
sed aenean pellentesque. Orci feugiat aliquet</Text></ScrollView>
<Pressable onPress={() => navigateToPage('Contact')} style={styles.bottomButton}>
        <Text style={styles.bottomButtonText}>Go to Contact us Page </Text>
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 16,
  },
  backButtonImage: {
    width: 30,
    height: 30,
  
    marginLeft:15,
  },
  aboutRectangle: {
   
      flex: 1,
      height: 60,
      backgroundColor: '#f5f5f500',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: -86,
      marginRight: -30, // Adjust as needed
      borderColor: '#000000',
      borderWidth: 0.3,
     
      boxShadow: '0px 2px 3px 0.3px #000000',
  
  },
  aboutHeaderText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#000000',
    marginRight: 110,
  },
  aboutHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image2: {
    width: 290,
    height: 185,
  //  marginTop:30,
  marginLeft:60,
  },
  image3: {
    width: 150,
    height: 150,
 marginTop:-130,
 marginLeft:130,

  },
 
 subHeading: {

fontWeight:'bold',
fontSize:32,
marginTop:5,
color:'#01968B',
textAlign:"center"

  },

  paraHeading:{

fontWeight:"bold",
fontSize:26,
marginTop:20,
textAlign:'center'

  },
  para:{
textAlign:'center',
marginTop:10,
fontSize:18,

padding:20,
  },
  bottomButton: {
    backgroundColor: '#01968B',
    paddingVertical: 15,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  
  bottomButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default About;
