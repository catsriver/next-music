import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './styles.module.scss'

const BottomBar: FC = () => {
    return (
        <div className={styles['bottom-bar']}>
            <div className={styles['bottom-bar-content']}>
                <div className={styles.left}>
                    <p className={styles.link}>
                        <Link href='https://st.music.163.com/official-terms/service'>
                            <a target='_blank'>服务条款</a>
                        </Link>
                        <span>|</span>
                        <Link href='https://st.music.163.com/official-terms/privacy'>
                            <a target='_blank'>隐私政策</a>
                        </Link>
                        <span>|</span>
                        <Link href='https://st.music.163.com/official-terms/children'>
                            <a target='_blank'>儿童隐私政策</a>
                        </Link>
                        <span>|</span>
                        <Link href='https://music.163.com/st/staticdeal/complaints.html'>
                            <a target='_blank'>版权投诉</a>
                        </Link>
                        <span>|</span>
                        <Link href='http://ir.music.163.com/en/index.php'>
                            <a target='_blank'>投资者关系</a>
                        </Link>
                        <span>|</span>
                        <Link href='https://music.163.com/ui/resource'>
                            <a target='_blank'>广告合作</a>
                        </Link>
                        <span>|</span>
                        <Link href='https://jubao.163.com/'>
                            <a target='_blank'>廉政举报</a>
                        </Link>
                        <span>|</span>
                        <Link href='https://mp.music.163.com/600948c936c13f4d09752e73/contact-us-web/index.html?source=Music-Main-Station'>
                            <a target='_blank'>联系我们</a>
                        </Link>
                    </p>
                    <p>
                        <span className={styles.right10}>
                            网易公司版权所有©1997-2022
                        </span>
                        <span>杭州乐读科技有限公司运营：</span>
                        <Link href='https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png'>
                            <a target='_blank'>浙网文[2021] 1186-054号</a>
                        </Link>
                    </p>
                    <p>
                        <Link href='https://beian.miit.gov.cn/#/Integrated/index'>
                            <a target='blank'>
                                <span className={styles.right10}>
                                    粤B2-20090191-18
                                    工业和信息化部备案管理系统网站
                                </span>
                            </a>
                        </Link>
                        <Link href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564'>
                            <a target='blank'>浙公网安备 33010902002564号</a>
                        </Link>
                    </p>
                    <p>
                        <span className={styles.right10}>
                            互联网宗教信息服务许可证：浙（2022）0000120
                        </span>
                        <span> 监督举报邮箱：51jubao@service.netease.com</span>
                    </p>
                </div>
                <ul className={styles.right}>
                    <li>
                        <Link href='https://web-amped.music.163.com/'>
                            <p>Amped Studio</p>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://music.163.com/st/userbasic#/auth'>
                            <p>用户认证</p>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://music.163.com/st/musician'>
                            <p>独立音乐人</p>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://music.163.com/web/reward'>
                            <p>赞赏</p>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://music.163.com/st/ncreator/revenue-plan'>
                            <p>视频奖励</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BottomBar
