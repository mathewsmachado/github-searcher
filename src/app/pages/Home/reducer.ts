import { Nullable } from 'types';
import { User } from 'core/entities';

export type HomeState = {
  users: User[];
  currentUser: User;
  formError: Nullable<string>;
  loading: boolean;
};

type HomeActions =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: User }
  | { type: 'SET_FORM_ERROR'; payload: Nullable<string> }
  | { type: 'SET_CURRENT_USER'; payload: User }
  | { type: 'RESET_CURRENT_USER' };

export function homeReducer(s: HomeState, a: HomeActions) {
  switch (a.type) {
    case 'FETCH_START':
      return { ...s, loading: true, formError: null };
    case 'FETCH_SUCCESS':
      return { ...s, loading: false, users: [a.payload, ...s.users] };
    case 'SET_FORM_ERROR':
      return { ...s, loading: false, formError: a.payload };
    case 'SET_CURRENT_USER':
      return { ...s, currentUser: a.payload };
    case 'RESET_CURRENT_USER':
      return { ...s, currentUser: { ...s.currentUser, username: '' } };
    default:
      throw new Error('Unhandled reducer situation');
  }
}
