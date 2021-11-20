export type Product = {
  id: number;
  name: string;
  description: string;
  href: string;
  participants: string;
  date: Date;
  city: string;
  imageSrc: string;
  imageAlt: string;
};

export const products: Array<Product> = [
  {
    id: 1,
    name: 'Kuta Beach',
    description:
      'Kuta is a tourist area, southern Bali, Indonesia. Kuta beach is also known as Sunset Beach',
    href: '#',
    participants: '256',
    date: new Date(2021, 11, 21),
    city: 'Bali, Indonesia',
    imageSrc:
      'https://res.cloudinary.com/theodorusclarence/image/upload/f_auto,c_fill,ar_5:3,w_1200/v1637384615/seasforus/max-PqoCWV93yps-unsplash_asxwzj.jpg',
    imageAlt: 'Kuta Beach',
  },
  {
    id: 2,
    name: 'Anyer Beach',
    href: '#',
    participants: '32',
    description:
      'Look like a visionary CEO and wear the same black t-shirt every day.',
    date: new Date(2021, 11, 22),
    city: 'Banten, Indonesia',
    imageSrc:
      'https://res.cloudinary.com/theodorusclarence/image/upload/f_auto,c_fill,ar_5:3,w_1200/v1637384611/seasforus/rowan-heuvel-U6t80TWJ1DM-unsplash_oiwlnq.jpg',
    imageAlt: 'Anyer Beach',
  },
  {
    id: 3,
    name: 'Bikini Beach',
    href: '#',
    participants: '32',
    description:
      'Look like a visionary CEO and wear the same black t-shirt every day.',
    date: new Date(2021, 11, 22),
    city: 'Rasdhoo, Maldives',
    imageSrc:
      'https://res.cloudinary.com/theodorusclarence/image/upload/f_auto,c_fill,ar_5:3,w_1200/v1637384611/seasforus/sean-oulashin-KMn4VEeEPR8-unsplash_a3l3sn.jpg',
    imageAlt: 'Bikini Beach',
  },
  // More products...
];
