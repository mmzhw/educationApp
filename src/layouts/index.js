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
        console.log(this.props);
        return (
            <div className={styles.footWrap}>
                <TabBar
                    unselectedTintColor='#949494'
                    tintColor='#33A3F4'
                    barTintColor='white'
                    tabBarPosition='bottom'
                    hidden={this.state.hidden}
                >
                    {
                        MENUS.map((item) => {
                            return (
                                <TabBar.Item
                                    title={item.title}
                                    icon={
                                        <img src={item.icon}/>
                                    }
                                ></TabBar.Item>
                            );
                        })
                    }

                </TabBar>
            </div>
        );
    }
}

export default Layout;
