import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './index.less';
import topbg from '../../assets/topbg.png';

@connect(({ home }) => ({ home }))
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log('xxxx', this.props);
        return (
            <div className={styles.wrap}>
                <div className={styles.top}>
                    <img alt='' src={topbg} />
                    <div className={styles.ranking}></div>
                </div>
            </div>
        );
    }
}

export default Home;

