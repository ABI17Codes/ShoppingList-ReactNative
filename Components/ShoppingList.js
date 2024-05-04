import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export const ShoppingList = ({list,deleteitem}) => {
  return (
  <FlatList
     data={list}
     keyExtractor={(item) => item.id}
     ItemSeparatorComponent={()=>{
        return <View style={styles.separater}></View>
     }}
     renderItem={({item})=>{
    return (
        <TouchableOpacity onPress={()=> deleteitem(item)}>
          <View style={styles.container}>
              <Text style={styles.item}>{item.todo}</Text>
              <MaterialIcons name="delete" size={20} style={styles.icon}/>
            </View>
        {/* <Text style={styles.item}>{item.todo}</Text> */}
        </TouchableOpacity>
    )
  }}
  style={styles.flatlist}
  />
  );
}

const styles = StyleSheet.create({
    item:{
        fontWeight:"bold",
        padding:20,
        fontSize:20
    },
    separater:{
        height:1,
        backgroundColor:"black",
    },
    flatlist: {
        paddingTop: 20,
      },
      container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
      icon: {
        marginRight:20,
        color:"balck"
      }
});
