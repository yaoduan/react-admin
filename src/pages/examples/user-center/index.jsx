import React, {Component} from 'react';
import {Button, Input, Select} from 'antd';
import PageContent from '@/layouts/page-content';
import FixBottom from '@/layouts/fix-bottom';
import Library from '@/library/Library';

export const PAGE_ROUTE = '/example/users';

const {Option} = Select;

export default class index extends Component {
    state = {};

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        console.log('user center render');
        return (
            <PageContent>
                <div>
                    <Input style={{width: 100}} placeholder="请输入"/>
                    <Select style={{width: 100}} placeholder="请选择">
                        <Option value="java">Java</Option>
                        <Option value="javascript">Java Script</Option>
                    </Select>
                </div>
                测试一下library中的less是否使用了css module
                <Library/>
                用户中心
                <div style={{height: 200, background: 'red'}}></div>
                <FixBottom>
                    <Button>按钮</Button>
                    <Button type="primary">按钮</Button>
                </FixBottom>
            </PageContent>
        );
    }
}
