import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[App]Login',
  props<{
    authUser: {
      uid: string;
      displayName: string;
      email: string;
      phoneNumber?: string;
      photoURL?: string;
    };
  }>(),
);

export const logout = createAction('[App]Logout');
