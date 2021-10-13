import { FC } from 'react';
import cn from 'classnames/bind';

import styles from './MobileMenu.module.css';

const cx = cn.bind(styles);

export const MobileMenu: FC = () => {
  return <div className={cx('container')}></div>;
};
