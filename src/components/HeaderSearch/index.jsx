import { SearchOutlined } from '@ant-design/icons';
import { AutoComplete, Input } from 'antd';
import useMergeValue from 'use-merge-value';
import React, { useRef } from 'react';
import classNames from 'classnames';
import styles from './index.less';

const HeaderSearch = props => {
    return (
        <div>
            <SearchOutlined
                key="Icon"
                style={{
                cursor: 'pointer',
                }}
            />
            <AutoComplete
                key="AutoComplete"
                // className={inputClass}
                // value={value}
                style={{
                    height: 28,
                    marginTop: -6,
                }}
                // options={restProps.options}
                // onChange={setValue}
            >
                <Input
                // ref={inputRef}
                // defaultValue={defaultValue}
                // aria-label={placeholder}
                // placeholder={placeholder}
                // onKeyDown={e => {
                //     if (e.key === 'Enter') {
                //     if (restProps.onSearch) {
                //         restProps.onSearch(value);
                //     }
                //     }
                // }}
                // onBlur={() => {
                //     setSearchMode(false);
                // }}
                />
            </AutoComplete>
        </div>
    );
}

export default HeaderSearch;