import React, {Component} from 'react';
import {Button,Input,Card,CardSection, Spinner} from '../components';
import {View,StyleSheet, Text} from 'react-native';

// Redux
import {connect} from 'react-redux';
import {emailChanged,passwordChanged,loginUser} from '../redux/actions';

class LoginScreen extends Component {

    state= {
        email: '',
        password: ''
    }

    onEmailChange = (text) => {
         this.props.emailChanged(text)
    }

    onPasswordChange = (text) => {
         this.props.passwordChanged(text);
    }

    onButtonPress = () => {
         const { email, password } = this.props;
         console.log(this.props)
         this.props.loginUser(this.props);
    }

    renderButton = () => {
        if (this.props.isLoading) {
            return <Spinner size='large' />
        }
        return (
            <Button onPress={this.onButtonPress}>
                Login
            </Button>
        );
    }

    renderError = () => {
        const { errorTextStyle } = styles;
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }


    render() {
        const {email,password} = this.props;
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange}
                        value={email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Password"
                        placeholder="password"
                        secureTextEntry
                        onChangeText={this.onPasswordChange}
                        value={password}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>

                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
});

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        isLoading: state.auth.isLoading
    }
}

export default connect(mapStateToProps,{emailChanged,passwordChanged,loginUser}) (LoginScreen);