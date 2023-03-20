
import React, { useState, useEffect, useRef } from 'react';
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
import ActionSheet from 'react-native-actions-sheet';
import * as Const from '../constant/Const'
import Ionicons from 'react-native-vector-icons/Ionicons'
const { height, width } = Dimensions.get("window");
import { useSelector, useDispatch } from 'react-redux';
export default function Search({ navigation }) {
    // const all = useSelector(state => state.list.allproduct)
    const index = useSelector(state => state.index.index)
    // const [obj, setobj] = useState(all[index])
    const [obj, setobj] = useState({})
    useEffect(() => {
        fetch('http://192.168.1.6:44391/api/app/product')
            .then(response => response.json())
            .then(json => {
                setobj(json.items[index])
               
            }
            )
            .catch((error) => {
                console.log(error)
            }
            )

    }, [])

    incrementsize = (index) => {
        let arr = [...allproduct]
        arr[index].numparts++;
        setallproduct(arr)
        setallproductBackup(arr)
    }

    decrementsize = (index) => {
        let arr = [...allproduct]
        if (arr[index].numparts == 0) return
        arr[index].numparts--;
        setallproduct(arr)
        setallproductBackup(arr)
    }

    return (

        <>
            <StatusBar backgroundColor={Const.first_color} />
            <View style={styles.Container}>

                <Image source={{ uri: obj.image }}
                    style={styles.image}
                    resizeMode="center"


                ></Image>
                <View style={{ backgroundColor: Const.first_color, padding: 20 }}>


                    <Text style={styles.title}>{obj.title}</Text>
                    <View style={{
                        flexDirection: "row",
                        alignSelf: "center"
                    }}>
                        <View style={{ flex: 1.1 }}>

                            <Text style={styles.prices}>price : {obj.cost}</Text>
                            <Text style={styles.prices}>Total price :  </Text>

                        </View>
                        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                            <TouchableOpacity
                                onPress={() => {
                                    decrementsize(index)
                                }}
                                style={{
                                    width: width * .1,
                                    height: height * .05,
                                    borderRadius: 50,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: Const.second_color

                                }}

                            >
                                <Ionicons name="remove-outline" style={styles.iconcount}></Ionicons>
                            </TouchableOpacity>

                            <View style={{
                                width: width * .2,
                                alignItems: "center",
                                justifyContent: "center"

                            }}
                            >
                                <Text style={styles.numparts}>5</Text>
                            </View>

                            <TouchableOpacity
                                onPress={() => {

                                    incrementsize(index)
                                }}
                                style={{
                                    width: width * .1,
                                    height: height * .05,
                                    borderRadius: 50,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: Const.second_color

                                }}
                            >
                                <Ionicons name="add" style={styles.iconcount}></Ionicons>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <Text style={styles.size}>{obj.size}</Text>
                    <View style={styles.discview}>
                        <Text style={styles.disc}>{obj.description}</Text>
                    </View>


                    <TouchableOpacity
                        style={styles.button}

                    >
                        <Text style={{ fontSize: 17, color: "#fff", fontFamily: Const.Font_family2 }}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </>
    )
}



const styles = StyleSheet.create({
    Container: {
        height: height * .95,
        backgroundColor: "#fff",
        // alignItems: "center",

    }, header: {
        height: height * .1,
        width: width * .9,
        backgroundColor: Const.first_color,
        alignItems: "center",
        flexDirection: "row",
    }
    ,

    image: {
        height: height * .28,
        width: width,
        alignSelf: "center"
    }, title: {
        fontSize: 20,
        color: "#000",
        fontFamily: Const.Font_family2,
        marginVertical: height * .02

    }, size: {
        fontSize: 12,
        color: "#aaa",
        marginVertical: height * .02
    }, discview: {
        height: height * .15,
        width: width * .9,
        justifyContent: "center",
        borderTopWidth: .2,
        borderBottomWidth: .2,
        borderStyle: "dashed"

    }

    ,
    disc: {
        fontSize: 12,
        color: "#000",
        maxWidth: width * .8,
        fontFamily: Const.Font_family2,


    },
    button: {
        height: height * .06,
        width: width * .9,
        backgroundColor: "#ff6b00",
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        justifyContent: "space-around",
        marginVertical: height * .03
    }, numparts: {
        fontSize: 14,
        color: "#000",
        fontFamily: Const.Font_family

    },
    iconcount: {
        fontSize: 15,
        color: "#fff"
    },
    prices: {
        fontSize: 13,
        fontFamily: Const.Font_family2,
        color: "#000",
        marginVertical: height * .01
    }



})


