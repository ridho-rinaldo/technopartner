import React from 'react'
import {
    ScrollView, View, Text, StyleSheet, Dimensions,
    TouchableOpacity, FlatList, Image
} from 'react-native'

const { height, width } = Dimensions.get('window')

class Menu extends React.Component {

    render() {
        const { navigation } = this.props
        return (
            <View>
                <View style={{
                    height: 40, width: width, justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>MENU</Text>
                </View>
                <ScrollView horizontal>
                    <View style={{ height: 50, flexDirection: 'row' }}>
                        <TouchableOpacity style={[styles.tabBar, { borderBottomWidth: 2 }]}
                            onPress={() => this.refs._contentScroll.scrollTo({ x: 0, y: 0, animated: true })}>
                            <View style={styles.textTab}>
                                <Text>Seasonal Product</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.tabBar, { borderBottomWidth: 0 }]} // 212
                            onPress={() => this.refs._contentScroll.scrollTo({ x: 0, y: 122, animated: true })}>
                            <View style={styles.textTab}>
                                <Text>Best Seller</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.tabBar, { borderBottomWidth: 0 }]}
                            onPress={() => this.refs._contentScroll.scrollTo({ x: 0, y: (122 + 212), animated: true })}>
                            <View style={styles.textTab}>
                                <Text>Coffee</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.tabBar, { borderBottomWidth: 0 }]}
                            onPress={() => this.refs._contentScroll.scrollTo({ x: 0, y: (122 + 212 + 292), animated: true })}>
                            <View style={styles.textTab}>
                                <Text>Milkshake</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                <ScrollView ref='_contentScroll'>
                    <View style={{ backgroundColor: 'lightgrey', padding: 10 }}>
                        <Text>Seasonal Product</Text>
                    </View>
                    <FlatList
                        data={[{ title: '1' }]}
                        renderItem={({ item, index }) => (
                            <View key={index} style={{ height: 70, width: '100%', flexDirection: 'row', paddingHorizontal: '2%', marginVertical: '2%' }}>
                                <View style={{ height: '100%', width: '25%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../../assets/menu1.png')} style={{ height: 70, width: 70 }} />
                                </View>
                                <View style={{ height: '100%', width: '55%' }}>
                                    <Text style={{ fontWeight: 'bold' }}>Raisin Delight Frappe</Text>
                                    <Text numberOfLines={3}>a timeless classic. A sweet, creamy, rich, flavourful experience of vanilla cream and juicy ripe raisins with a hint of warmth</Text>
                                </View>
                                <View style={{ height: '100%', width: '20%' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'right' }}>50.000</Text>
                                </View>
                            </View>
                        )}
                    />

                    <View style={{ backgroundColor: 'lightgrey', padding: 10 }}>
                        <Text>Best Seller</Text>
                    </View>
                    <FlatList
                        data={[{ title: '1' }, { title: '2' }]}
                        renderItem={({ item, index }) => (
                            <View key={index} style={{ height: 70, width: '100%', flexDirection: 'row', paddingHorizontal: '2%', marginVertical: '2%' }}>
                                <View style={{ height: '100%', width: '25%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../../assets/menu1.png')} style={{ height: 70, width: 70 }} />
                                </View>
                                <View style={{ height: '100%', width: '55%' }}>
                                    <Text style={{ fontWeight: 'bold' }}>Raisin Delight Frappe</Text>
                                    <Text numberOfLines={3}>a timeless classic. A sweet, creamy, rich, flavourful experience of vanilla cream and juicy ripe raisins with a hint of warmth</Text>
                                </View>
                                <View style={{ height: '100%', width: '20%' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'right' }}>50.000</Text>
                                </View>
                            </View>
                        )}
                    />

                    <View style={{ backgroundColor: 'lightgrey', padding: 10 }}>
                        <Text>Coffee</Text>
                    </View>
                    <FlatList
                        data={[{ title: '1' }, { title: '2' }, { title: '3' }]}
                        renderItem={({ item, index }) => (
                            <View key={index} style={{ height: 70, width: '100%', flexDirection: 'row', paddingHorizontal: '2%', marginVertical: '2%' }}>
                                <View style={{ height: '100%', width: '25%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../../assets/menu1.png')} style={{ height: 70, width: 70 }} />
                                </View>
                                <View style={{ height: '100%', width: '55%' }}>
                                    <Text style={{ fontWeight: 'bold' }}>Raisin Delight Frappe</Text>
                                    <Text numberOfLines={3}>a timeless classic. A sweet, creamy, rich, flavourful experience of vanilla cream and juicy ripe raisins with a hint of warmth</Text>
                                </View>
                                <View style={{ height: '100%', width: '20%' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'right' }}>50.000</Text>
                                </View>
                            </View>
                        )}
                    />

                    <View style={{ backgroundColor: 'lightgrey', padding: 10 }}>
                        <Text>Milkshake</Text>
                    </View>
                    <FlatList
                        data={[{ title: '1' }, { title: '2' }, { title: '3' }]}
                        renderItem={({ item, index }) => (
                            <View key={index} style={{ height: 70, width: '100%', flexDirection: 'row', paddingHorizontal: '2%', marginVertical: '2%' }}>
                                <View style={{ height: '100%', width: '25%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../../assets/menu1.png')} style={{ height: 70, width: 70 }} />
                                </View>
                                <View style={{ height: '100%', width: '55%' }}>
                                    <Text style={{ fontWeight: 'bold' }}>Raisin Delight Frappe</Text>
                                    <Text numberOfLines={3}>a timeless classic. A sweet, creamy, rich, flavourful experience of vanilla cream and juicy ripe raisins with a hint of warmth</Text>
                                </View>
                                <View style={{ height: '100%', width: '20%' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'right' }}>50.000</Text>
                                </View>
                            </View>
                        )}
                    />
                    <View style={{ height: 100 }}></View>
                </ScrollView>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    tabBar: {
        justifyContent: 'center', alignItems: 'center'
    },
    textTab: {
        marginHorizontal: 10
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    },
    button: {
        width: '100%',
        marginVertical: 5
    }
})

export default Menu