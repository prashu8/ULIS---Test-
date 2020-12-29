import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList, Image } from 'react-native';
import { getProducts } from "../redux/action/action-creater";
import { connect } from "react-redux";
import Ionicons from 'react-native-vector-icons/Ionicons';


const ProductScreen = ({ navigation, getProducts, isLoading, productList }) => {

    useEffect(() => {
        products();
        setHeaders();
    }, [])


    const setHeaders = () => {
        navigation.setOptions({
            headerTitleAlign: 'center',
            headerTitle: 'Products'

        })
    }


    const products = () => {
        getProducts()
            .then((res) => {
                // console.log("Product details for screen", res);
            })
    }
    // console.log("productList", productList);

    return (
        <>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.mainContainer}>
                    {/* <Text style={styles.tileText}>Products</Text> */}

                    {/* <Icon name="car-sport-outline" size={50} color="#000" /> */}

                    <FlatList
                        data={productList}
                        renderItem={({ item, index }) => {
                            return (
                                <>
                                    <View style={styles.views}>
                                        <View style={styles.subView}>
                                            {item.image != "" ?
                                                <Image source={{ uri: item.image }}
                                                    resizeMode="contain"
                                                    style={styles.image} />
                                                :
                                                <Ionicons name="image" size={20} color="grey" />
                                            }
                                            <View style={{ marginLeft: 5, justifyContent: 'space-around' }}>
                                                <Text style={styles.product_name}>{item.product_name}</Text>
                                                <Text>₹ {item.mrp}</Text>
                                                <Text>Unit {item.unit}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </>
                            )
                        }
                        }
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
    mainContainer: {
        flex: 1, padding: 10,
        backgroundColor: '#f0f0f0'
    },
    tileText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    image: { width: 100, height: 100 },
    subView: {
        flexDirection: 'row'
    },
    product_name: { width: '55%', fontWeight: 'bold' },
    views: {
        padding: 7, margin: 5, backgroundColor: '#fff', borderRadius: 5
    }
})

function mapStateToProps(state) {
    return {
        isLoading: state.product.isLoading,
        productList: state.product.productList
    }
}

export default connect(mapStateToProps, { getProducts })(ProductScreen);