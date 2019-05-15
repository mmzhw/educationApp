import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import styles from './index.less';

import { MENUS } from '../constant';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log('xxxx', this.props.location.pathname);
        let layout = null;
        if (this.props.location.pathname.match('/home')) {
            layout = (
                <div className={styles.footWrap}>
                    <TabBar
                        unselectedTintColor='#949494'
                        tintColor='#33A3F4'
                        barTintColor='white'
                        tabBarPosition='bottom'
                        hidden={this.state.hidden}
                    >
                        {MENUS.map((item, index) => {
                            return <TabBar.Item key={index} title={item.title} icon={<img alt={item.title} src={item.icon} />} />;
                        })}
                    </TabBar>
                </div>
            );
        }

        return (
            <div>
                {layout}
                {this.props.children}
            </div>

        );
    }
}

export default Layout;
