
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
import * as Const from '../constant/Const'
import Ionicons from 'react-native-vector-icons/Ionicons'
const { height, width } = Dimensions.get("window");
import ActionSheet from 'react-native-actions-sheet';
import Product_Details from "./Product_Details"
import { useSelector, useDispatch } from 'react-redux';
import { set } from '../Redux/Action/Action';
export default function Search({ navigation }) {
    const [SearchKey, setSearchKey] = useState("")
    let actionsheet = useRef();
    // const all = useSelector(state => state.list.allproduct)
    const [allproduct, setallproduct] = useState([])
    const [allproductBackup, setallproductBackup] = useState([])
    useEffect(() => {
        fetch('http://192.168.1.6:44391/api/app/product')
            .then(response => response.json())
            .then(json => {
                setallproduct(json.items)
                setallproductBackup(json.items)
                // let count = 0;
                // for (var i = 0; i < allproduct.length; i++) {
                //     if (allproduct[i].image == "") {
                //         count++;
                //     }
                // }

            }
            )
            .catch((error) => {
                console.log(error)
            }
            )

    }, [])



    const [allGategories, setallGategories] = useState([
        {
            title: "Meat",
            Image: require("../Image/Kiwi.png"),
        }, {
            title: "Fish",
            Image: require("../Image/Kiwi.png"),
        }, {
            title: "Fruit",
            Image: require("../Image/Kiwi.png"),
        }])
    const dispatch = useDispatch()
    const showActionSheet = (index) => {
        dispatch({
            type: set,
            payload: index
        })
        actionsheet.current.show();
    }

    search = (value) => {
        setallproduct(allproductBackup.filter((it) => it.title.match(value)))
    }
    const [index, setindex] = useState(0)

    incrementsize = (index) => {
        let arr = [...allproduct]
        arr[index].numparts++;
        setallproduct(arr)
        setallproductBackup(arr)
        console.log(arr)
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
               
                <View style={styles.header}>

                    <Ionicons name="md-location-outline" style={styles.icon}></Ionicons>

                    <View style={styles.viewtextheader}>
                        <Text style={styles.textheader}>ST.Nichlas, 34</Text>
                    </View>
                    <View>
                        <Ionicons name="chevron-down" style={styles.icon2}></Ionicons>
                    </View>
                    <TouchableOpacity style={styles.viewicon3}>
                        <Ionicons name="person-circle-outline" style={styles.icon2}></Ionicons>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewtextinput}>
                    <Ionicons
                        style={styles.iconsearch}
                        name="search-outline"
                    ></Ionicons>
                    <TextInput
                        placeholder='Find Product'
                        placeholderTextColor={"#aaa"}
                        style={styles.textinput}
                        value={SearchKey}
                        // editable={false}
                        onChangeText={(value) => {
                            setSearchKey(value)
                            search(value)

                        }}
                    >

                    </TextInput>
                </View>
                <View style={styles.viewrow}>
                    <Text style={styles.text1}>Stock%</Text>
                    <Text style={styles.text2}>All goods</Text>
                    <TouchableOpacity style={styles.viewiconarrow}>
                        <Ionicons name="chevron-forward-sharp" style={styles.iconarrrow}></Ionicons>
                    </TouchableOpacity>


                </View>
                <View style={{ flexDirection: "row", height: height * .36, marginTop: -height * .02, marginLeft: width * .03 }}>
                    <FlatList
                        horizontal
                        data={allproduct}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity style={styles.box}
                                onPress={() => {
                                    setindex(index)
                                    showActionSheet(index)
                                }}
                            >
                                <View style={styles.descount}>
                                    <Text style={styles.textdiscount}>-5%</Text>
                                </View>
                                <Image
                                    style={styles.Image}
                                    source={{ uri:item.image }}
                                    // source={require(`${item.image}`) }
                                   
                                    resizeMode="center"

                                >
                                </Image>
                                <Text style={styles.title}>
                                    {item.title}
                                </Text>
                                <View style={{ flexDirection: "row", width: width * .2, justifyContent: "space-around" }}>
                                    <Text style={styles.size}>
                                        500g
                                    </Text>

                                    <Text style={styles.price}>{item.cost}ج</Text>
                                </View>
                                <View style={styles.countview}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            decrementsize(index)
                                        }}


                                    >
                                        <Ionicons name="remove-outline" style={styles.iconcount}></Ionicons>
                                    </TouchableOpacity>
                                    <Text style={styles.numparts}>2</Text>
                                    <TouchableOpacity
                                        onPress={() => {

                                            incrementsize(index)
                                        }}
                                    >
                                        <Ionicons name="add" style={styles.iconcount}></Ionicons>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        )}

                    >

                    </FlatList>
                </View>
                <Text style={{ ...styles.text1, alignSelf: "flex-start", marginLeft: width * .04, marginBottom: height * .02, width: width * .9, marginLeft: width * .05 }}>Gategories</Text>

                <View style={{
                    width: width * .9,
                    flexWrap: "wrap",
                    flexDirection: "row",
                    marginBottom: height * .5,
                    marginTop: -height * .02
                }}>
                    <FlatList
                        horizontal
                        data={allGategories}
                        renderItem={(({ item, index }) => (
                            <View style={styles.box2}>

                                <Text style={{ ...styles.title, marginBottom: height * .02, paddingLeft: width * .04 }}>
                                    {item.title}
                                </Text>
                                <Image
                                    style={styles.Image}
                                    source={item.Image}
                                    resizeMode="center"
                                >
                                </Image>
                            </View>
                        ))}

                    >

                    </FlatList>
                </View>
                <ActionSheet
                    containerStyle={styles.action}
                    ref={actionsheet}
                    destructiveButtonIndex={1}
                    cancelButtonIndex={4}
                >
                    <TouchableOpacity
                        style={styles.close}
                        onPress={() => {
                            actionsheet.current.hide();

                        }}
                    >
                        <Ionicons name="close" style={styles.iconclose}></Ionicons>
                    </TouchableOpacity>
                    <Product_Details />
                </ActionSheet>
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
    }, icon: {
        color: "#000",
        fontSize: 23,
    },
    viewtextheader: {
        width: width * .45,
        marginLeft: width * .02
    },
    textheader: {
        color: "#000",
        fontSize: 18,
        fontFamily: Const.Font_family2
    },
    icon2: {
        color: "#000",
        fontSize: 18,
        marginHorizontal: 5,
        marginLeft: width * .04
    },
    viewicon3: {
        height: height * .03,
        width: width * .12,
        borderLeftWidth: .2,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: width * .15

    },
    viewtextinput: {
        height: height * .06,
        width: width * .9,
        backgroundColor: "#fff",
        borderRadius: 5,
        marginTop: height * .04,
        paddingHorizontal: width * .02,
        flexDirection: "row",
        alignItems: "center",
        elevation: 1,


    }
    ,
    iconsearch: {
        color: "#000",
        fontSize: 18,
        marginLeft: width * .03,

    },
    textinput: {
        height: height * .07,
        width: width * .8,
        fontSize: 12,
        color: "#000",
        marginLeft: width * .02,
        fontFamily: Const.Font_family2

    },
    viewrow: {
        height: height * .1,
        width: width * .9,
        flexDirection: "row",
        alignItems: "center"
    },
    text1: {
        fontSize: 19,
        color: "#000",
        fontFamily: Const.Font_family2
    },
    text2: {
        color: "#aaa",
        marginLeft: width * .49,
        fontSize: 12,
        fontFamily: Const.Font_family

    },
    viewiconarrow: {
        height: height * .025,
        width: width * .05,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: width * .03,
        elevation: 1,
        borderRadius: 2
    },
    iconarrrow: {
        fontSize: 13,
        color: "#000"

    },
    box: {
        height: height * .35,
        width: width * .43,
        backgroundColor: "#fff",
        elevation: 1,
        borderRadius: 10,
        padding: 10,
        margin: 5,
    }, box2: {
        height: height * .23,
        width: width * .43,
        backgroundColor: "#fff",
        elevation: 1,
        borderRadius: 10,
        margin: 5,
    },
    descount: {
        height: height * .03,
        width: width * .12,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2
    },
    textdiscount: {
        fontSize: 10,
        color: "#fff",
        fontFamily: Const.Font_family2
    },
    Image: {
        height: height * .15,
        width: width * .4,
        backgroundColor: "#fff",
        alignSelf: "center"
    },
    title: {
        fontSize: 16,
        color: "#000",
        maxWidth: width * .35,
        marginTop: height * .02,
        fontFamily: Const.Font_family,


    },
    size: {
        fontSize: 12,
        color: "#aaa",
        fontFamily: Const.Font_family2

    }, price: {
        size: 10,
        color: "#ff6b00",
        fontFamily: Const.Font_family

    },
    countview: {
        height: height * .04,
        width: width * .3,
        backgroundColor: Const.first_color,
        flexDirection: "row",
        justifyContent: "space-around",
        alignSelf: "center",
        alignItems: "center",
        borderRadius: 5,
        marginVertical: height * .02
    },
    numparts: {
        fontSize: 13,
        color: "#000",
        fontFamily: Const.Font_family

    },
    iconcount: {
        fontSize: 14,
        color: "#000"
    }, close: {
        height: height * .05,
        width: width * .1,
        backgroundColor: Const.first_color,
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
    action: {
        height: height * .9,
        width: width,
    }




});


