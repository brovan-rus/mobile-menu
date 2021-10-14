import { FC, useState } from 'react';
import cn from 'classnames/bind';

import styles from './MobileMenu.module.css';
import data from './assets/mock-data.json';

const cx = cn.bind(styles);
const languagesList = data.map((language) => {
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

  return (
    <div className={cx('container', isMenuOpen && 'mobileMenuOpen')}>
      <div className={cx('mobileMenuUpperLine')}>
        <button
          className={cx('languageSelectButton')}
          onClick={handleLanguageSelectMenuToggle}
        >
          <div className={cx('languageSelectIconContainer')}>
            <img
              className={cx('flagImage', 'languageSelectIcon')}
              src={selectedLanguage?.imageLink}
            />
          </div>
          <span className={cx('languageSelectButtonText')}>
            {selectedLanguage?.shortName}
          </span>
          <div className={cx('languageSelectArrow')} />
        </button>
        <div className={cx('languageSelectMenu', !isLanguageSelectMenuOpen && 'hidden')}>
          <h3 className={cx('languageSelectMenuTitle')}>Страна</h3>
          <ul className={cx('languageList')}>
            {languagesList.map((language) => (
              <li className={cx('languageListElement')} key={language.id}>
                <img
                  className={cx('flagImage', 'languageListImage')}
                  src={language.imageLink}
                />
                <span className={cx('languageListText')}>{language.fullName}</span>
                {language.shortName === selectedLanguage?.shortName && <span>✓</span>}
              </li>
            ))}
          </ul>
        </div>

        <button
          className={cx('menuButton', isMenuOpen ? 'close' : 'burger')}
          onClick={handleMenuToggle}
        />
      </div>
      <div className={cx('mobileMenu')}></div>
    </div>
  );
};
