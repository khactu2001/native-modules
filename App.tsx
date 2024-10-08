/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type { PropsWithChildren } from 'react';
import React, { useCallback } from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';

// import CheckBox from '@react-native-community/checkbox';
// import { multiply } from '@react-native-community/checkbox'; // import Checkbox from 'cb-module';
// import Checkbox, { multiply } from './modules/cb-module/src';
// import CheckBox from '@react-native-community/checkbox';
import { Blurhash } from 'react-native-blurhash';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: 'white',
    flex: 1
  };
  const imageUri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s';


  async function pressBtn(): Promise<void> {
    // console.log('Function not implemented.', multiply(2, 2));

    const blurhash = await Blurhash.encode(imageUri, 4, 3)
    console.log(blurhash);
  }

  const [value, setValue] = React.useState(false);

  function onLoadEnd() {
    console.log('onLoadEnd called!');

  }
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={{ flex: 1, backgroundColor: 'yellow' }} />
      <View style={{ width: 200, height: 200 }} />
      <Text testID='text'>lkafdhawer</Text>
      <Button title='hello' onPress={pressBtn} />
      {/* <CheckBox value={value} style={{ width: 100, height: 100 }} /> */}

      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: imageUri }}
          style={{ flex: 1 }}
          onLoadEnd={onLoadEnd}
        />
        <Blurhash
          blurhash="LGFFaXYk^6#M@-5c,1J5@[or[Q6."
          style={{ width: 200, height: 100 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
