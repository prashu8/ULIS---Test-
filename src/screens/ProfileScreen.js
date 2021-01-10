import React from "react";
import { View, Text, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { logOut } from "../redux/action/action-creater";
import { AuthContext } from '../context/index';


const ProfileScreen = ({ navigation, userData, logOut }) => {

    const { signOut } = React.useContext(AuthContext);


    // funciton call after click on logout button
    const onClickLogout = () => {
        logOut()
            .then((res) => {
                console.log("res", res);
            })
        signOut();
    }


    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.constainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.titleText}>Profile Details</Text>
                        <TouchableOpacity onPress={() => {
                            onClickLogout();
                        }}>
                            <Text style={styles.titleText}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={styles.subText}>User Token : {userData.token}</Text>
                        <Text style={styles.subText}>User Customer ID : {userData.customer_id}</Text>
                        <Text style={styles.subText}>User cid : {userData.cid}</Text>
                        <Text style={styles.subText}>User Code : {userData.code}</Text>
                    </View>
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
    titleText: {
        fontSize: 17,
        fontWeight: 'bold',
        marginVertical: 10
    },
    subText:
        { fontSize: 13, marginTop: 5 }

})


function mapStateToProps(state) {
    return {
        userData: state.auth.userData,
    }
}



export default connect(mapStateToProps, { logOut })(ProfileScreen);