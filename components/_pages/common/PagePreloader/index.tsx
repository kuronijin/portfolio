import {
  type FC,
  memo,
  useCallback,
  useEffect,
  useRef,
} from 'react';

import { ThemeMode } from 'types';
import { useStoreon } from 'store';

import classes from './PagePreloader.module.css';

const PagePreloader: FC = () => {
  const {
    dispatch,
    preload,
    theme,
  } = useStoreon(
    'preload',
    'theme',
  );

  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(
    () => {
      const preloaderElement = preloaderRef.current;

      if (preloaderElement) {
        const onAnimationEnd = () => {
          preloaderElement.classList.remove(classes.show);
        };

        preloaderElement.addEventListener('transitionend', onAnimationEnd);

        return () => {
          if (preloaderElement) {
            preloaderElement.removeEventListener('transitionend', onAnimationEnd);
          }
        };
      }
    },
    [],
  );

  useEffect(
    () => {
      if (!preload.show) {
        const preloaderElement = preloaderRef.current;

        if (preloaderElement) {
          preloaderElement.classList.add(classes.hidden);
        }
      }
    },
    [preload],
  );

  console.log(`This is ---> theme.mode`, theme.mode);

  const test = useCallback(
    () => {
      dispatch('setThemeMode', theme.mode === ThemeMode.Light ? ThemeMode.Dark: ThemeMode.Light);
    },
    [theme],
  );

  return (
    <div className={`${classes.preloader} ${classes.show}`} ref={preloaderRef}>
      <p>Preloader</p>
      <button onClick={test}>toggle</button>
      <button onClick={() => dispatch('setShowPreload', false)}>change</button>
    </div>
  );
};

export default memo(PagePreloader);
