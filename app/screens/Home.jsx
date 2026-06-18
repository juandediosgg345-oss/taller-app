import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Home = () => {
    const navegation = useNavigation();

    const handleGoToDetails = () => {
        navegation.navigate('Details');
    }

    return(
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title="Go to Details" onPress={handleGoToDetails}/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});