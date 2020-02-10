export interface AuthState {
  authUser?: {
    uid: string;
    displayName: string;
    email: string;
    phoneNumber?: string;
    photoURL?: string;
  };
}

export const initialState: AuthState = {
  authUser: null,
};

export const selectAuthUser = ({ auth }: { auth: AuthState }) => auth.authUser;
