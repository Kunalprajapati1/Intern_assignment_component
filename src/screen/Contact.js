import React from 'react';
import { StyleSheet, Text, View, Image, Pressable,StatusBar,  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Contact = () => {

  const navigation = useNavigation();

  const navigateToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <View style={styles.container}>
 
      <StatusBar barStyle="light-content" backgroundColor="#01968B" />

      <View style={styles.headerContainer}>
      <Pressable
  onPress={() => navigation.navigate('About')}
  style={styles.backButton}
>
  <Image
    source={require('../../assets/left.png')} 
    style={{ ...styles.backButtonImage, transform: [{ scaleX: 1 }, { rotateX: '0deg' }] }}
  />
</Pressable>

        <View style={styles.contactUsRectangle}>
          <Text style={styles.contactUsText}>Contact Us</Text>
        </View>
      </View>

      <View style={styles.contactMethods}>
       
        <Pressable style={styles.rectangle}>
          <Image
            source={require('../../assets/1.jpg')}
            style={styles.logo}
          />
          <Text style={styles.contactText}>Contact Us</Text>
        </Pressable>

        <Pressable style={styles.rectangle}>
          <Image
            source={require('../../assets/WhatsApp.jpg')}
            style={styles.logo}
          />
          <Text style={styles.contactText}>WhatsApp</Text>
        </Pressable> 
       

        <Pressable style={styles.rectangle}>
          <Image
            source={require('../../assets/Facebook.png')}
            style={styles.logo}
          />
          <Text style={styles.contactText}>Facebook</Text>
        </Pressable>

        <Pressable style={styles.rectangle}>
          <Image
            source={require('../../assets/Twitter.png')}
            style={styles.logo}
          />
          <Text style={styles.contactText}>Twitter</Text>
        </Pressable>

        <Pressable style={styles.rectangle}>
          <Image
            source={require('../../assets/Instagram.png')}
            style={styles.logo}
          />
          <Text style={styles.contactText}>Instagram</Text>
        </Pressable>
      </View>
      <Pressable onPress={() => navigateToPage('About')} style={styles.bottomButton}>
        <Text style={styles.bottomButtonText}>Go back to About Us Page  </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffffff',
    borderColor: '#01968B',
    borderWidth: 1,
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
    marginBottom:13,
  },
  contactUsRectangle: {
    flex: 1,
    height: 60,
    backgroundColor: '#f5f5f500',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -86,
    marginRight: -30, // Adjust as needed
    borderColor: '#000000',
    borderWidth: 0.3,
    marginTop: -15,
    boxShadow: '0px 2px 3px 0.3px #000000',
  },
  contactUsText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#000000',
    marginRight: 110,
  },
  contactMethods: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  rectangle: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    backgroundColor: 'transparent',
    marginVertical: 13,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#01968B',
    borderWidth: 2,
    borderRadius: 15,
  },
  logo: {
    width: 30,
    height: 30,
    marginLeft: -130,
    marginRight: 90,
  },
  contactText: {
    color: '#01968B',
    fontWeight: '600',
    marginRight: 60,
    marginLeft: -60,
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

export default Contact;
