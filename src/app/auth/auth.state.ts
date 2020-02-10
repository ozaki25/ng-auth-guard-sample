export interface AuthState {
  isLoggedIn: boolean;
}

export const initialState: AuthState = {
  isLoggedIn: false,
};

export const selectIsLoggedIn = ({ auth }: { auth: AuthState }) =>
  auth.isLoggedIn;
