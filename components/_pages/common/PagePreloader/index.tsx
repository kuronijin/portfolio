import {
  type FC,
  memo,
  useEffect,
  useRef,
} from 'react';
import styled from 'styled-components';

import { useStoreon } from 'store';

const PreloaderContainer = styled.div`
  position: fixed;
  inset: 0;
  display: none;
  opacity: 1;
  transition: opacity 0.5s ease;
  zIndex: 1000;
  
  .show {
    display: block;
  }
  
  .hidden {
    opacity: 0;
  }
`;

const PagePreloader: FC = () => {
  const {
    dispatch,
    preload,
  } = useStoreon(
    'preload',
  );

  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(
    () => {
      const preloaderElement = preloaderRef.current;

      if (preloaderElement) {
        const onAnimationEnd = () => {
          preloaderElement.classList.remove('show');
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
          preloaderElement.classList.add('hidden');
        }
      }
    },
    [preload],
  );

  return (
    <PreloaderContainer ref={preloaderRef}>
      <p>Preloader</p>
      <button onClick={() => dispatch('setShowPreload', false)}>change</button>
    </PreloaderContainer>
  );
};

export default memo(PagePreloader);
