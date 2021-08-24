/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { ImageSourcePropType } from "react-native";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Contacts:undefined;
  ChatRoom:undefined;
  Status:undefined;

};

export type BottomTabParamList = {
  CAMERA: undefined;
  CHATS: undefined;
  STATUS: undefined;
  CALLS: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
  
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
  Status:undefined;
};
export type ChatRoom = {
  id: String;
  users: User[];
  lastMessage: Message;
};
export type User = {
  id: String;
  name: String;
  imageUri: String;
  status: String;
};

export type Message = {
  id: String;
  content: string;
  createdAt: string;
  user: User;
};