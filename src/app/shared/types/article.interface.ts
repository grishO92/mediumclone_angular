import { PopularTagType } from './popularTag.type';
import { ProfileInterface } from './profile.interface';

export interface articleInterface {
  body: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: PopularTagType[];
  title: string;
  updatedAt: string;
  author: ProfileInterface;
}
