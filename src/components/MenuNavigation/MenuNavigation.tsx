import { FC, useState } from 'react';
import cn from 'classnames/bind';

import styles from './MenuNavigation.module.css';

interface IMenuNavigation {
  navigationData?: {
    id: number;
    title: string;
    content: {
      id: number;
      title: string;
      content: { id: string; title: string; text: string }[];
    }[];
  }[];
  isMenuOpen: boolean;
}

const cx = cn.bind(styles);

export const MenuNavigation: FC<IMenuNavigation> = ({ navigationData, isMenuOpen }) => {
  const [currentMenuLayer, setCurrentMenuLayer] = useState(1);
  const [secondLayerData, setSecondLayerData] = useState();
  const handleOpenSecondLayer = (id: number) => {
    console.log(navigationData?.filter((el) => el.id === id));
  };

  return (
    <div className={cx('container', isMenuOpen && 'mobileMenuOpen')}>
      <ul
        className={cx('list', 'text', 'titleLarge', currentMenuLayer !== 1 && 'hidden')}
      >
        {navigationData?.map((firstLevelMenuElement) => (
          <li key={firstLevelMenuElement.id}>
            <button
              className={cx('button', 'text', 'titleLarge')}
              type="button"
              onClick={() => handleOpenSecondLayer(firstLevelMenuElement.id)}
            >
              {firstLevelMenuElement.title}
            </button>
          </li>
        ))}
      </ul>
      <nav>
        <ul className={cx('list', currentMenuLayer !== 1 && 'hidden')}>
          <li>
            <a className={cx('link', 'text', 'titleLarge')} href="#" target="_self">
              Контакты
            </a>
          </li>
          <li>
            <a className={cx('link', 'text', 'titleLarge')} href="#" target="_self">
              Поиск
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
