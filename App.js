/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useRef, useState } from 'react';
import { Image, Linking, StatusBar, StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';
import logo from './assets/trsrh.png';


const App = () => {
  const webViewRef = useRef();
  const [loading, setLoading] = useState();
  const [url, setUrl] = useState(null);

  const _handleOpenURL = data => {
    setUrl(data.url ? data.url : 'https://terserah-deh.vercel.app/');
  };

  useEffect(() => {
    Linking.getInitialURL().then(url => {
      setUrl(url ? url : 'https://terserah-deh.vercel.app/');
    });
    Linking.addEventListener('url', _handleOpenURL);
    // AppState.addEventListener("change", _handleAppStateChange);

    return () => {
      // AppState.removeEventListener("change", _handleAppStateChange);
      Linking.removeEventListener('url', _handleOpenURL);
    };
  }, []);

  useEffect(() => {
  }, [url])

  useEffect(() => {
  }, [loading])

  return (
    <>
      <StatusBar backgroundColor="#5d39dd" />

      <View style={loading == 'onLoadingFinish' ? { display: 'none' } : styles.loading}>
        <View style={styles.wrap}>
          <Image source={logo} />
        </View>
      </View>

      {
        url ?
          <WebView
            ref={webViewRef}
            source={{ uri: 'https://terserah-deh.vercel.app/' }}
            mediaPlaybackRequiresUserAction={false}
            renderLoading={(e) => console.log(e)}
            onLoadStart={syntheticEvent => {
              const { dispatchConfig } = syntheticEvent;
              setLoading(dispatchConfig.registrationName)
            }}
            onLoadEnd={syntheticEvent => {
              const { dispatchConfig } = syntheticEvent;
              setLoading(dispatchConfig.registrationName)
            }}
            onLoad={syntheticEvent => {
              const { dispatchConfig } = syntheticEvent;
              setLoading(dispatchConfig.registrationName)
            }}
            onNavigationStateChange={(event) => {
              if (event.url !== 'https://terserah-deh.vercel.app/') {
                webViewRef.current.stopLoading();
                Linking.openURL(event.url);
              }
            }}
          />
          : null
      }

    </>
  );
};

export default App;

const styles = StyleSheet.create({
  loading: {
    backgroundColor: '#5d39dd',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center'
  },
  wrap: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center'
  }
});

