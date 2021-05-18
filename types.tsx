/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
  AlbumScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

// export type Albumformat = {
//     id: string;
//     imageUrl: string;
//     artistHeadline: string;
// };
export type Albumformat = {
  id: string;
  name: string;
  by: string;
  numberOfLikes: number;
  artistsHeadline: string;
  imageUrl: string;
  songs: array;
};


export type Song = {
  id: string;
  imageUrl: string;
  title: string;
  artist: string;
  
}

