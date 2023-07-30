import { getFeedResponseInterface } from './getFeedResponse.interface';

export interface FeedStoreInterface {
  isLoading: boolean;
  error: string | null;
  data: getFeedResponseInterface | null;
}
