import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { BackEndErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { LoginRequestInterface } from '../types/loginRequest.interface';
import { CurrentUserRequestInterface } from 'src/app/shared/types/currentUserRequest.interface';

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: RegisterRequestInterface }>(),
    'Register Success': props<{ currentUser: CurrentUserInterface }>(),
    'Register Failure': props<{ errors: BackEndErrorsInterface }>(),

    Login: props<{ request: LoginRequestInterface }>(),
    'Login Success': props<{ currentUser: CurrentUserInterface }>(),
    'Login Failure': props<{ errors: BackEndErrorsInterface }>(),

    'Get current user': emptyProps(),
    'Get current user Success': props<{ currentUser: CurrentUserInterface }>(),
    'Get current user Failure': emptyProps(),

    'Update current user': props<{
      currentUserRequest: CurrentUserRequestInterface;
    }>(),
    'Update current user Success': props<{
      currentUser: CurrentUserInterface;
    }>(),
    'Update current user Failure': props<{ errors: BackEndErrorsInterface }>(),

    Logout: emptyProps(),
  },
});
