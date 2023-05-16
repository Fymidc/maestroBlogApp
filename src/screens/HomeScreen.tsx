import { View, Text } from 'react-native'
import React from 'react'
import { ArticleContext } from '../Context/context'

const HomeScreen = () => {

    
    return (
        <View>
            <ArticleContext.Consumer>
                {(context) => (
                    <Text>HomeScreen{context.name }</Text>
                )}

            </ArticleContext.Consumer>
        </View>
    )
}

export default HomeScreen