/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
 
} from 'react-native/Libraries/NewAppScreen';
import ArticleProvider from './src/Context/globalState';
import Navigation from './src/navigation/Navigation';



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{ flex: 1 }} >
    
      <ArticleProvider>
        <Navigation/>
      </ArticleProvider>
     
     
    </SafeAreaView>
  );
}



export default App;
