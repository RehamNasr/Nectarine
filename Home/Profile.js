
import React, { useState, useContext, useRef } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Dimensions,
    Image,
    TextInput,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';
import * as Const from '../constant/Const'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
const { height, width } = Dimensions.get("window");
import ImageModal from 'react-native-image-modal';
import ActionSheet from 'react-native-actions-sheet';

export default function Profile({ navigation }) {





    // imagegallery = () => {
    //     ImagePicker.openPicker({
    //         width: 300,
    //         height: 400,
    //         cropping: true
    //     }).then(image => {
    //         actionsheet.current.hide();

    //         // let obj = userData;
    //         // obj.image = image.path
    //         // database()
    //         //     .ref('/users/',userData.id)
    //         //     .update(obj)
    //         //     .then(() => console.log('Data set.'));


    //     });
    // }
    // imagecamera = () => {
    //     ImagePicker.openCamera({
    //         width: 300,
    //         height: 400,
    //         cropping: true,
    //     }).then(image => {
    //         actionsheet.current.hide();

    //         // let obj = userData;
    //         // obj.image = image.path


    //     });
    // }

    const showActionSheet = () => {
        actionsheet.current.show();
    }
    let actionsheet = useRef();
    return (
        <>
            <View style={styles.Container}>
                <StatusBar backgroundColor={Const.first_color} />


                <View style={styles.header}>
                    <TouchableOpacity style={styles.back}
                    onPress={()=>{
                        navigation.goBack()
                    }}
                    
                    >
                        <Ionicons style={styles.iconbak} name="ios-arrow-back"></Ionicons>
                    </TouchableOpacity>
                    <Text style={styles.textheader}>Profile</Text>
                    <TouchableOpacity style={styles.back}>
                        {/* <Ionicons style={styles.iconbak} name="search-outline"></Ionicons> */}
                    </TouchableOpacity>
                </View>
               


                {/* <View style={styles.box1}>
                    <View style={styles.viewimage}>
                        <ImageModal
                            resizeMode="contain"
                            imageBackgroundColor="#fff"
                            modalImageStyle={{
                                height: 200,
                                width: 200,
                                alignItems: "center",
                                backgroundColor: "#fff",

                            }}
                            style={styles.image}
                            source={{ uri: userData.image }}
                        />
                    </View>
                    <TouchableOpacity style={styles.takephoto}
                        onPress={() => {
                            showActionSheet()
                        }}
                    >
                        <EvilIcons name="camera" style={styles.camera}></EvilIcons>
                    </TouchableOpacity>
                </View> */}
                <View
                    style={styles.boximage}

                >
                    <View style={styles.viewimage}>
                        <ImageModal
                            resizeMode="contain"
                            imageBackgroundColor={Const.first_color}
                            modalImageStyle={{
                                height: 200,
                                width: 200,
                                alignItems: "center",
                                backgroundColor: "#fff",

                            }}
                            style={styles.image}
                            source={require("../Image/logo.png")}
                        />
                    </View>
                    <TouchableOpacity style={styles.takephoto}
                        onPress={() => {
                            showActionSheet()
                        }}
                    >
                        <EvilIcons name="camera" style={styles.camera}></EvilIcons>
                    </TouchableOpacity>

                </View>
                <View
                    style={styles.box3}
                >
                    <TouchableOpacity style={styles.row}>
                        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                            <View>
                                <Ionicons name="person-outline" style={styles.personicon} />
                            </View>
                            <View style={{ marginRight: width * .35 }}>
                                <Text style={styles.title}>Name</Text>
                                <Text style={styles.name}>Reham Nasr</Text>
                            </View>
                            <View>
                                <AntDesign name="edit" style={{ ...styles.personicon, fontSize: 15 }} />

                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            {/* <Text style={styles.about}>this is no </Text> */}
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.row}>
                        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                            <View style={{ width: width * .14 }}>
                                <Ionicons name="person-outline" style={styles.personicon} />
                            </View>
                            <View style={{ marginRight: width * .0, width: width * .55 }}>
                                <Text style={styles.title}>Location</Text>
                                <Text style={styles.name}>Tanta</Text>
                            </View>
                            <View style={{ width: width * .15, alignItems: "center" }}>
                                <AntDesign name="edit" style={{ ...styles.personicon, fontSize: 15 }} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.row}>
                        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                            <View>
                                <Ionicons name="person-outline" style={styles.personicon} />
                            </View>
                            <View style={{ marginRight: width * .35 }}>
                                <Text style={styles.title}>About</Text>
                                <Text style={styles.name}>01158659437</Text>
                            </View>
                            <View>
                                <AntDesign name="edit" style={{ ...styles.personicon, fontSize: 15 }} />

                            </View>
                        </View>


                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logoutbutton}
                        onPress={() => {
                            // logout()
                        }}

                    >
                        <AntDesign name="logout" style={{ ...styles.personicon, fontSize: 16 }} />
                        <Text style={styles.logout}>Logout</Text>
                    </TouchableOpacity>
                </View>
                <ActionSheet containerStyle={styles.action}
                    ref={actionsheet}
                    destructiveButtonIndex={1}
                    cancelButtonIndex={4}

                >

                    <View style={{ height: height * .1, width: width * .9, flexDirection: "row", justifyContent: "space-around" }}>
                        <TouchableOpacity style={styles.box}
                            onPress={() => {
                                // imagecamera()
                            }}
                        >
                            <Ionicons name="camera-outline" style={styles.icon}></Ionicons>
                            <Text style={styles.textimage}>Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.box}
                            onPress={() => {

                            }
                                // imagegallery()
                            }
                        >
                            <Ionicons name="images-outline" style={styles.icon}></Ionicons>
                            <Text style={styles.textimage}>Gallery</Text>
                        </TouchableOpacity>
                    </View>
                </ActionSheet>
            </View>
        </>
    )
}



