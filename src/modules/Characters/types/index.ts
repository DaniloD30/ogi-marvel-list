export type Data = {
  total: number;
  results: Characters[];
};
export type typesUrls = "detail" | "wiki" | "comiclink";

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
  urls: Array<{
    type: typesUrls;
    url: string;
  }>;
  name: string;
  id: string;
  events: {
    items: Array<{
      name: string;
    }>;
  };
};
