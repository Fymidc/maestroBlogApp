import { View, Text, useWindowDimensions, Image, ScrollView } from 'react-native'
import React from 'react'
import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../types'
import RenderHtml from 'react-native-render-html';

type Props = NativeStackScreenProps<StackParamList, 'Detail'>

const DetailScreen = (props: Props) => {


  const source = {
    html: `
  ${props.route.params?.item?.content}`
  };

  const { width } = useWindowDimensions();

  return (
    <View style={{ flex: 1 }} >
      <View style={{ flex: 1, elevation: 8 }} >

        <Image style={{ flex: 1 }} source={{ uri: `${props.route.params?.item?.banner}` }} />
        <Text style={{
          textShadowColor: 'rgba(0, 0, 0, 0.85)',
          textShadowOffset: { width: -2, height: 2 },
          textShadowRadius: 10, position: "absolute", bottom: 10, fontSize: 22, padding: 10, color: "white", fontWeight: "800"
        }} >{props.route.params?.item?.title}</Text>
      </View>

      <View style={{ flex: 2, padding: 10 }} >
        <ScrollView>
        <Text style={{textAlign:"right"}} >{props.route.params?.item?.createdAt.slice(0,10)}</Text>

          <RenderHtml
            contentWidth={width}
            source={source}
          />
        </ScrollView>
      </View>
    </View>
  )
}

export default DetailScreen