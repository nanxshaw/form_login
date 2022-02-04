import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Toast from 'react-native-easy-toast';
import styles from '../style/styles';

class StartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.head} />
                    <View style={styles.fab_btn_en}>
                        <Text style={styles.tx_head}>EN</Text>
                    </View>
                </View>
                <View style={styles.bg_img_start}>
                    <Image
                        resizeMethod="resize"
                        resizeMode="contain"
                        source={require('../../assets/login-wallpaper.png')}
                        style={styles.img_start} />
                </View>
                <Text style={styles.title_start}>Make Yout Ideas</Text>
                <Text style={[styles.title_start, { marginBottom: 10 }]}>Come Alive</Text>
                <Text style={styles.subtitle_start}>Jon us to build your awesome idea, there will be</Text>
                <Text style={styles.subtitle_start}>more teams you can meet</Text>
                <View style={styles.footer_start}>
                    <TouchableOpacity
                        onPress={() => this.toast.show('Register belom tersedia')}
                        activeOpacity={.7}
                        style={styles.btn_out}>
                        <Text style={styles.tx_btn_out}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.push('Login')}
                        activeOpacity={.7}
                        style={styles.btn_primary}>
                        <Text style={styles.tx_btn_primary}>Log in</Text>
                    </TouchableOpacity>
                </View>
                <Toast
                    ref={(toast) => this.toast = toast}
                />
            </View>
        );
    }
}

export default StartPage;
