import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native'
import QR from 'react-native-qrcode-svg';

class QRCode extends React.Component {
    render() {
        const { navigation } = this.props
        return (
            <ScrollView>
                <TouchableOpacity onPress={() => navigation.push('Home')}>
                    <View style={{ margin: 15, flexDirection: 'row-reverse' }}>
                        <Image source={require('../../../assets/cross.png')} style={{ width: 15, height: 15 }} />
                    </View>
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ marginVertical: '10%' }}>Show the QR Code below to the cashier</Text>
                    <QR
                        value="http://google.com"
                        size={150}
                    />
                </View>
            </ScrollView>
        )
    }
}

export default QRCode