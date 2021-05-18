import React from 'react';
import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,

    },
    image: {
        width: 200,
        height: 200,
        margin: 15,

    }, 
    name:{
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',

    } ,
    button:{
        backgroundColor: '#1CD05D',
        borderRadius: 50,
        height: 60,
        width: 150, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    creatorContainer:{
        flexDirection: 'row',
        margin: 10,

    },
    creator:{
        color: 'lightgray',
        margin: 5,
        fontSize: 20,
    },
    likes:{
        color: 'lightgray',
        margin: 5,
        fontSize: 20,
    },

});
export default styles;