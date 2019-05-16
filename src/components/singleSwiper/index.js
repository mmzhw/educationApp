import React, { Component } from 'react';
import { isEqual } from 'lodash';
import Swiper from 'swiper';
import classNames from 'classNames';
import styles from './index.less';
import 'swiper/dist/css/swiper.css';

class SingleSwiper extends Component {
    constructor (props) {
        super(props);
        this.state = {
            mySwiper: null,
        };
    }

    componentDidUpdate(prevProps) {
        if (!isEqual(prevProps.dataList, this.props.dataList)) {
            if (this.state.mySwiper) {
                this.state.mySwiper.destroy(false);
            }
            let mySwiper = new Swiper('#' + styles.wrap, {
                slidesPerView: 'auto',
            });
            this.setState({ mySwiper });
        }
    }

    render () {
        return (
            <div className={styles.wrap} id={styles.wrap}>
                <div className='swiper-wrapper'>
                    {
                        this.props.dataList.map((item, index) => {
                            return (
                                <div className={classNames('swiper-slide', styles.item)} key={index}>
                                    <img src={item.img} alt=''/>
                                    <div className={styles.leftText}>
                                        <p>{item.name}</p>
                                        <p>个人积分：<span>{item.score}</span>分</p>
                                        <p>班级积分排名，第<span>{item.no}</span>名</p>
                                    </div>
                                    <div className={styles.rightImg}>{item.no}</div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default SingleSwiper;

