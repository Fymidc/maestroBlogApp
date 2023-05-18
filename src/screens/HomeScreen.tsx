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
    //const [isEnabled, setIsEnabled] = useState(false);

    const navigation = useNavigation<HomeScreenNavigationProp>()


    const footerIndicator = (loading: boolean) => {
        console.log("boolean", loading)
        return loading === true ? (
            <View
                style={{
                    paddingVertical: 20,
                }}
            >
                <ActivityIndicator animating size="large" style={{
                    alignItems: "center",
                    justifyContent: "center", flex: 1
                }} />
            </View>
        ) : null
    };


    return (
        <View style={{ flex: 1 }} >
            <ArticleContext.Consumer>
                {(context) => (
                    <View style={{ flex: 1, backgroundColor: context.isDark ? "#141d26" : "white" }} >
                        <View style={{
                            flex: 1, backgroundColor: context.isDark ? "#141d26" : "white", alignItems: "center",
                            justifyContent: "space-between",
                            flexDirection: "row",
                            paddingHorizontal: 20,
                            elevation: 3

                        }} >


                            <Text style={{
                                textShadowColor: 'rgba(0, 0, 0, 0.5)',
                                textShadowOffset: { width: -1, height: 1 },
                                textShadowRadius: 10, color: context.isDark ? "white" : "black", letterSpacing:1,fontSize: 19, fontFamily: "Antonio-SemiBold"
                            }} >Maestro<Text>CR</Text> </Text>

                            <View style={{ flexDirection: "row", alignItems: "center" }} >
                                <Feather name='sun' size={20} color={context.isDark ? "white" : "black"} />
                                <Switch
                                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                                    thumbColor={context.isDark ? '#144272' : '#f5dd4b'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={context.toggleSwitch}
                                    value={context.isDark}
                                />
                                <Feather name='moon' size={20} color={context.isDark ? "white" : "black"} />
                            </View>
                        </View>
                        <View style={{ flex: 1, backgroundColor: context.isDark ? "#141d26" : "white", alignItems: "center", justifyContent: "center" }} >
                            <Text style={{ color: context.isDark ? "white" : "black", fontSize: 25, fontFamily: "Antonio-VariableFont_wght", }} >Discover</Text>
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
                                    data={context.articles}
                                    keyExtractor={(item: Result, index: number) => item.postId ? item.postId.toString() : ""}
                                    refreshControl={<RefreshControl refreshing={context.refreshing} onRefresh={context.onRefresh} />}
                                    contentContainerStyle={{

                                        alignItems: "center",
                                        backgroundColor: context.isDark ? "#141d26" : "white"
                                    }}
                                    // snapToInterval={500}
                                    // decelerationRate={10}
                                    //bounces={true}
                                    // onScroll={scrollHandler}
                                    ListFooterComponent={footerIndicator(context.loading)}
                                    onEndReached={context.getMore}
                                    onEndReachedThreshold={0.6}
                                    //scrollEventThrottle={16}
                                    renderItem={({ item, index }) => {


                                        return (
                                            <ArticleCard item={item} isDark={context.isDark} key={index} navigation={navigation} />

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