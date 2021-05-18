import React, {useEffect} from 'react';
import {View, Text, ViewBase, FlatList } from 'react-native';
import {useRoute} from '@react-navigation/native';

import AlbumHeader from '../components/AlbumHeader'
import albumDetails from './data/albumDetails';
import SongListItem from '../components/SongListItem'




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
                ListHeaderComponent={ ()=> <AlbumHeader album={albumDetails} /> }
                data={albumDetails.songs}
                renderItem= {({item})=> <SongListItem song={item}/> }
                keyExtractor = {(item) => item.id}
            />
        </View>
    )

}


export default AlbumScreen;