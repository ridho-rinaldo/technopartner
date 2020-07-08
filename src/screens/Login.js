import React from 'react'
import {
    View, Text, StyleSheet, Image,
    TextInput, TouchableOpacity
} from 'react-native'


class Login extends React.Component {

    render() {
        const { navigation } = this.props
        return (
            <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                <Image source={require('../../assets/logo_technopartner.png')} style={{ width: '100%', height: 100 }} />

                <Text style={{ marginTop: '20%', color: 'grey' }}>Email</Text>
                <TextInput editable style={styles.textInput} />

                <Text style={{ marginTop: '3%', color: 'grey' }}>Password</Text>
                <TextInput editable secureTextEntry={true} style={styles.textInput} />

                <TouchableOpacity style={{ width: '65%', alignItems: 'center', marginTop: '5%' }}
                    onPress={() => navigation.push('HomeTab')}>
                    <View style={[styles.textInput, { width: '60%' }]}>
                        <Text style={{ fontWeight: 'bold', paddingVertical: 5, textAlign: 'center' }}>Login</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        width: '65%', shadowColor: 'black', shadowOffset: { width: 0, height: 5 },
        borderWidth: 2, borderColor: '#ddd', borderRadius: 10, paddingVertical: 3, paddingHorizontal: 10
    }
})
export default Login