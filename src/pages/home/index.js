import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './index.less';
import topBg from '../../assets/topbg.png';

@connect(({ home }) => ({ home }))
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.dispatch({ type: 'home/getRankList' });
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
            </div>
        );
    }
}

export default Home;

