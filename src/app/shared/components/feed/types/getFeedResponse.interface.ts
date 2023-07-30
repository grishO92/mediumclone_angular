import { articleInterface } from 'src/app/shared/types/article.interface';

export interface getFeedResponseInterface {
  articles: articleInterface[];
  articlesCount: number;
}
