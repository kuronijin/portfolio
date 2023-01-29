import {
  FC,
  ReactHTML,
  ReactNode,
  memo,
  createElement,
} from 'react';

import useStyles from './ContentLayout.styles';

interface ContentLayoutClassesProps {
  root?: string;
  content?: string;
}

interface ContentLayoutProps {
  className?: string;
  classes?: ContentLayoutClassesProps;
  component?: keyof ReactHTML;
  children: ReactNode;
}

const ContentLayout: FC<ContentLayoutProps> = ({
  className = '',
  classes: {
    root = '',
    content = '',
  } = {},
  children,
  component = 'div',
}) => {
  const { classes, cx } = useStyles();

  return createElement(
    component,
    { className: cx(classes.root, className, root) },
    <div className={cx(classes.contentWrapper, content)}>
      {children}
    </div>,
  );
};

export default memo(ContentLayout);
