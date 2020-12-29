import React from "react";
import { SafeAreaView, Text, View, StyleSheet, TextInput, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";





const LoginScreen = ({ navigation }) => {

    return (
        <>
            <SafeAreaView style={styles.safeArea}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.mainContainer}>
                        <Text style={styles.title}>Login Here,</Text>
                        <TextInput
                            placeholder="Email"
                            style={styles.textinput} />
                        <TextInput
                            secureTextEntry={true}
                            placeholder="Password"
                            style={{ ...styles.textinput, marginTop: 20 }} />
                        <TouchableOpacity style={styles.btn} onPress={() => {
                            navigation.replace('Products');
                        }}>
                            <Text style={{ color: '#fff', fontSize: 15 }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
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
        padding: 10,
        flex: 1,
        backgroundColor: '#f0f0f0', justifyContent: 'center'
    },
    textinput: { backgroundColor: '#fff', height: 40, borderRadius: 5, padding: 3, borderColor: '#ccc', borderWidth: 1 },
    btn: {
        backgroundColor: '#000', alignItems: 'center', justifyContent: 'center', padding: 10,
        marginVertical: 20, borderRadius: 5
    }, title: {
        marginVertical: 10, fontSize: 22,
        fontWeight: 'bold'
    }
})


export default LoginScreen;