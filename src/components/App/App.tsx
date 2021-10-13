import { FC } from 'react';
import cn from 'classnames/bind';

import { MobileMenu } from '../MobileMenu';
import styles from './App.module.css';

const cx = cn.bind(styles);

export const App: FC = () => {
  return <MobileMenu />;
};
