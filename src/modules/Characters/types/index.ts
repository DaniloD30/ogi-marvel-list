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
  events: {
    items: Array<{
      name: string;
    }>;
  };
};
