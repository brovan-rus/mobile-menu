import { FC } from 'react';
import cn from 'classnames/bind';
import styles from './MenuUpperLine.module.css';
import { ILang } from '../MobileMenu';
const cx = cn.bind(styles);

interface IMenuUpperLine {
  isLanguageSelectMenuOpen: boolean;
  languagesList: ILang[];
  handleMenuToggle: () => void;
  handleLanguageSelectMenuToggle: () => void;
  handleLanguageChange: (shortName?: string) => void;
  menuButton: 'close' | 'burger';
  selectedLanguage?: ILang;
}

export const MenuUpperLine: FC<IMenuUpperLine> = (props) => {
  const {
    languagesList,
    handleMenuToggle,
    handleLanguageSelectMenuToggle,
    menuButton,
    isLanguageSelectMenuOpen,
    handleLanguageChange,
    selectedLanguage,
  } = props;

  return (
    <div className={cx('mobileMenuUpperLine')}>
      <button
        className={cx('languageSelectButton', isLanguageSelectMenuOpen && 'visible')}
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
      <div className={cx('languageSelectMenu', isLanguageSelectMenuOpen && 'visible')}>
        <h3 className={cx('languageSelectMenuTitle')}>Страна</h3>
        <ul className={cx('languageList')}>
          {languagesList.map((language) => (
            <li
              className={cx('languageListElement')}
              key={language.shortName}
              onClick={() => handleLanguageChange(language.shortName)}
            >
              <img
                className={cx('flagImage', 'languageListImage')}
                src={language.imageLink}
              />
              <span className={cx('languageListText')}>{language.fullName}</span>
              {language.shortName === selectedLanguage?.shortName && (
                <div className={cx('languageListTick')} />
              )}
            </li>
          ))}
        </ul>
      </div>

      <button className={cx('menuButton', menuButton)} onClick={handleMenuToggle} />
    </div>
  );
};
