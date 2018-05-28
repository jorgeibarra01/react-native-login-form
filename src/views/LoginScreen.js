import React, {Component} from 'react';
import {Button,Input,Card,CardSection} from '../components';
import {View,StyleSheet, Text} from 'react-native';

class LoginScreen extends Component {

    state= {
        email: '',
        password: ''
    }

    onEmailChange = (text) => {
        // this.props.emailChanged(text)
    }

    onPasswordChange = (text) => {
        // this.props.passwordChanged(text);
    }

    onButtonPress = () => {
        // const { email, password } = this.props;
        // this.props.loginUser({ email, password });
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
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange}
                        value={this.state.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Password"
                        placeholder="password"
                        secureTextEntry
                        onChangeText={this.onPasswordChange}
                        value={this.state.password}
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



export default LoginScreen;