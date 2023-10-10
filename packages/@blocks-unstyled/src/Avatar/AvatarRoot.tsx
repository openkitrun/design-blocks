import React from 'react';
import { Image, View } from 'react-native';

export function AvatarRoot() {
  const handleLoadStart = React.useCallback(() => {}, []);

  return (
    <View>
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        onLoadStart={handleLoadStart}
      />
    </View>
  );
}
