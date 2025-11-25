export type Resep = {
  id: number;
  slug: string;
  title: string;
  image: string;
  description: string;
  source: string;
};

export type ResepSearchResponse = {
  data: Resep[];
  current_page: number;
  last_page: number;
};
