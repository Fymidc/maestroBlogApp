import { View, Text } from 'react-native'
import React from 'react'
import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../types'

type Props = NativeStackScreenProps<StackParamList, 'Detail'>

const DetailScreen = (props:Props) => {
  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  )
}

export default DetailScreen