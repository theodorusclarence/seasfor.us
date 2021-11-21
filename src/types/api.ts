export interface EventsApi {
  code: number;
  status: string;
  data: Event[];
}

export interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
  city: City;
  participant: number;
}

interface City {
  name: string;
}
