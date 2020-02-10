import { createReducer, on, Action } from '@ngrx/store';
import { initialState, AuthState } from './auth.state';
import { login, logout } from './auth.actions';

const reducer = createReducer(
  initialState,
  on(login, (state, { authUser }) => ({ ...state, authUser })),
  on(logout, state => ({ ...state, authUser: null })),
);

export function authReducer(state: AuthState, action: Action) {
  return reducer(state, action);
}
