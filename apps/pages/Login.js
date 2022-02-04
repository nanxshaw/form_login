import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import Toast from 'react-native-easy-toast';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { ADD_TOKEN } from '../redux/actions/action';
import ApiPost from '../rest/restApi';
import styles from '../style/styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      media_sosial: [
        require('../../assets/social/google.png'),
        require('../../assets/social/facebook.png'),
        require('../../assets/social/apple-logo.png'),
      ],
      username: null,
      password: null,
      show_password: false,
      isLoading: false
    };
  }

  onLogin = () => {
    const { username, password } = this.state;
    this.setState({ isLoading: true })
    if (username != null && username != '') {
      if (password != null && password != '') {
        let data = {
          username: username,
          password: password
        }
        ApiPost(data).then((res) => {
          if (res.status == 200) {
            this.props.add_token(res.data.access_token);
            this.setState({ isLoading: false })
            this.props.navigation.replace('Home')
          } else {
            this.setState({ isLoading: false })
            this.toast.show(res.message)
          }
        })
      } else {
        this.setState({ isLoading: false })
        this.toast.show('Password anda kosong')
      }
    } else {
      this.setState({ isLoading: false })
      this.toast.show('Username anda kosong')
    }
  }

  render() {
    const { username, password, media_sosial, show_password, isLoading } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity activeOpacity={.7} onPress={() => this.props.navigation.pop()} style={styles.fab_btn_back}>
            <Icon name="chevron-left" type="font-awesome" size={15} color="#9b9aa2" />
          </TouchableOpacity>
          <View style={styles.head2} />
          <View style={styles.fab_btn_en}>
            <Text style={styles.tx_head}>EN</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.title_welcome}>Welcome</Text>
          <Text style={styles.tx_gray}>Sign to continue and manage all you need</Text>
          <View style={styles.form_in}>
            <Text style={styles.tx_in}>Username</Text>
            <TextInput
              placeholder="Enter your username"
              style={styles.in}
              autoCapitalize='none'
              onChangeText={(username) => this.setState({ username })}
              value={username}
            />
          </View>
          <View style={styles.form_in}>
            <Text style={styles.tx_in}>Password</Text>
            <View style={styles.in}>
              <TextInput
                placeholder="Enter your password"
                style={{ width: "90%" }}
                secureTextEntry={!show_password}
                onChangeText={(password) => this.setState({ password })}
                value={password}
              />
              <TouchableOpacity onPress={() => this.setState({ show_password: !show_password })} activeOpacity={.7} style={{ width: '10%' }}>
                <Icon
                  name={show_password == true ? "eye" : "eye-slash"}
                  type="font-awesome"
                  size={18}
                  color="#000"
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.tx_forget}>Forget Password</Text>
        </View>
        <TouchableOpacity
          onPress={() => this.onLogin()}
          activeOpacity={.7}
          style={styles.btn_primary_full}>
          {
            isLoading == true ?
              <View style={{ flexDirection: 'row' }}>
                <ActivityIndicator small color="#FFF" />
                <Text style={styles.tx_btn_primary}> Loading..</Text>
              </View>
              :
              <Text style={styles.tx_btn_primary}>Log in</Text>
          }
        </TouchableOpacity>
        <View style={styles.footer_login}>
          <Text style={styles.tx_fot_login}>Continue width</Text>
          <View style={styles.row_social}>
            {
              media_sosial.map((key, i) => (
                <View key={i} style={styles.bg_icon_social}>
                  <Image
                    style={styles.img_social}
                    source={key}
                    resizeMethod="resize"
                    resizeMode="contain"
                  />
                </View>
              ))
            }
          </View>
          <Text style={styles.tx_fot_login}>Not a member ?<Text style={{ color: "#1571dd" }}>Register Now</Text></Text>
        </View>
        <Toast
          ref={(toast) => this.toast = toast}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
})

const mapDispatchToProps = (dispatch) => ({
  add_token: (body) => {
    dispatch(ADD_TOKEN(body))
  }
})

const connectComponent = connect(mapStateToProps, mapDispatchToProps)
export default connectComponent(Login);
