import React from "react";
import { SafeAreaView, StatusBar, View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { useEffect } from "react/cjs/react.development";
import { services, languageApi, logOut } from "../redux/action/action-creater";


const ServiceScreen = ({ navigation, services, allServices, languageApi, languages, logOut }) => {


    useEffect(() => {
        services();
        languageApi();
    }, []);




    // funciton call after click on logout button
    const onClickLogout = () => {
        logOut()
            .then((res) => {
                console.log("res", res);
                if (res.logout) {
                    navigation.replace('Login');
                }
            })
    }


    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.constainer}>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.titleText}>Services</Text>
                        <TouchableOpacity onPress={() => {
                            onClickLogout();
                        }}>
                            <Text style={styles.titleText}>Logout</Text>
                        </TouchableOpacity>
                    </View>


                    <FlatList
                        // style={{ backgroundColor: 'red' }}
                        data={allServices}
                        renderItem={({ item }) => {
                            // console.log("item", item);
                            return (
                                <View style={styles.serviceView}>
                                    <Image
                                        source={{ uri: item.icon }}
                                        style={styles.serviceImage}
                                    />
                                    <Text style={styles.serviceText}>{item.service}</Text>
                                </View>
                            )
                        }}
                        keyExtractor={(item, index) => {
                            return index.toString();
                        }}
                    />
                </View>
            </SafeAreaView>
        </>
    )
}


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff'
    },
    constainer: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 10
    },
    serviceImage: { height: 100, width: 100, },
    titleText: {
        fontSize: 17,
        fontWeight: 'bold',
        marginVertical: 10
    },
    serviceView: {
        backgroundColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        margin: 5,
        flexDirection: 'row'
    },
    serviceText: {
        fontSize: 13,
        fontWeight: "700",
        marginLeft: 10,
        color: '#000'
    }
})




function mapStateToProps(state) {
    return {
        isLoading: state.service.isLoading,
        allServices: state.service.allServices,
        languages: state.service.languages
    }
}

export default connect(mapStateToProps, { services, languageApi, logOut })(ServiceScreen);