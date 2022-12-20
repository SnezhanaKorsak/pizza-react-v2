import React, { ChangeEvent, useCallback, useContext, useRef, useState } from 'react';
import debounce from 'lodash.debounce';

import { SearchContext } from '../../context';

import styles from './styles.module.scss';

const Search = () => {
  const [value, setValue] = useState<string>('');
  const { setSearchValue } = useContext(SearchContext);

  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

  const clearInput = () => {
    setValue('');
    updateSearchValue('');
    inputRef.current && inputRef.current.focus();
  };

  const updateSearchValue = useCallback(
    debounce((value: string) => {
      setSearchValue(value);
    }, 2000),
    [value],
  );

  const onChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
    updateSearchValue(event.currentTarget.value);
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        enableBackground='new 0 0 32 32'
        id='EditableLine'
        version='1.1'
        viewBox='0 0 32 32'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          cx='14'
          cy='14'
          fill='none'
          id='XMLID_42_'
          r='9'
          stroke='#000000'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth='2'
        />
        <line
          fill='none'
          id='XMLID_44_'
          stroke='#000000'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth='2'
          x1='27'
          x2='20.366'
          y1='27'
          y2='20.366'
        />
      </svg>
      <input
        className={styles.input}
        placeholder='Поиск пиццы...'
        value={value}
        ref={inputRef}
        onChange={onChangeInputValue}
      />
      <button type='button' className={styles.exit} onClick={clearInput}>
        x
      </button>
    </div>
  );
};

export default Search;
