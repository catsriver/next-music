import Link from 'next/link'

import type { FC } from 'react'

import styles from './styles.module.scss'
import Button from '../ui/button'
import SearchBox from '../ui/searchbox/index'

const NavBar: FC = () => {
    return (
        <div className={styles['top-bar']}>
            <div className={styles['main-nav-container']}>
                <div className={styles['main-nav-content']}>
                    {/* logo */}
                    <h1 className={styles.logo}>
                        <Link href='/'>网易云音乐</Link>
                    </h1>

                    {/* 一级菜单 */}
                    <ul className={styles['main-nav']}>
                        <li>
                            <Link href='/'>发现音乐</Link>
                        </li>
                        <li>
                            <Link href='/my'>我的音乐</Link>
                        </li>
                        <li>
                            <Link href='/friend'>关注</Link>
                        </li>
                        <li>
                            <Link href='/store/product'>
                                <a target='_blank'>商城</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/st/musician'>
                                <a target='_blank'>音乐人</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/download'>下载客户端</Link>
                        </li>
                    </ul>

                    {/* 右侧搜索框 */}
                    <div className={styles['search-container']}>
                        <SearchBox />
                        <Button outline>创作者中心</Button>
                        <Button click={() => console.log('登陆')}>登陆</Button>
                    </div>
                </div>
            </div>

            {/* 二级菜单 */}
            <div className={styles['sub-nav-container']}></div>
        </div>
    )
}

export default NavBar
