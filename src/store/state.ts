import {
  AskItem,
  Item,
  JobsItem,
  ListItem,
  NewsItem,
  UserItem,
} from "@/api";

export const state = {
  news: [] as NewsItem[],
  ask: [] as AskItem[],
  jobs: [] as JobsItem[],
  user: {} as UserItem,
  item: {} as Item,
  list: [] as ListItem[],
};

export type RootState = typeof state;
