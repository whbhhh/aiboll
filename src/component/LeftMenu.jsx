import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Icon, Button } from 'antd';
import menuconfig from '../config/menuConfig';
import './css/LeftMenu.less'

const { SubMenu } = Menu;




class LeftMenu extends React.Component {


    state = {
        collapsed: false
    }


    componentWillMount() {
        const menuTreeNode = this.renderMenu(menuconfig);
        this.setState({ menuTreeNode })
    }

    renderMenu = (menuConfig) => {
        return menuConfig.map((item) => {
            if (item.childern) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.childern)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
        })
    }

    render() {
        return (
            <div>
                <Menu className='left-container'
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}>
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}

export default LeftMenu;