import React from 'react'
import {
    ScrollView, View, Button, StyleSheet, Image,
    ImageBackground, Dimensions, Text, TouchableOpacity
} from 'react-native'
import QRCode from 'react-native-qrcode-svg';
import Carousel from 'react-native-banner-carousel';

const { height, width } = Dimensions.get('screen')

class Home extends React.Component {
    render() {
        const { navigation } = this.props
        return (
            <View>
                <Image source={require('../../../assets/logo_technopartner.png')} style={{ width: 150, height: 50 }} />
                <ScrollView>
                    <ImageBackground source={require('../../../assets/motif.png')} style={{ width: width, height: (height * 0.3) }}>
                        <View style={{ margin: '5%' }}>
                            <View style={[styles.border, { backgroundColor: 'white', height: '100%', width: '100%' }]}>
                                <View style={{ padding: '5%', height: '100%' }}>
                                    <View style={{ height: '50%' }}>
                                        <Text>Good Afternoon,</Text>
                                        <Text style={{ fontWeight: 'bold' }}>Guntur Saputro</Text>
                                    </View>
                                    <View style={{ height: '50%', width: '100%', flexDirection: 'row' }}>
                                        <View style={{ height: '100%', width: '25%', paddingRight: '3%' }}>
                                            <TouchableOpacity onPress={() => navigation.push('QRCode')}>
                                                <View style={[styles.borderOval, { height: '100%', width: '100%', backgroundColor: 'white', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }]}>
                                                    <QRCode
                                                        value="http://google.com"
                                                        size={35}
                                                    />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ height: '100%', width: '10%', justifyContent: 'center', alignItems: 'center' }}>
                                            <View style={{ height: '80%', width: 2, backgroundColor: 'rgba(221,221,221, .8)' }}></View>
                                        </View>
                                        <View style={{ height: '100%', width: '65%' }}>
                                            <View style={{ height: '50%', width: '100%', flexDirection: 'row' }}>
                                                <Text style={{ width: '40%' }}>Saldo</Text>
                                                <Text style={{ width: '60%', textAlign: 'right', fontWeight: 'bold' }}>Rp 279.000</Text>
                                            </View>
                                            <View style={{ height: '50%', width: '100%', flexDirection: 'row' }}>
                                                <Text style={{ width: '40%' }}>Points</Text>
                                                <Text style={{ width: '60%', textAlign: 'right', fontWeight: 'bold', color: 'grey' }}>2500</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>

                    <Carousel
                        autoplay
                        autoplayTimeout={2000}
                        loop
                        index={0}
                        pageSize={width}
                    >
                        <Image source={require('../../../assets/logo_technopartner.png')} style={{ width: width, height: 200 }} />
                        <Image source={require('../../../assets/logo_technopartner.png')} style={{ width: width, height: 200 }} />
                        <Image source={require('../../../assets/logo_technopartner.png')} style={{ width: width, height: 200 }} />
                        <Image source={require('../../../assets/logo_technopartner.png')} style={{ width: width, height: 200 }} />
                    </Carousel>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    },
    button: {
        width: '100%',
        marginVertical: 5
    },
    border: {
        shadowColor: 'black', shadowOffset: { width: 0, height: 5 },
        borderRightWidth: 5, borderColor: 'rgba(221,221,221, .5)', borderBottomWidth: 5,
        borderRadius: 10
    },
    borderOval: {
        shadowColor: 'black', shadowOffset: { width: 0, height: 5 },
        borderRightWidth: 3, borderColor: 'rgba(221,221,221, .5)', borderBottomWidth: 3,
        borderLeftWidth: 1, borderTopWidth: 0, borderRadius: 10
    },
})

export default Home