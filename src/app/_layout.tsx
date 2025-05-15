// import '../global.css';
import '../../global.css';
// import {
//   Poppins_400Regular,
//   useFonts,
//   Poppins_700Bold,
//   Poppins_600SemiBold,
// } from '@expo-google-fonts/poppins';

import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
// import {AuthProvider} from '../contexts/auth-provider';
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  //  const [loaded, error] = useFonts({
  //    Poppins_400Regular,
  //    Poppins_600SemiBold,
  //    Poppins_700Bold,
  //   });
  //   useEffect(() => {
  //     if (loaded || error) {
  //       SplashScreen.hideAsync();
  //     }
  //   }, [loaded, error]);
    
  //   if (!loaded && !error) {
  //     return null;
  //   }
 
  return (
      <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
        </Stack>
    // // <GestureHandlerRootView>
    //   {/* <AuthProvider> */}
       
    //   {/* </AuthProvider> */}
    // // </GestureHandlerRootView>
  );
}
