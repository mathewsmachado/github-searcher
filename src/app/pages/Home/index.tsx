import { FormEvent, useCallback, useEffect, useReducer, useRef } from 'react';

import { LOCAL_STORAGE_KEYS } from 'core/constants';
import { User } from 'core/entities';
import { UserService } from 'core/services';
import { getFromLocalStorage, setIntoLocalStorage } from 'app/utils/storage';
import {
  BasePage,
  Empty,
  PageTitle,
  FormSingle,
  UsersList,
  UserResultModal,
} from 'app/components';

import * as S from './styles';
import { homeReducer, HomeState } from './reducer';

const initialState: HomeState = {
  formError: null,
  loading: false,
  users: getFromLocalStorage(LOCAL_STORAGE_KEYS.HOME) ?? [],
  currentUser: new User({
    bio: '',
    name: '',
    username: '',
    pictureUrl: '',
    statuses: { followers: 0, following: 0, repositories: 0 },
    socialMediaUsernames: { github: '', linkedin: '', twitter: '' },
  }),
};

export function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [homeState, homeDispatch] = useReducer(homeReducer, initialState);

  const { users, loading, formError, currentUser } = homeState;

  useEffect(() => inputRef.current?.focus(), []);
  useEffect(() => setIntoLocalStorage(LOCAL_STORAGE_KEYS.HOME, users), [users]);

  function fetchSuccess(user: User) {
    homeDispatch({ type: 'FETCH_SUCCESS', payload: user });
    inputRef!.current!.value = '';
  }

  function setFormError(error: string) {
    homeDispatch({ type: 'SET_FORM_ERROR', payload: error });
  }

  const setCurrentUser = useCallback(
    (user: User) => () =>
      homeDispatch({ type: 'SET_CURRENT_USER', payload: user }),
    []
  );

  const resetCurrentUser = useCallback(
    () => homeDispatch({ type: 'RESET_CURRENT_USER' }),
    []
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<Element>): Promise<void> => {
      e.preventDefault();

      homeDispatch({ type: 'FETCH_START' });

      const username = inputRef.current?.value;
      if (!username) {
        return setFormError('Please, fill the input.');
      }

      const userAlreadyFound = !!users.find(
        (u) => u.username.toLowerCase() === username.toLowerCase()
      );
      if (userAlreadyFound) {
        return setFormError('Duplicated search.');
      }

      const user = await UserService.getByUsername(username!);
      if (!user) {
        return setFormError('User not found.');
      }

      return fetchSuccess(user!);
    },
    [users]
  );

  return (
    <BasePage>
      <S.UpperWrapper>
        <PageTitle unfilledText='Find a' filledText='developer' />
        <FormSingle
          loading={loading}
          onSubmit={handleSubmit}
          inputData={{
            placeholder: 'Username',
            ref: inputRef,
            error: formError ?? '',
          }}
        />
      </S.UpperWrapper>
      <S.BottomWrapper>
        {users.length === 0 && (
          <Empty text='Look for people and find out their Github stats' />
        )}
        {users.length > 0 && (
          <UsersList onArrowClick={setCurrentUser} users={users} />
        )}
      </S.BottomWrapper>
      <UserResultModal
        user={currentUser}
        isOpen={!!currentUser.username}
        onClose={resetCurrentUser}
      />
    </BasePage>
  );
}
