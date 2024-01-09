import { BackEndErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { UserProfileInterface } from './userProfile.interface';

export interface UserProfileStateInterface {
  data: UserProfileInterface | null;
  isLoading: boolean;
  error: BackEndErrorsInterface | null;
}
