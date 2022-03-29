import axios, { AxiosPromise } from "axios";

const api = {
  news: "https://api.hnpwa.com/v0/news/1.json",
  ask: "https://api.hnpwa.com/v0/ask/1.json",
  jobs: "https://api.hnpwa.com/v0/jobs/1.json",
  user: "https://api.hnpwa.com/v0/user/",
  item: "https://api.hnpwa.com/v0/item/",
};

export interface NewsItem {
  comments_count: number;
  domain: string;
  id: number;
  points: number;
  time: number;
  time_ago: string;
  title: string;
  type: string;
  url: string;
  user: string;
}

export interface AskItem {
  comments_count: number;
  id: number;
  points: number;
  time: number;
  time_ago: string;
  title: string;
  type: string;
  url: string;
  user: string;
}

export interface JobsItem {
  comments_count: number;
  domain: string;
  id: number;
  time: number;
  time_ago: string;
  title: string;
  type: string;
  url: string;
}

export interface UserItem {
  created: string;
  created_time: number;
  id: string;
  karma: number;
}

export interface Item {
  comments: [];
  comments_count: number;
  content: string;
  id: number;
  points: number;
  time: number;
  time_ago: string;
  title: string;
  type: string;
  url: string;
  user: string;
}

export interface ListItem {
  comments_count: number;
  id: number;
  time: number;
  time_ago: string;
  title: string;
  type: string;
  url: string;
  domain?: string;
  points?: number;
  user?: string;
}

function fetchNews(): AxiosPromise<NewsItem[]> {
  return axios.get(api.news);
}

function fetchAsk(): AxiosPromise<AskItem[]> {
  return axios.get(api.ask);
}

function fetchJobs(): AxiosPromise<JobsItem[]> {
  return axios.get(api.jobs);
}

function fetchUser(id: string): AxiosPromise<UserItem> {
  const url = `${api.user}${id}.json`;
  return axios.get(url);
}

function fetchItem(id: string): AxiosPromise<Item> {
  const url = `${api.item}${id}.json`;
  return axios.get(url);
}

function fetchList(type: string): AxiosPromise<ListItem[]> {
  const url = `https://api.hnpwa.com/v0/${type}/1.json`;
  return axios.get(url);
}

export { fetchNews, fetchAsk, fetchJobs, fetchUser, fetchItem, fetchList };
