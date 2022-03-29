import { AskItem, Item, JobsItem, ListItem, NewsItem, UserItem } from "@/api";
import { RootState } from "./state";

export enum MutationTypes {
  SET_NEWS = "SET_NEWS",
  SET_ASK = "SET_ASK",
  SET_JOBS = "SET_JOBS",
  SET_USER = "SET_USER",
  SET_ITEM = "SET_ITEM",
  SET_LIST = "SET_LIST",
}

export const mutations = {
  [MutationTypes.SET_NEWS](state: RootState, news: NewsItem[]): void {
    state.news = news;
  },
  [MutationTypes.SET_ASK](state: RootState, ask: AskItem[]): void {
    state.ask = ask;
  },
  [MutationTypes.SET_JOBS](state: RootState, jobs: JobsItem[]): void {
    state.jobs = jobs;
  },
  [MutationTypes.SET_USER](state: RootState, user: UserItem): void {
    state.user = user;
  },
  [MutationTypes.SET_ITEM](state: RootState, item: Item): void {
    state.item = item;
  },
  [MutationTypes.SET_LIST](state: RootState, list: ListItem[]): void {
    state.list = list;
  },
};

export type Mutations = typeof mutations;
