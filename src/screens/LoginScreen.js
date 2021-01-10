import React, { useState } from "react";
import {
    View, TextInput, Text, SafeAreaView, StyleSheet,
    TouchableWithoutFeedback, Keyboard, TouchableOpacity, StatusBar
} from "react-native";
import { connect } from "react-redux";
import { login } from "../redux/action/action-creater";
import qs from 'qs'
import Toast from 'react-native-simple-toast';
import { ActivityIndicator } from "react-native-paper";



const EMAIL_FORMAT = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



const LoginScreen = ({ navigation, login, userData, isLoading }) => {

    const [email, setEmail] = useState('');
    const [psd, setPsd] = useState('');

    const emailHandler = text => {
        setEmail(text)
    }

    const psdHandler = text => {
        setPsd(text)
    }

    // if user is alredy logged in then no need to login again it directly redirect to next page
    if (userData != "") {
        navigation.replace('Service');
    }


    // funciton on click on login button
    const onClickLogin = () => {
        if (email.trim() != "" && psd.trim() != "") {
            if (EMAIL_FORMAT.test(email)) {

                const loginData = {
                    email: email,
                    password: psd
                }
                login(qs.stringify(loginData))
                    .then((res) => {
                        console.log("LoginScreen Response ==>", res);
                        if (res.loginSuccess) {
                            // navigation.replace('Products');
                            if (res.data.message == "Login Success") {
                                Toast.show("Login Successfully");
                            }
                        } else {
                            alert(res.data.message);
                        }
                    })
            } else {
                alert("Please enter correct email.")
            }
        } else {
            alert("Please fill all the field!")
        }
    }

    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView style={styles.safeArea}>

                {/* This is for hide keyboard after click on screen */}
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={styles.mainContainer}>
                        <Text style={styles.titleText}>Login here,</Text>
                        <TextInput
                            placeholder={"Enter Email"}
                            style={styles.textInput}
                            value={email}
                            keyboardType="email-address"
                            onChangeText={emailHandler}
                        />
                        <TextInput
                            placeholder={"Enter Password"}
                            secureTextEntry={true}
                            style={styles.textInput}
                            email={psd}
                            onChangeText={psdHandler} />

                        <TouchableOpacity style={styles.btn}
                            onPress={() => {
                                onClickLogin();
                            }}
                            activeOpacity={0.7}>
                            {isLoading ?
                                <ActivityIndicator color="#fff"
                                    size="small" />
                                :
                                <Text style={{ color: '#fff', fontSize: 17 }}>Login</Text>
                            }
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </>
    )
}


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff'
    },
    mainContainer: {
        flex: 1, padding: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',

    }, textInput: {
        backgroundColor: '#fff', borderRadius: 5,
        borderColor: '#ccc',
        borderWidth: 1, margin: 5, height: 40, padding: 3
    }, btn: {
        backgroundColor: '#000', borderRadius: 5, justifyContent: 'center', alignItems: 'center', paddingVertical: 15, margin: 10
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 10
    }
})

function mapStateToProps(state) {
    return {
        isLoading: state.auth.isLoading,
        userData: state.auth.userData,
    }
}

export default connect(mapStateToProps, { login })(LoginScreen);