import { User } from '@/types/auth';

export interface EventsApi {
  code: number;
  status: string;
  data: Event[];
}

export interface Event {
  id: number;
  name: string;
  description: string;
  link_image: string;
  date: string;
  city: City;
  participant: number;
}

interface City {
  name: string;
}

export interface LeaderboardApi {
  code: number;
  status: string;
  data: Leader[];
}

interface Leader {
  id: number;
  name: string;
  email: string;
  point: number;
  link_avatar: string;
}

export interface AuthApi {
  code: number;
  status: string;
  data: User;
}

export interface PostApi {
  code: number;
  status: string;
  data: Post[];
}

interface Post {
  id: number;
  id_user: number;
  caption?: string;
  link_photo?: string;
  user: UserApi;
}

interface UserApi {
  id: number;
  name: string;
  email: string;
  point: number;
  link_avatar: string;
}
export interface MyEventsApi {
  code: number;
  status: string;
  data: MyEvent[];
}

interface MyEvent {
  city_name: string;
  caption: string;
  link_photo: string;
  event: Event;
  participant: number;
}
