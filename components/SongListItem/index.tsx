import React from 'react';
import {Text, Image, View} from 'react-native';
import styles from './styles';
import {Song} from "../../types"

export type SongListItemProps = {
        song: Song
} 

const SongListItem = (props: SongListItemProps) =>{ 
    const { song } = props;
    return(
        <View style={styles.container}>
            {/* Image COver */}
            <Image source={{uri: song.imageUrl}} style={styles.image} />
            <View  style={styles.rightContainer}>
                <Text style={styles.title}>{song.title}</Text>
                {/* Artist */}
                <Text style={styles.artist}>{song.artist}</Text>
            </View>
            {/* title */}


        </View>
    )
}
export default SongListItem;