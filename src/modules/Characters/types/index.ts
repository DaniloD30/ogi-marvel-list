export type Data = {
  total: number;
  results: Characters[];
};

export type Characters = {
  thumbnail: {
    path: string;
    extension: string;
  };
  series: {
    items: Array<{
      name: string;
    }>;
  };
  name: string;
  id: string;
  events: {
    items: Array<{
      name: string;
    }>;
  };
};
