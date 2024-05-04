
import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export const AddShoppingList = ({additem}) => {
    const [item,setItem] = useState('') 
    const press = ()=> {
        additem(item)
        setItem('')
    }
    // console.log(item);
  return (
    <View style={styles.container}>
       <TextInput style={styles.textinput} placeholder='Enter the Item' value={item} onChangeText={(text)=> setItem(text)}/>
       <Button title='Add Item' color="blue" onPress={()=> press(item)}/>
    </View>
  );
}

const styles = StyleSheet.create({
textinput:{
    borderBottomWidth:1,
    borderBottomColor:'lightgray',
    marginVertical:20,
    textAlign:'center'
},
container: {
    marginHorizontal:50,
}
});
