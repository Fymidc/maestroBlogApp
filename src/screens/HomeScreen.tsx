import { View, Text, FlatList, RefreshControl, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { ArticleContext } from '../Context/context'
import ArticleCard from './components/ArticleCard'
import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

import { Result, StackParamList } from '../types'
import { useNavigation } from '@react-navigation/native';

type HomeScreenNavigationProp = NativeStackNavigationProp<
StackParamList,
  'Home'
>;

const HomeScreen = () => {
    const [page, setpage] = useState(1)

    const navigation = useNavigation<HomeScreenNavigationProp>()


    return (
        <View style={{ flex: 1 }} >
            <ArticleContext.Consumer>
                {(context) => (
                    <View style={{ flex: 1, backgroundColor: "red" }} >
                        <View style={{ flex: 1, backgroundColor: "yellow", alignItems: "center", justifyContent: "center" }} >
                            <Text style={{ color: "black", fontSize: 24 }} >Discover</Text>
                        </View>

                        <View style={{ flex: 5 }} >
                            {context.loading === true
                                ?
                                <ActivityIndicator size={'large'}
                                    style={{
                                        alignItems: "center",
                                        justifyContent: "center", flex: 1
                                    }}
                                />

                                :

                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={context.articles.result}
                                    keyExtractor={(item: Result, index: number) => item.postId ? item.postId.toString() : ""}
                                    refreshControl={<RefreshControl refreshing={context.refreshing} onRefresh={context.onRefresh} />}
                                    contentContainerStyle={{

                                        alignItems: "center",
                                        backgroundColor: "green"
                                    }}
                                    snapToInterval={200}
                                    decelerationRate={10}
                                    bounces={false}
                                    // onScroll={scrollHandler}

                                    scrollEventThrottle={16}
                                    renderItem={({ item, index }) => {


                                        return (
                                            <ArticleCard item={item} key={index} navigation={navigation}/>

                                        )
                                    }}
                                />
                            }

                        </View>



                    </View>
                )}

            </ArticleContext.Consumer>
        </View>
    )
}

export default HomeScreen