
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
    FlatList,
    ScrollView
} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';

import * as Const from '../constant/Const'
import Ionicons from 'react-native-vector-icons/Ionicons'
const { height, width } = Dimensions.get("window");
export default function Search({ navigation }) {
    let actionsheet = useRef();
    const [SearchKey, setSearchKey] = useState("")
    const [allproduct, setallproduct] = useState(
        [{
            numdiscount: "-5%",
            Image: require("../Image/Kiwi.png"),

            title: "Lime",
            size: "500g",
            price: 100,
            numparts: 1
        }, {
            numdiscount: "-5%",
            Image: require("../Image/Kiwi.png"),
            title: "Tomato",
            size: "500g",
            price: 200,
            numparts: 1
        }, {
            numdiscount: "-5%",
            Image: require("../Image/Kiwi.png"),

            title: "Lime",
            size: "500g",
            price: 100,
            numparts: 1
        },])


    search = (value) => {
        setallproduct(allproductBackup.filter((it) => it.title.match(value)))
    }

    incrementsize = (index) => {
        let arr = [...allproduct]
        arr[index].numparts++;
        setallproduct(arr)
      
    }

    decrementsize = (index) => {
        let arr = [...allproduct]
        if (arr[index].numparts == 0) return
        arr[index].numparts--;
        setallproduct(arr)
        
    }

    return (

        <>
            <StatusBar backgroundColor={Const.first_color} />
            <View style={styles.Container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.back}
                        onPress={() => {
                            navigation.goBack()

                        }}

                    >
                        <Ionicons style={styles.iconbak} name="ios-arrow-back"></Ionicons>
                    </TouchableOpacity>
                    <Text style={styles.textheader}>Basket</Text>
                    <TouchableOpacity style={styles.back}>
                        <Ionicons style={styles.iconbak} name="search-outline"></Ionicons>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <FlatList
                        data={allproduct}

                        renderItem={({ item, index }) => (
                            <View style={styles.card}>
                                <Image source={require("../Image/Kiwi.png")}
                                    style={styles.Image}
                                    resizeMode="center"


                                ></Image>
                                <View style={styles.part1}>
                                    <Text style={styles.title}>Lime</Text>
                                    <Text style={styles.size}>100g</Text>
                                    <View style={{
                                        height: height * .04,
                                        width: width * .22,
                                        flexDirection: "row",
                                        borderRadius: 5,
                                        paddingHorizontal: width * .01,
                                        alignItems: "center"
                                    }}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                decrementsize(index)
                                            }}
                                            style={{
                                                width: width * .06,
                                                height: height * .03,
                                                borderRadius: 50,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: Const.second_color
                                            }}

                                        >
                                            <Ionicons name="remove-outline" style={styles.iconcount}></Ionicons>
                                        </TouchableOpacity>

                                        <View style={{
                                            width: width * .1,
                                            height: height * .04,
                                            alignItems: "center",
                                            justifyContent: "center",


                                        }}
                                        >
                                            <Text style={{ fontSize: 12, color: "#000", fontFamily: Const.Font_family2 }}>{item.numparts}</Text>
                                        </View>

                                        <TouchableOpacity
                                            onPress={() => {

                                                incrementsize(index)
                                            }}
                                            style={{
                                                width: width * .06,
                                                height: height * .03,
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
                                <View style={styles.part2}>
                                    <TouchableOpacity
                                        style={styles.close}
                                        onPress={() => {
                                            // actionsheet.current.hide();

                                        }}
                                    >
                                        <Ionicons name="close" style={styles.iconclose}></Ionicons>
                                    </TouchableOpacity>
                                    <View style={styles.part22}>
                                        <Text style={styles.oldprice}>140ج</Text>
                                        <Text style={styles.newprice}>80ج</Text>
                                    </View>

                                </View>

                            </View>
                        )}
                    >

                    </FlatList>
                    <View style={styles.row}>
                        <Text style={styles.text}>Sum</Text>
                        <Text style={styles.price2}>ج480</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text}>Delivery</Text>
                        <Text style={styles.price2}>ج50</Text>
                    </View>
                    <View style={{ ...styles.row, marginBottom: height * .1 }}>
                        <Text style={styles.text}>To pay</Text>
                        <Text style={styles.price2}>ج480</Text>
                    </View>
                </ScrollView>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.add}>Add a map</Text>
                </TouchableOpacity>
            </View>

        </>
    )
}



const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Const.first_color,
        alignItems: "center",

    }, header: {
        height: height * .1,
        width: width * .9,
        backgroundColor: Const.first_color,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    }, back: {
        height: height * .05,
        width: width * .1,
        alignItems: "center",
        justifyContent: "center"

    }, iconbak: {
        fontSize: 20,
        color: "#000"
    }, textheader: {
        fontSize: 18,
        color: "#000",
        fontFamily: Const.Font_family
    },
    card: {
        height: height * .14,
        width: width * .9,
        alignItems: "center",
        flexDirection: "row",
        marginVertical: height * .005,
        borderBottomWidth: .2,
        borderStyle: "dashed"

    },
    Image: {
        height: height * .11,
        width: width * .22,
        backgroundColor: Const.first_color,
        borderColor: "#aaa",
        padding: 5

    },
    part1: {
        height: height * .1,
        width: width * .49,
        justifyContent: "space-around",
        marginLeft: width * .02
    },
    title: {
        fontSize: 15,
        color: "#000",
        fontFamily: Const.Font_family2
    }, size: {
        fontSize: 12,
        color: "#aaa",
        fontFamily: Const.Font_family2
    },
    iconcount: {
        fontSize: 12,
        color: "#fff"
    },
    part2: {
        height: height * .16,
        width: width * .2,
        justifyContent: "space-between"

    }, close: {
        height: height * .05,
        width: width * .1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        alignSelf: "flex-end",
        margin: 10
    },
    iconclose: {
        color: "#000",
        fontSize: 20,
    },
    part22: {
        height: height * .062,
        width: width * .14,
        flexDirection: "row",
        justifyContent: "space-around"
    }, oldprice: {
        fontSize: 12,
        color: "#aaa",
        textDecorationLine: "line-through",
        fontFamily: Const.Font_family2
    }, newprice: {
        fontSize: 13,
        color: "#000",
        fontFamily: Const.Font_family2

    },
    row: {
        height: height * .08,
        width: width * .9,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }, text: {
        fontSize: 14,
        color: "#000",
        fontFamily: Const.Font_family2
    }, price2: {
        fontSize: 15,
        color: "#000",
        fontFamily: Const.Font_family2
    },
    button: {
        height: height * .07,
        width: width * .9,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Const.second_color,
        borderRadius: 5,
        marginVertical: height * .02,
        position: "absolute",
        position: "absolute",
        bottom: height * .09,


    },
    add: {
        fontSize: 15,
        fontFamily: Const.Font_family,
        color: "#fff"
    }





})


