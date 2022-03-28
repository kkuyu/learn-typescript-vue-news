import { fetchAsk, fetchItem, fetchJobs, fetchList, fetchNews, fetchUser, NewsItem } from "@/api";
import { ActionContext } from "vuex";
import { Mutations, MutationTypes } from "./mutations";
import { RootState } from "./state";

export enum ActionTypes {
  FETCH_NEWS = "FETCH_NEWS",
  FETCH_ASK = "FETCH_ASK",
  FETCH_JOBS= "FETCH_JOBS",
  FETCH_USER = "FETCH_USER",
  FETCH_ITEM = "FETCH_ITEM",
  FETCH_LIST = "FETCH_LIST",
}

type MyActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<RootState, RootState>, "commit">;

export const actions = {
  async [ActionTypes.FETCH_NEWS](
    context: MyActionContext
  ) {
    const { data } = await fetchNews();
    context.commit(MutationTypes.SET_NEWS, data);
    return data;
  },
  async [ActionTypes.FETCH_ASK](
    context: MyActionContext
  ) {
    const { data } = await fetchAsk();
    context.commit(MutationTypes.SET_ASK, data);
    return data;
  },
  async [ActionTypes.FETCH_JOBS](
    context: MyActionContext
  ) {
    const { data } = await fetchJobs();
    context.commit(MutationTypes.SET_JOBS, data);
    return data;
  },
  async [ActionTypes.FETCH_USER](
    context: MyActionContext,
    userId: string,
  ) {
    const { data } = await fetchUser(userId);
    context.commit(MutationTypes.SET_USER, data);
    return data;
  },
  async [ActionTypes.FETCH_ITEM](
    context: MyActionContext,
    itemId: string,
  ) {
    const { data } = await fetchItem(itemId);
    context.commit(MutationTypes.SET_ITEM, data);
    return data;
  },
  async [ActionTypes.FETCH_LIST](
    context: MyActionContext,
    listType: string,
  ) {
    const { data } = await fetchList(listType);
    context.commit(MutationTypes.SET_LIST, data);
    return data;
  },
};

export type Actions = typeof actions;
