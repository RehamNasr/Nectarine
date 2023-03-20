
import React, { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TextInput,
    TouchableOpacity,
    StatusBar,
    FlatList
} from 'react-native';


import * as Const from '../constant/Const'

const { height, width } = Dimensions.get("window");
export default function Search({ navigation }) {
    // 10.0.2.2
  



    return (
        <>
            <StatusBar backgroundColor={Const.first_color} />
            <View style={styles.Container}>
                <Image
                    source={require("../Image/logo.png")}
                    resizeMode="center"
                    style={styles.image}
                >

                </Image>
                <Text style={styles.text}>Nectarine</Text>
            </View>

        </>
    )
}



const styles = StyleSheet.create({
    Container: {
        height:height*1.1,
        width:width,
        backgroundColor: Const.first_color,
        alignItems: "center",
        justifyContent: "center"

    },
    image: {
        height: height * .2,
        width: width * .5,
        backgroundColor: Const.first_color
    },
    text: {
        fontSize: 25,
        color: "#000",
        fontFamily: "Splash-Regular",
        marginTop: height * .01
    }


})


