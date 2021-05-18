import React from 'react';
import {Text, Image, View} from 'react-native';
import styles from './styles';
import {Song} from "../../types"
import {AntDesign, FontAwesome} from "@expo/vector-icons"

const song= {
    id: '1',
    imageUrl: 'https://pbs.twimg.com/profile_images/985969700093022209/oW_Yg9H3.jpg',
    title: 'All for you',
    artist: 'Hellem'
}
const PlayerWidget = () =>{ 
    return(
        <View style={styles.container}>
            {/* Image COver */}
            <Image source={{uri: song.imageUrl}} style={styles.image} />

            <View style={styles.rightContainer}>
                <View style={styles.nameContainer}>
                    {/* title */}
                    <Text style={styles.title}>{song.title} </Text>
                    {/* Artist */}
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>
                <View style={styles.iconsContainer}>
                    {/* like button */}
                    <AntDesign name="hearto" size={30} color={'white'}/>
                    {/* play button */}
                    <FontAwesome name="play" size={30} color={'white'}/>
                </View>
            </View>
        </View>
    )
}
export default PlayerWidget;