const styles = StyleSheet.create({
    Container: {
        height: height,
        width: width,
        backgroundColor: "#fff",
        // justifyContent:"space-around",
        alignItems: "center"
    },

    header: {
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
    box1: {
        height: height * .3,
        width: width,
        alignItems: "center",
        justifyContent: "center",
    }, viewimage: {
        height: height * .16,
        width: width * .32,
        alignItems: "center",
        justifyContent: "center"
    }, boximage: {
        height: height * .21,
        width: width * .65,
        backgroundColor: Const.first_color,
        alignSelf: "flex-start",
        borderBottomRightRadius: 100,
        borderTopRightRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: height * .05,

    },
    image: {
        height: height * .15,
        width: width * .3,
        borderRadius: 200,
        backgroundColor: "#fff",
    },
    takephoto: {
        height: "18%",
        width: "11%",
        borderRadius: 200,
        backgroundColor: Const.second_color,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: width * .22,
        marginTop: -height * .05
    }, camera: {
        fontSize: 20,
        color: Const.first_color
    },
    box3: {
        height: height * .5,
        width: width * .9,
        backgroundColor: "#fff",
        // elevation: 5,
        // marginTop: height * .009,
        paddingTop: height * .03,
        shadowColor: Const.first_color,
        borderRadius: 5,
        padding: 10,
        alignItems: "center",



    },
    row: {
        height: height * .08,
        width: width * .8,
        // borderBottomWidth: .2,
        paddingHorizontal: width * .05,
        marginTop: height * .015,
        alignItems: "center",
        borderColor: "#aaa"
    }, personicon: {
        color: Const.second_color,
        fontSize: 20,
        marginHorizontal: width * .04
    },
    title: {
        fontSize: 12,
        color: "#aaa",
        fontFamily: Const.Font_family,

    },
    name: {
        fontSize: 15,
        color: Const.second_color,
        fontFamily: Const.Font_family,

    }, about: {
        fontSize: 12,
        color: "#aaa",
        fontFamily: Const.Font_family,

    },
    text: {
        fontSize: 15,
        color: "#fff",
        marginTop: height * .02,
        // fontFamily: "Almarai-ExtraBold"

        // fontFamily: "Almarai-Regular",
    }, logoutbutton: {
        height: height * .09,
        width: width * .85,
        marginTop: height * .02,
        flexDirection: "row",
        alignItems: "center"
    }, logout: {
        color: "#000",
        fontSize: 15,
        fontFamily: Const.Font_family,

    },
    action: {
        borderTopEndRadius: 10,
        borderTopLeftRadius: 10,
        height: height * .22,
        alignItems: "center",
        paddingTop: height * .05,
        backgroundColor:Const.first_color

    }, box: {
        height: height * .11,
        width: width * .4,
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    }, textimage: {
        fontSize: 12,
        fontFamily: Const.Font_family2,
        marginTop:height*.01,
        color: "#000"
    }, icon: {
        fontSize: 30,
        color:Const.second_color
    }
});


