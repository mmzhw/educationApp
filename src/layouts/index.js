import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import styles from './index.less';

import menu1 from '../assets/menu/menu1.png';
import menu2 from '../assets/menu/menu2.png';
import menu3 from '../assets/menu/menu3.png';
import menu4 from '../assets/menu/menu4.png';
import menu5 from '../assets/menu/menu5.png';
import menu6 from '../assets/menu/menu6.png';

const menus = [
    { title: '首页', icon: menu1 },
    { title: '体育', icon: menu2 },
    { title: '评价', icon: menu3 },
    { title: '学校', icon: menu4 },
    { title: '商城', icon: menu5 },
    { title: '我的', icon: menu6 },
];

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
                        menus.map((item) => {
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
