import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HeadlessTippy from '@tippyjs/react/headless';
import { useState, useEffect, useRef } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';

import * as searchServices from '~/Services/searchServices';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debouncedVallue = useDebounce(searchValue, 500);

    const nameRef = useRef();
    useEffect(() => {
        if (!debouncedVallue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        const fecthApi = async () => {
            setLoading(true);
            const result = await searchServices.search(debouncedVallue);
            setSearchResult(result);

            setLoading(false);
        };
        fecthApi();
    }, [debouncedVallue]);
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        nameRef.current.focus();
        // setShowResult(false);
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleMouseDown = (e) => {
        e.preventDefault();
    };
    return (
        //Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Account</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={nameRef}
                        value={searchValue}
                        placeholder=" search acciunts..."
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => {
                            setShowResult(true);
                        }}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {/*loading */}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')} onMouseDown={handleMouseDown} onClick={handleSubmit}>
                        <SearchIcon width="2.5rem" height="2.5rem" />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
