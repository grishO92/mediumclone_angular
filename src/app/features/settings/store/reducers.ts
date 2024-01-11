import { createFeature, createReducer, on } from '@ngrx/store';
import { SettingsTypeInterface } from '../types/settingsType.interface';
import { authActions } from 'src/app/features/auth/store/actions';
import { routerNavigatedAction } from '@ngrx/router-store';

const initialState: SettingsTypeInterface = {
  isSubmitting: false,
  validationErrors: null,
};

const settingsFeature = createFeature({
  name: 'settings',
  reducer: createReducer(
    initialState,
    on(authActions.updateCurrentUser, (state) => ({
      ...state,
    })),
    on(authActions.updateCurrentUserSuccess, (state) => ({
      ...state,
    })),
    on(authActions.updateCurrentUserFailure, (state, action) => ({
      ...state,
      validationErrors: action.errors,
    })),
    on(routerNavigatedAction, () => initialState)
  ),
});

export const {
  name: settingsFeatureKey,
  reducer: settingsReducer,
  selectValidationErrors,
  selectIsSubmitting,
} = settingsFeature;
