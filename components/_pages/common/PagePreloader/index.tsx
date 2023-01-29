import {
  type FC,
  memo,
  useEffect,
  useRef,
} from 'react';

import { useStoreon } from 'store';

import classes from './PagePreloader.module.css';

const PagePreloader: FC = () => {
  const {
    dispatch,
    preload,
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

  return (
    <div className={`${classes.preloader} ${classes.show}`} ref={preloaderRef}>
      <p>Preloader</p>
      <button onClick={() => dispatch('toggleThemeMode')}>toggle</button>
      <button onClick={() => dispatch('setShowPreload', false)}>change</button>
    </div>
  );
};

export default memo(PagePreloader);
