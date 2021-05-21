import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        bottom: 48,
        backgroundColor: '#131313',
        width: '100%',
        borderWidth: 3,
        borderColor: 'black',
        

    },
    progress:{
        height: 3,
        // width: '100%',
        backgroundColor: '#bcbcbc',
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    title: {
        color: 'white',
        fontSize: 18,
        margin: 10,
        fontWeight: 'bold',
        
        
    }, 
    artist:{
        color: 'lightgray',
        fontSize: 18,
    },
    image:{
        width: 75,
        height: 75,
        marginRight: 10,

    },
    rightContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    }, 
    iconsContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-around',
        textAlign: 'right',
    },
    nameContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightconainer:{

    }

    
})

export default styles;