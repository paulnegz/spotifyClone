import React, {useEffect} from 'react';
import {View, Text, ViewBase, FlatList } from 'react-native';
import {useRoute} from '@react-navigation/native';
import albumDetails from './data/albumDetails';
import SongListItem from '../components/SongListItem/index'




const album =  albumDetails;

const AlbumScreen = ()=>{

    const route = useRoute();

    useEffect(() => {
        console.log(route);
        // return () => {
        //     // cleanup
        // }
    }, [])

    return(
        <View>
            <FlatList
                data={albumDetails.songs}
                renderItem= {({item})=> <SongListItem song={item}/> }
                keyExtractor = {(item) => item.id}
            />
        </View>
    )

}


export default AlbumScreen;