import { FC, useState } from 'react';
import cn from 'classnames/bind';

import styles from './MobileMenu.module.css';
import data from './assets/mock-data.json';
import { MenuUpperLine } from '../MenuUpperLine';

export interface ILang {
  imageLink?: string;
  shortName?: string;
  fullName?: string;
  id?: number;
}

const cx = cn.bind(styles);
const languagesList: ILang[] = data.map((language) => {
  return {
    imageLink: language.image,
    shortName: language.shortLang,
    fullName: language.lang,
    id: language.id,
  };
});

export const MobileMenu: FC = () => {
  console.log(languagesList);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageSelectMenuOpen, setIsLanguageSelectMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    languagesList.find((language) => language.shortName === 'Ru'),
  );
  console.log(selectedLanguage);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleLanguageSelectMenuToggle = () =>
    setIsLanguageSelectMenuOpen(!isLanguageSelectMenuOpen);
  const handleLanguageChange = (shortName?: string) => {
    setSelectedLanguage(
      languagesList.find((language) => language.shortName === shortName),
    );
  };

  return (
    <div className={cx('container', isMenuOpen && 'mobileMenuOpen')}>
      <MenuUpperLine
        isLanguageSelectMenuOpen={isLanguageSelectMenuOpen}
        languagesList={languagesList}
        handleMenuToggle={handleMenuToggle}
        handleLanguageSelectMenuToggle={handleLanguageSelectMenuToggle}
        handleLanguageChange={handleLanguageChange}
        menuButton={isMenuOpen ? 'close' : 'burger'}
        selectedLanguage={selectedLanguage}
      />
      <div className={cx('mobileMenu')}></div>
    </div>
  );
};
