import React, { Component } from 'react';
import Link from 'umi/link';
import styles from './index.less';
import icon_rili from '../../assets/icon/icon_rili.png';

class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={styles.wrap}>
                <img alt='' src={icon_rili} />
                <span>{this.props.title || '标题'}</span>
                {
                    this.props.url ? (<Link className={styles.link} to={this.props.url}>更多></Link>) : null
                }
            </div>
        );
    }
}

export default Title;

