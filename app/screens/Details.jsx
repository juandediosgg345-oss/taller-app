import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Details = () => {
    const navegation = useNavigation();

    const handleGoToBack=()=>{
        navegation.navigate('Home')
    }

    return(
        <View style={styles.container}>
            <Text>Details</Text>
            <Button title="Go to Home" onPress={handleGoToBack}/>
        </View>
    )
}
export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});