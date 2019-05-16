import React, { Component } from 'react';
import { isEqual } from 'lodash';
import Swiper from 'swiper';
import classNames from 'classNames';
import styles from './index.less';
import 'swiper/dist/css/swiper.css';

class ListSwiper extends Component {
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
                spaceBetween: 20,
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
                                    <div className={styles.imgWrap}><img alt='' src={item.img}/></div>
                                    <p>{item.title}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ListSwiper;

