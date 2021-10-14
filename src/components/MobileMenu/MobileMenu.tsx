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
  const [selectedLanguage, setSelectedLanguage] = useState(
    languagesList.find((language) => language.shortName === 'Ru'),
  );
  console.log(selectedLanguage);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div className={cx('container', isMenuOpen && 'mobileMenuOpen')}>
      <div className={cx('mobileMenuUpperLine')}>
        <button className={cx('languageSelectButton')}>
          <div className={cx('languageSelectIconContainer')}>
            <img
              className={cx('flagImage', 'languageSelectIcon')}
              src={selectedLanguage?.imageLink || ''}
            />
          </div>
          <span>{selectedLanguage?.shortName || ''}</span>
        </button>
        <ul className={cx('languageList')}>
          {languagesList.map((language) => (
            <li key={language.id}>
              <img className={cx('flagImage')} src={language.imageLink} />
              <span>{language.fullName}</span>
              {language.shortName === selectedLanguage?.shortName && <span>✓</span>}
            </li>
          ))}
        </ul>
        <button
          className={cx(isMenuOpen ? 'close' : 'burger')}
          onClick={handleMenuToggle}
        />
      </div>
      <div className={cx('mobileMenu')}></div>
    </div>
  );
};
