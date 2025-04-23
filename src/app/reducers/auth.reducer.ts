import { createReducer, on, Action  } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export interface AuthState {
  signedIn: boolean;
}

export const initialState: AuthState = {
  signedIn: false,
};

const _authReducer = createReducer(
  initialState,
  on(AuthActions.signIn, (state) => ({
    ...state,
    signedIn: true,
  })),
  on(AuthActions.signOut, (state) => ({
    ...state,
    signedIn: false,
  }))
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return _authReducer(state, action);
}
