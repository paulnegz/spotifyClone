import React, {useEffect, useState} from 'react';
import {Text, Image, View, ViewBase} from 'react-native';
import styles from './styles';
import {Song} from "../../types"
import {AntDesign, FontAwesome} from "@expo/vector-icons"
import {Sound} from "expo-av/build/Audio/Sound";
import { TouchableOpacity } from 'react-native-gesture-handler';

const song= {
    id: '1',
    url: 'https://app.novoic.com/media/audio/The_Painters.mp3',
    imageUrl: 'https://pbs.twimg.com/profile_images/985969700093022209/oW_Yg9H3.jpg',
    title: 'Peaches',
    artist: 'Justin Beiber',
    isLiked: false,
}


const PlayerWidget = () =>{ 
    const [sound, setSound] = useState<Sound|null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [duration, setDuration] = useState<number|null>(null);
    const [position, setPosition] = useState<number|null>(null);
    const [isLiked, setIsLiked] = useState<boolean>(false); 

    const onPlaybackStatusUpdate = (status: any) => {
        setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
        console.log(status);
    }

    const playCurrentSong = async () => {
        if (sound) {
        await sound.unloadAsync();
        }

        const { sound: newSound } = await Sound.createAsync(
        { uri: song.url },
        { shouldPlay: isPlaying },
        onPlaybackStatusUpdate
        )

        setSound(newSound)
    }

    useEffect(() => {
        // effect
        // console.log("PAFE LOADED")
        playCurrentSong();
        setIsLiked(song.isLiked);
        return sound
         ? () => {
            // cleanup
            sound.unloadAsync();
        }: undefined;
    }, [song])

    const onPlayPausePress = async () => {
        // console.log("in function");
        if (!sound){
            return;
        }
        if (isPlaying){
            await sound.stopAsync();
        } else {
            await sound.playAsync();
        }

    }
    const changeIsLiked =  () => {
        setIsLiked(!isLiked);

    }
    
    const getProgress = () =>{
        if(sound === null || duration === null || position === null){
            return 0;
        }
        else {
            return (position/duration) *100;
        }
    }

    return(
        <View style={styles.container}>
            <View style={[styles.progress, { width: `${getProgress()}%`}]}>
            </View>
            <View style={styles.row}> 
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
                        <TouchableOpacity onPress={changeIsLiked}>
                            <AntDesign name={isLiked? "heart" : "hearto"} size={30} color={isLiked? 'red' : 'white'}/>
                        </TouchableOpacity>
                        {/* play button */}
                        <TouchableOpacity onPress={onPlayPausePress}>
                            <FontAwesome name={isPlaying ? "pause" : "play"} size={30} color={'white'}/>
                        </TouchableOpacity>   
                    </View>
                </View>
            </View>
        </View>
    )
}
export default PlayerWidget;