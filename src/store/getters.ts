import { Item, ListItem, UserItem } from "@/api";
import { RootState } from "./state";

export const getters = {
  fetchedItem(state: RootState): Item {
    return state.item;
  },
  fetchedUser(state: RootState): UserItem {
    return state.user;
  },
  fetchedList(state: RootState): ListItem[] {
    return state.list;
  },
  // ItemView
  userName(state: RootState): string {
    return state.item.user;
  },
  userContent(state: RootState): string {
    return state.item.content;
  },
  userQuestion(state: RootState): string {
    return state.item.title;
  },
  userTimeAgo(state: RootState): string {
    return state.item.time_ago;
  },
  // contentPoints(state: RootState): number {
  //   return state.item.points;
  // },
};

export type Getters = typeof getters;
