import {useColorScheme} from 'nativewind';
import React from 'react';
import {SafeAreaView, StatusBar, Switch, Text, View} from 'react-native';
import ProductList from './src/components/ProductList';

function App() {
  const {colorScheme, toggleColorScheme} = useColorScheme();
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-200 dark:bg-black">
      <View className="flex-row w-full gap-5">
        <Text className="text-2xl font-bold text-black dark:text-white">
          New Collection
        </Text>
        <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
      </View>
      <ProductList />
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
      />
    </SafeAreaView>
  );
}

export default App;
