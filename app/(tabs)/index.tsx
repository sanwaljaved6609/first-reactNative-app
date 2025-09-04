import { Text, View, StyleSheet } from "react-native";


export default function Index() {
  return (
    <View
      style={styles.view}
    >
      <Text>Hello !</Text>
    </View>
  );
}




const styles = StyleSheet.create({
  view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },

  loginbtn:{
    width:120,
    height:30,
    backgroundColor:"skyblue",
    borderRadius:10,
    textAlign:"center"
  }
})
