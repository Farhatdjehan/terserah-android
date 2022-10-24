/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar } from 'react-native';
import WebView from 'react-native-webview';


const App = () => {


  return (
    <>
      <StatusBar backgroundColor="#5d39dd" />
      <WebView source={{ uri: 'https://terserah-deh.vercel.app/' }} />
    </>
  );
};

export default App;
