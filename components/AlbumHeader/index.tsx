import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Albumformat} from '../../types';
import styles from './styles';

export type AlbumHeaderProps = {
    album: Albumformat;

}

const AlbumHeader = (props: AlbumHeaderProps) => {
    const {album} = props;
    return (
        <View style={styles.container} >
            {/* cover image */}
            <Image source={{ uri: album.imageUrl }} style={styles.image}/>
            {/* name */}
            <Text style={styles.name}>{album.name}</Text>
            {/* creator     Number of Likes */}
            <View style={styles.creatorContainer}>
                <Text style={styles.creator}>By {album.by}</Text>
                <Text style={styles.likes}>{album.numberOfLikes} Likes</Text>
            </View>
            {/* play button */}
            <TouchableOpacity>
                    <View style={styles.button}>
                    <Text style={styles.buttonText}>PLAY</Text>
                    </View>
            </TouchableOpacity>

        </View>
    )
}
export default AlbumHeader;