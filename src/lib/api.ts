import { Product } from '@/data/products';

import { EventsApi, MyEventsApi } from '@/types/api';

export const parseEventsData = (data?: EventsApi): Product[] => {
  return (
    data?.data.map((d) => {
      const date = new Date(d.date);
      const day = date.getDate();

      return {
        id: d.id,
        name: d.name,
        description: d.description,
        href: `/event/${d.id}`,
        participants: day * 9 + d.participant + '',
        date: new Date(d.date),
        city: d.city.name,
        imageSrc: d.link_image,
        imageAlt: `Picture of ${d.name}`,
      };
    }) ?? []
  );
};

export const parseMyEventsData = (data?: MyEventsApi): Product[] => {
  return (
    data?.data.map((d) => {
      const date = new Date(d.event.date);
      const day = date.getDate();

      return {
        id: d.event.id,
        name: d.event.name,
        description: d.event.description,
        href: `/event/${d.event.id}`,
        participants: day * 9 + d.participant + '',
        date: new Date(d.event.date),
        city: d.city_name,
        imageSrc: d.event.link_image,
        imageAlt: `Picture of ${d.event.name}`,
      };
    }) ?? []
  );
};
