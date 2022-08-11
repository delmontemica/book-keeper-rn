import { Button, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationProp } from "@react-navigation/native";

type Props = {
    navigation: NavigationProp<any, any>;
}

const Login = (props: Props) => {
    const { navigation } = props;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login page test</Text>
            <Button
                title="Login"
                onPress={() => navigation.navigate('Dashboard')}
            />
        </View>
    );
}

export default Login;