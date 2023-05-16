import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { Result, StackParamList } from '../../types';
import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';


type UserScreenNavigationProp = NativeStackNavigationProp<StackParamList, 'Home'>;

type Props = {
  navigation: UserScreenNavigationProp;
  item: Result;
};

const ArticleCard = (props:Props) => {
  return (
    <TouchableOpacity
    activeOpacity={0.8}
     style={{ backgroundColor: "orange",width:300,height:200,marginVertical:10}} >
      <View style={{backgroundColor:"red",flex:1}} >
        <View style={{flex:1}} >
          <Text>Image</Text>
        </View>
        <View style={{flex:1}}  >
          <Text>{props.item.title}</Text>
          <Text>Short Detail</Text>
          <Text style={{bottom:0,right:10,position:"absolute"}} >16 min</Text>
        </View>
      </View>


    </TouchableOpacity>
  )
}

export default ArticleCard