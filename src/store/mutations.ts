import { NewsItem } from "@/api";
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
  [MutationTypes.SET_ASK](state: RootState, ask: any[]) {
    state.ask = ask;
  },
  [MutationTypes.SET_JOBS](state: RootState, jobs) {
    state.jobs = jobs;
  },
  [MutationTypes.SET_USER](state: RootState, user) {
    state.user = user;
  },
  [MutationTypes.SET_ITEM](state: RootState, item) {
    state.item = item;
  },
  [MutationTypes.SET_LIST](state: RootState, list) {
    state.list = list;
  },
};

export type Mutations = typeof mutations;
