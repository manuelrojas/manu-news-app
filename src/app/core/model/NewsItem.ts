export type DotCmsResponse = {
  contentlets: NewsItem[];
};

export type NewsItem = {
  title: string;
  tags: string;
  teaser: string;
  image: string;
  identifier: string;
  hostName: string;
  publishDate: string;
  postingDate: string;
};



