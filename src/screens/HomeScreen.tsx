import { View, Text, FlatList, RefreshControl, ActivityIndicator, Switch } from 'react-native'
import React, { useState } from 'react'
import { ArticleContext } from '../Context/context'
import ArticleCard from './components/ArticleCard'
import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather'
import { Result, StackParamList } from '../types'
import { useNavigation } from '@react-navigation/native';

type HomeScreenNavigationProp = NativeStackNavigationProp<
    StackParamList,
    'Home'
>;

const HomeScreen = () => {
    const [page, setpage] = useState(1)
    //const [isEnabled, setIsEnabled] = useState(false);


    const navigation = useNavigation<HomeScreenNavigationProp>()



    return (
        <View style={{ flex: 1 }} >
            <ArticleContext.Consumer>
                {(context) => (
                    <View style={{ flex: 1, backgroundColor: "white" }} >
                        <View style={{
                            flex: 1, backgroundColor: "white", alignItems: "center",
                            justifyContent: "space-between",
                            flexDirection: "row",
                            paddingHorizontal: 20,
                            elevation: 3

                        }} >
                            <Text style={{ color: "black", fontSize: 18 }} >Maestrocr</Text>
                            <View style={{ flexDirection: "row", alignItems: "center" }} >
                                <Feather name='sun' size={20} />
                                <Switch
                                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                                    thumbColor={context.isDark ? '#144272' : '#f5dd4b'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={context.toggleSwitch}
                                    value={context.isDark}
                                />
                                <Feather name='moon' size={20} />
                            </View>
                        </View>
                        <View style={{ flex: 1, backgroundColor: "white", alignItems: "center", justifyContent: "center" }} >
                            <Text style={{ color: context.isDark ? "green" : "black", fontSize: 24 }} >Discover</Text>
                        </View>

                        <View style={{ flex: 8 }} >
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
                                        backgroundColor: "white"
                                    }}
                                    snapToInterval={500}
                                    decelerationRate={10}
                                    bounces={true}
                                    // onScroll={scrollHandler}
                                    onEndReached={({ distanceFromEnd }) => {
                                        console.log("distance from end", distanceFromEnd)
                                        if (distanceFromEnd > 0) {
                                           // loadpage()

                                        };
                                    }
                                    }
                                    onEndReachedThreshold={0.6}
                                    scrollEventThrottle={16}
                                    renderItem={({ item, index }) => {


                                        return (
                                            <ArticleCard item={item} key={index} navigation={navigation} />

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