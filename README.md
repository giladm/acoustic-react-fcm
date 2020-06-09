# Acoustic React Native and FCM Sample app 
The app demonstrate the integration of Acoustic React Native SDK and FCM push provider. (React Native version 0.60.0+)

## General

- Clone or download this repository
- Note that there are a few changes from [Acoustic React Native 3.8.0 SDK](https://github.com/Acoustic-Mobile-Push/React-Native)
--A new file: MessagingService.java in package: co.acoustic.mobile.push
--Change to firebase.MESSAGING_EVENT service
- From your project folder run the command `npm install`


## Android Support
- Replace your google-services.json file in ./android/app/ folder
- Edit ./android/app/src/main/assets/MceConfig.json and change **appKey,baseUrl** and **logLevel** to verbose
- Edit ./android/app/src/main/res/values/strings.xml and comment out 
`<!--` string name="google_api_key">  <string name="google_app_id" `-->`
- Edit ./node_modules/react-native-acoustic-mobile-push/android/build.gradle change gms version to 15 as in `implementation 'com.google.android.gms:play-services-base:15.0.1'`
- Run the command `npx jetify`
- Make sure the service in AndroidManifest.xml for event
  <action android:name="com.google.firebase.MESSAGING_EVENT"/> has
  <service android:name="co.acoustic.mobile.push.MessagingService">
        
- Run the command `export ANDROID_X=1` (in MAC OS) or `set ANDROID_X=1` (in Windows)
- Compile using the command: `cd android &&  ./gradlew clean && ./gradlew assembleDebug && cd ..`
- Run the app using the command `react-native run-android`
- Test notification from Acoustic and from Firebase


## iOS Support
- coming soon