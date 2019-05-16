import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './index.less';
import topBg from '../../assets/topbg.png';

import Title from '../../components/title';
import ListSwiper from '../../components/listSwiper';
import SingleSwiper from '../../components/singleSwiper';

@connect(({ home }) => ({ home }))
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rankList: [{ img: '', name: '张小二', score: 100 }],
        };
    }

    componentDidMount() {
        this.props.dispatch({ type: 'home/getRankList' });
        this.props.dispatch({ type: 'home/getExchange' });
        this.props.dispatch({ type: 'home/getIntegralRanking' });
    }

    render() {
        return (
            <div className={styles.wrap}>
                <div className={styles.top}>
                    <img alt='' src={topBg} />
                    <div className={styles.ranking}>
                        {
                            this.props.home.rankingList.map((item, index) => {
                                return (
                                    <div className={styles.item} key={index}>
                                        <img src={item.img} alt=''/>
                                        <span>Lv{item.no}</span>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className={styles.exchange}>
                    <Title title='积分兑换' url='/home'/>
                    <ListSwiper dataList={ this.props.home.exchangeList} />
                </div>
                <div className={styles.integralRanking}>
                    <Title title='积分排行'/>
                    <SingleSwiper dataList={ this.props.home.integralRanking} />
                </div>
            </div>
        );
    }
}

export default Home;

