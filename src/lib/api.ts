import { Product } from '@/data/products';

import { EventsApi } from '@/types/api';

export const parseEventsData = (data?: EventsApi): Product[] => {
  return (
    data?.data.map((d) => ({
      id: d.id,
      name: d.name,
      description: d.description,
      href: `/event/${d.id}`,
      participants: d.participant + '',
      date: new Date(d.date),
      city: d.city.name,
      imageSrc:
        'https://res.cloudinary.com/theodorusclarence/image/upload/f_auto,c_fill,ar_5:3,w_1200/v1637384615/seasforus/max-PqoCWV93yps-unsplash_asxwzj.jpg',
      imageAlt: `Picture of ${d.name}`,
    })) ?? []
  );
};
