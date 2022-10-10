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
            <div className={styles['sub-nav-container']}>
                <ul className={styles['sub-nav-content']}>
                    <li>
                        <Link href='/discover'>推荐</Link>
                    </li>
                    <li>
                        <Link href='/discover/toplist'>排行榜</Link>
                    </li>
                    <li>
                        <Link href='/discover/playlist'>歌单</Link>
                    </li>
                    <li>
                        <Link href='/discover/djradio'>主播电台</Link>
                    </li>
                    <li>
                        <Link href='/discover/artist'>歌手</Link>
                    </li>
                    <li>
                        <Link href='/discover/album'>新碟上架</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
