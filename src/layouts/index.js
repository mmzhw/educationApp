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
        return (
            <div>
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
                {this.props.children}
            </div>

        );
    }
}

export default Layout;
