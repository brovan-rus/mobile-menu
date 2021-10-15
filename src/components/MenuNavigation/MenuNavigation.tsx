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

interface ISecondLayerData {
  id: number;
  title: string;
  content: { id: string; title: string; text: string }[];
}

const cx = cn.bind(styles);

export const MenuNavigation: FC<IMenuNavigation> = ({ navigationData, isMenuOpen }) => {
  const [currentMenuLayer, setCurrentMenuLayer] = useState(1);
  const [secondLayerData, setSecondLayerData] = useState<ISecondLayerData[]>();
  const [secondLayerTitle, setSecondLayerTitle] = useState('');
  const handleOpenSecondLayer = (id: number, title: string) => {
    setSecondLayerData(navigationData?.filter((el) => el.id === id)[0].content);
    setCurrentMenuLayer(2);
    setSecondLayerTitle(title);
  };
  const handleOpenFirstLayer = () => {
    setCurrentMenuLayer(1);
  };
  return (
    <div
      className={cx(
        'container',
        currentMenuLayer === 1 && 'firstLayer',
        isMenuOpen && 'mobileMenuOpen',
      )}
    >
      {/*Первый уровень меню*/}
      <ul
        className={cx('list', 'text', 'titleLarge', currentMenuLayer !== 1 && 'hidden')}
      >
        {navigationData?.map((firstLayerMenuElement) => (
          <li key={firstLayerMenuElement.id}>
            <button
              className={cx('button', 'text', 'titleLarge')}
              type="button"
              onClick={() =>
                handleOpenSecondLayer(
                  firstLayerMenuElement.id,
                  firstLayerMenuElement.title,
                )
              }
            >
              {firstLayerMenuElement.title}
            </button>
          </li>
        ))}
      </ul>
      <nav className={cx(currentMenuLayer !== 1 && 'hidden')}>
        <ul className={cx('list')}>
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
      {/*Второй уровень меню*/}
      <button
        type="button"
        onClick={handleOpenFirstLayer}
        className={cx(
          'text',
          'button',
          'titleLarge',
          'titleSecondLayer',
          'backButton',
          currentMenuLayer !== 2 && 'hidden',
        )}
      >
        {secondLayerTitle}
      </button>
      <ul className={cx('list', 'secondLayer', currentMenuLayer !== 2 && 'hidden')}>
        {secondLayerData?.map((el) => (
          <li key={el.id}>
            <button className={cx('button', 'text', 'titleMedium')} type="button">
              {el.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
