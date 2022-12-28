export interface IBlog {
  id: string;
  title: string;
  subTitle?: string;
  content: string;
  createdDate: Date;
  coverImg: string;
  hashtags: Array<String>;
}

export interface IBlogList extends Array<IBlog> {}
