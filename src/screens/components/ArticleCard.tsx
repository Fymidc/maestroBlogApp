import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Result, StackParamList } from '../../types';
import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';


type UserScreenNavigationProp = NativeStackNavigationProp<StackParamList, 'Home'>;

type Props = {
  navigation: UserScreenNavigationProp;
  item: Result;
  isDark:boolean
};

const ArticleCard = (props: Props) => {
  return (
    <TouchableOpacity
    onPress={()=>props.navigation.navigate("Detail",{item:props.item,isDark:props.isDark})}
      activeOpacity={0.8}
      style={{overflow:"hidden",elevation:8, backgroundColor: props.isDark ? "#141d26": "white", width: 350, height: 500, marginVertical: 10 ,borderRadius:15}} >
      <View style={{ backgroundColor: props.isDark ?"#141d26": "white", flex: 1 }} >
        <View style={{ flex: 2}} >
          <Image style={{ flex: 1 }} source={{ uri: `${props.item.banner}` }} />
        </View>
        <View style={{ flex: 1 ,padding:8}}  >
          <Text style={{color: props.isDark ? "white": "black",fontSize:18,paddingVertical:5}} >{props.item.title}</Text>
          <Text style={{color:props.isDark ? "white": "black"}} >{props.item.summary.slice(0,180)} <Text style={{color:"grey"}} >...more</Text>  </Text>
          <Text style={{color: props.isDark ? "white": "black", bottom: 0, right: 10, position: "absolute" }} >{props.item.totalReadingTime} min</Text>
        </View>
      </View>


    </TouchableOpacity>
  )
}

export default ArticleCard