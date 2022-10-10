import Head from 'next/head'
import type { FC } from 'react'

import styles from './styles.module.scss'

const SearchBox: FC = () => {
    return (
        <>
            <Head>
                <link
                    rel='stylesheet'
                    href='https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css'
                />
            </Head>
            <div className={styles.search}>
                <i className='bx bx-search'></i>
                <label htmlFor='search'></label>
                <input
                    id='search'
                    type='text'
                    placeholder='音乐/视频/电台/用户'
                />
            </div>
        </>
    )
}

export default SearchBox
