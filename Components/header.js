
import { StyleSheet, Text, View } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.header}>
        <Text style={styles.heading}>Shopping-List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor:"dodgerblue",
    height:70,
    alignItems:"center",
    justifyContent:"center"
  },
  heading:{
    color:"white",
    fontSize:30,
    fontWeight:"bold"
  }
});
