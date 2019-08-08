import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import Header from './Header';
import LeftMenu from './LeftMenu';

class Home extends React.Component {

    render() {
        return (
            <div>
                <Row>
                    <Header/>
                </Row>

                <Col span={3}>
                    <LeftMenu />
                </Col>
                <Col span={21}>
                    {this.props.children}
                </Col>
            </div>

        )
    }
}

export default Home;