import React from 'react';
import { View, Image, Text, FlatList, ImagePropTypes } from 'react-native';
import styles from './styles';
import {Albumformat} from '../../types';
import Album from '../Album';

export type AlbumCategoryProps = {
    title: string,
    albums: [Albumformat]
}


const AlbumCategory = (props: AlbumCategoryProps) => (
    <View style={styles.container} >
        <Text style={styles.title}>{props.title}</Text>
        {/* display all album components */}
        <FlatList
            data={props.albums}
            renderItem = {({item})=> <Album album={item} />}
            keyExtractor = {(item)=> item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
        />



    </View>
)

export default AlbumCategory;