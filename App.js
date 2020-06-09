/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//import React from 'react';
//replace and add fcm
import React, {Component} from 'react';
import { AsyncStorage } from 'react-native';
//acoustic
import { NativeModules } from 'react-native';
	var RNAcousticMobilePush = NativeModules.RNAcousticMobilePush;
	RNAcousticMobilePush.requestPushPermission();
// dual push providers
import {Platform, NativeEventEmitter} from 'react-native';
const RNAcousticMobilePushEmitter = new NativeEventEmitter(RNAcousticMobilePush);
RNAcousticMobilePushEmitter.addListener("PushReceived", function (payload) {
	console.log("==>>Got a push with payload", payload);
});

// FCM support
//*
import firebase from 'react-native-firebase';
export default class App extends Component {

    componentDidMount = () => {
        this.checkPermission();
        this.createNotificationListeners(); 
    }

    checkPermission = async() => {
        const enabled = await firebase.messaging().hasPermission();
        if (enabled) {
            const token = await firebase.messaging().getToken()
            console.info('==>>Token:',token)
        }
        else this.getPermission() 
    } 

    getPermission = async() => {
        firebase.messaging().requestPermission()
        .then(() => {
            this.checkPermission()
        })
        .catch(error => {
            console.error('premission error:',error)
            // User has rejected permissions  
        });
    } 
  //Remove listeners allocated in createNotificationListeners()
    componentWillUnmount() {
      this.notificationListener();
      this.notificationOpenedListener();
    }

    async createNotificationListeners() {
      // Triggered when a particular notification has been received in foreground      
      this.notificationListener = firebase.notifications().onNotification((notification) => {
          const { title, body } = notification;
          console.log('==>> Notification Received foreround:',title+'body'+body);
      });

      //app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
    
      this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
          const { title, body } = notificationOpen.notification;
          console.log('==>> Notification Opened background:',title+'body'+body);
      });

      //app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
      
      const notificationOpen = await firebase.notifications().getInitialNotification();
      if (notificationOpen) {
          const { title, body } = notificationOpen.notification;
          console.log('==>> Notification Opened forground:',title+'body'+body);
      }
      //Triggered for data only payload in foreground
      this.messageListener = firebase.messaging().onMessage((message) => {
        //process data message
        console.log('==>> message:',JSON.stringify(message));
      });    
    }
    render() {
        return (
          <View style={{flex: 1}}>
            <Text>Welcome to React Native!</Text>
          </View>
        );
      }
}
//end fcm */

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
/*/ original app starts comment for fcm 
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
// original app ends
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App; // comment for fcm support
*/