import { ArticleInterface } from 'src/app/shared/types/article.interface';

export interface getFeedResponseInterface {
  articles: ArticleInterface[];
  articlesCount: number;
}
