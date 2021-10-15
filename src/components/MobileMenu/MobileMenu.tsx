import { FC, useState } from 'react';
import cn from 'classnames/bind';

import styles from './MobileMenu.module.css';
import data from './assets/mock-data.json';
import { MenuUpperLine } from '../MenuUpperLine';
import { MenuNavigation } from '../MenuNavigation';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageSelectMenuOpen, setIsLanguageSelectMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    languagesList.find((language) => language.shortName === 'Ru'),
  );
  const [currentLanguageNavigationData, setCurrentLanguageNavigationData] = useState(
    data.find((language) => language.shortLang === selectedLanguage?.shortName)?.content,
  );

  console.log(currentLanguageNavigationData);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleLanguageSelectMenuToggle = () =>
    setIsLanguageSelectMenuOpen(!isLanguageSelectMenuOpen);
  const handleLanguageChange = (shortName?: string) => {
    setSelectedLanguage(
      languagesList.find((language) => language.shortName === shortName),
    );
    setCurrentLanguageNavigationData(
      data.find((language) => language.shortLang === shortName)?.content,
    );
    setIsLanguageSelectMenuOpen(false);
  };

  console.log(currentLanguageNavigationData);

  return (
    <div className={cx('container')}>
      <MenuUpperLine
        isLanguageSelectMenuOpen={isLanguageSelectMenuOpen}
        languagesList={languagesList}
        handleMenuToggle={handleMenuToggle}
        handleLanguageSelectMenuToggle={handleLanguageSelectMenuToggle}
        handleLanguageChange={handleLanguageChange}
        menuButton={isMenuOpen ? 'close' : 'burger'}
        selectedLanguage={selectedLanguage}
      />
      <MenuNavigation
        navigationData={currentLanguageNavigationData}
        isMenuOpen={isMenuOpen}
      />
    </div>
  );
};
