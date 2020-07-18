import { GlobalOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
// import { getLocale, setLocale } from 'umi';
import React from 'react';

import classNames from 'classnames';
// import HeaderDropdown from '../HeaderDropdown';

import { Dropdown } from 'antd';

import styles from './index.less';

const LSTG_KEY_LOCALE = 'umi_locale';
let localeContext;
function setLocale(lang, realReload = true) {
  const { g_langSeparator = '-' } = window;
  const localeExp = new RegExp(`^([a-z]{2})${g_langSeparator}?([A-Z]{2})?$`);
  if (lang !== undefined && !localeExp.test(lang)) {
    // for reset when lang === undefined
    throw new Error('setLocale lang format error');
  }
  if (getLocale() !== lang) {
    window.g_lang = lang;
    window.localStorage.setItem(LSTG_KEY_LOCALE, lang || '');
    // 触发 context 的 reload
    // 如果要刷新 location ，没必要进行 context 的 reload 了
    if (localeContext && !realReload) {
      localeContext.reloadAppLocale();
    }
    if (realReload) {
      window.location.reload();
    }
    // chrome 不支持这个事件。所以人肉触发一下
    if (window.dispatchEvent) {
      const event = new Event('languagechange');
      window.dispatchEvent(event);
    }
  }
}

function getLocale() {
  // support SSR
  const { g_langSeparator = '-', g_lang } = window;
  const lang = typeof localStorage !== 'undefined' ? window.localStorage.getItem(LSTG_KEY_LOCALE) : '';
  const isNavigatorLanguageValid =
    typeof navigator !== 'undefined' && typeof navigator.language === 'string';
  const browserLang = isNavigatorLanguageValid
    ? navigator.language.split('-').join(g_langSeparator)
    : '';
  return lang || g_lang || browserLang;
}


const HeaderDropdown = ({ overlayClassName: cls, ...restProps }) => (
    <Dropdown overlayClassName={classNames(styles.container, cls)} {...restProps} />
);


const SelectLang = props => {
    const { className } = props;
    const selectedLang = getLocale();
  
    const changeLang = ({ key }) => setLocale(key);
  
    // const locales = ['zh-CN', 'zh-TW', 'en-US', 'pt-BR'];
    const locales = ['zh-CN'];
    const languageLabels = {
      'zh-CN': '简体中文',
      // 'zh-TW': '繁体中文',
      // 'en-US': 'English',
      // 'pt-BR': 'Português',
    };
    const languageIcons = {
      'zh-CN': '🇨🇳',
      // 'zh-TW': '🇭🇰',
      // 'en-US': '🇺🇸',
      // 'pt-BR': '🇧🇷',
    };
    const langMenu = (
      <Menu className={styles.menu} selectedKeys={[selectedLang]} onClick={changeLang}>
        {locales.map(locale => (
          <Menu.Item key={locale}>
            <span role="img" aria-label={languageLabels[locale]}>
              {languageIcons[locale]}
            </span>{' '}
            {languageLabels[locale]}
          </Menu.Item>
        ))}
      </Menu>
    );

    return (
        <HeaderDropdown overlay={langMenu} placement="bottomRight">
          <span className={classNames(styles.dropDown, className)}>
            <GlobalOutlined title="语言" />
          </span>
        </HeaderDropdown>
    );
};

export default SelectLang;