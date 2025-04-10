import React from 'react';
import {View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const VideoPlayerScreen = ({route}) => {
  const {videoUrl} = route.params;

  return (
    <View style={styles.container}>
      <WebView source={{uri: videoUrl}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default VideoPlayerScreen;
