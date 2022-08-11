import { Button, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationProp } from "@react-navigation/native";

type Props = {
    navigation: NavigationProp<any, any>;
}

const Dashboard = (props: Props) => {
    const { navigation } = props;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Dashboard page</Text>
            <Button
                title="Logout"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    );
}

export default Dashboard;