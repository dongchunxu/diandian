import { Icon, Tooltip } from 'antd';
import React from 'react';
import { connect } from 'dva';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import SelectLang from '../SelectLang';
import styles from './index.less';
import NoticeIconView from './NoticeIconView';

const GlobalHeaderRight = props => {
  const { theme, layout } = props;
  let className = styles.right;

  if (theme === 'dark' && layout === 'topmenu') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <div className={className}>
      <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="component.globalHeader.search"
        defaultValue="umi ui"
        dataSource={[
          'component.globalHeader.search.example1',
          'component.globalHeader.search.example2',
          'component.globalHeader.search.example3',
        ]}
        onSearch={value => {
          console.log('input', value);
        }}
        onPressEnter={value => {
          console.log('enter', value);
        }}
      />
      <NoticeIconView />
      <Avatar menu />
      {/*<SelectLang className={styles.action} />*/}
    </div>
  );
};

export default connect(({ settings }) => ({
  theme: settings.navTheme,
  layout: settings.layout,
}))(GlobalHeaderRight);
