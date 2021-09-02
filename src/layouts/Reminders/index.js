import React from "react";
import "./reminder.css";
import { Table, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import Trash from "../../assets/images/trash.png";
import Edit from "../../assets/images/edit.png";

const columns = [
    {
        title: 'CLIENT ID',
        dataIndex: 'clientID',
        width: '100px'
    },
    {
        title: 'CLIENT CREATION DATE',
        dataIndex: 'Cdate',
        width: '200px'
    },
    {
        title: 'NEXT  REMINDER',
        dataIndex: 'reminder',
        width: '200px'
    },
    {
        title: 'CLIENT FULL NAME',
        dataIndex: 'name',
        width: '200px'
    },
    {
        title: 'EMAIL',
        dataIndex: 'email',
        width: '200px'
    },
    {
        title: '',
        dataIndex: 'action',
        width: '70px'
    },
];

const data = [];
for (let i = 0; i < 6; i++) {
    data.push({
        key: i,
        clientID: 5465,
        Cdate: "3/09/2021",
        reminder: "3/09/2021",
        name: "Edward King",
        email: "example@gmail.com",
        action: (<div style={{ display: "flex", justifyContent: "space-between" }}>
            <img src={Trash} alt="icon" />
            <img src={Edit} alt="icon" style={{ marginLeft: "10px" }} />
        </div>),
    });
}

const dropdownMenu = (
    <Menu>
        <Menu.Item key="0">
            <a href="">1st</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="">2nd</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="">3rd</a>
        </Menu.Item>
    </Menu>
)

class Reminder extends React.Component {
    state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
    };


    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };

    render() {
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <h4 className="pgHeading">Reminders</h4>
                <div className="tableOptions">
                    <button>
                        Delete All Selected
                    </button>
                    <Dropdown overlay={dropdownMenu} trigger={['click']}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            Sort by Creation Date <DownOutlined />
                        </a>
                    </Dropdown>
                </div>
                <div style={{ marginBottom: 16 }}>
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                    </span>
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} scroll={{ x: 800, }} />
            </div>
        );
    }
}

export default Reminder;
