import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';
import { Link } from "react-router-dom";

const { SubMenu } = Menu;
class Header extends React.Component {
   


    render() {
        return (
            <Menu  mode="horizontal" style={{textAlign:"right"}}>
                <Menu.Item key="mail">
                  
                    <a href="www.baidu.com">  <Icon type="mail" />邮箱</a>
                </Menu.Item>

                <SubMenu
                    title={'我的'}
                >
                    <Menu.Item key="logout">
                        <Link to='/logout'>退出</Link>
                    </Menu.Item>
                    <Menu.Item key="setting">
                        <Link to='setting'>设置</Link>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        点我去百度
          </a>
                </Menu.Item>
            </Menu>

        )
    }
}

export default Header;