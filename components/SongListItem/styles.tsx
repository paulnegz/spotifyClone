import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 23,
        
        
    }, 
    artist:{
        color: 'lightgray',
        fontSize: 20,
    },
    image:{
        width: 75,
        height: 75,

    },
    container:{
        margin: 10,
        flexDirection: 'row'
    },
    rightContainer:{
        justifyContent: 'space-around',
        marginLeft: 10,

    }, 

    
})

export default styles;