import {useColorScheme} from 'nativewind';
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

type Props = {
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
};
const ProductCard = (props: Props) => {
  const {colorScheme} = useColorScheme();
  const [count, setCount] = useState(1);
  const {title, description, price, image, category} = props;

  const increaseItem = () => {
    setCount(prev => prev + 1);
  };

  const decreaseItem = () => {
    if (count <= 1) {
      return;
    }
    setCount(prev => prev - 1);
  };

  return (
    <View className="w-full bg-white dark:bg-gray-50/10 rounded-3xl pt-5 px-5 my-5">
      <View className="bg-white rounded-xl">
        <Image
          source={{uri: image}}
          className="w-full h-72 object-contain"
          style={{resizeMode: 'contain'}}
        />
      </View>
      <View className="mt-5">
        <Text className="capitalize text-sm text-black/60 dark:text-white/70">
          {category}
        </Text>
        <Text className="text-lg font-semibold text-black dark:text-white">
          {title}
        </Text>
        <View className="flex-row justify-between my-3">
          <View className="flex-row items-center gap-3">
            <AntDesign
              name="minuscircleo"
              size={24}
              color={colorScheme === 'light' ? 'black' : 'white'}
              onPress={decreaseItem}
              suppressHighlighting={true}
            />
            <Text className="text-xl text-black dark:text-white">{count}</Text>
            <AntDesign
              name="pluscircleo"
              size={24}
              color={colorScheme === 'light' ? 'black' : 'white'}
              onPress={increaseItem}
              suppressHighlighting={true}
            />
          </View>
          <Text className="text-2xl font-extrabold text-black dark:text-white">
            ${price * count}
          </Text>
        </View>
        <Text
          numberOfLines={3}
          className="text-sm text-black/60 dark:text-white/70">
          {description}
        </Text>
        <TouchableOpacity className="flex-row justify-center w-10/12 m-5 self-center bg-black dark:bg-white p-3 rounded-full">
          <Text className="text-white dark:text-black font-bold">
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;
