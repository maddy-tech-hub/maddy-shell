import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  subscribeShellEvent,
  type ShellAuthChangedDetail,
  type ShellNavigationDetail,
} from '@src/shared/lib/mfe/eventBus';
import {
  clearSession,
  setSession,
} from '@src/redux/slices/sessionSlice';
import type { AppDispatchType } from '@src/redux/store';

export const useShellBridge = (): void => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatchType>();

  useEffect(() => {
    const unsubscribeNavigation = subscribeShellEvent(
      'maddy:navigate',
      ({ path, replace }: ShellNavigationDetail) => {
        navigate(path, { replace });
      }
    );

    const unsubscribeSession = subscribeShellEvent(
      'maddy:auth-changed',
      ({ token, user }: ShellAuthChangedDetail) => {
        if (!token) {
          dispatch(clearSession());
          return;
        }

        dispatch(
          setSession({
            token,
            user,
          })
        );
      }
    );

    return () => {
      unsubscribeNavigation();
      unsubscribeSession();
    };
  }, [dispatch, navigate]);
};
