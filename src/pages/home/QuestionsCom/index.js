import { Table, Input, Button, Space, Tag } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { queryAllQuestion } from '../../../service/QuestionService';
import { Link } from 'react-router-dom';
class QuestionsCom extends Component {
    state = {
        data: [],
        searchText: '',
        searchedColumn: '',
        loading: false,
    };

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        搜索
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        重置
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            this.setState({
                                searchText: selectedKeys[0],
                                searchedColumn: dataIndex,
                            });
                        }}
                    >
                        过滤
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select(), 100);
            }
        },
        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    componentDidMount() {
        this.setState({ loading: true });

        // 获取全部题目
        queryAllQuestion().then(data => {
            console.log(data);

            this.setState({
                loading: false,
                data: data.data.message,
            })
        }).catch(this.setState({ loading: false }));
    }

    render() {
        const columns = [
            {
                title: '序号',
                dataIndex: 'id',
                key: 'State',
                width: '8%',
                render: id => {
                    return (
                        <Tag color="blue">{id}</Tag>
                    )
                }
            },
            {
                title: '题目',
                dataIndex: 'title',
                key: 'title',
                width: '40%',
                ...this.getColumnSearchProps('title'),
                render: (title, obj) => {
                    return (
                        <Link to={`/QuestionInfo?id=${obj.id}`} >{title}</Link>
                    )
                }
            },
            {
                title: '更新时间',
                dataIndex: 'datetime',
                key: 'datetime',
                width: '30%',
                sorter: (a, b) => a.datetime > b.datetime,
                sortDirections: ['descend', 'ascend'],
                render: datetime => {
                    console.log(datetime);
                    return datetime.substring(0, datetime.indexOf("T"))
                }
            },
            {
                title: '完成数',
                dataIndex: 'amountCompleted',
                key: 'amountCompleted',
                width: '20%',
                sorter: (a, b) => a.amountCompleted > b.amountCompleted,
                sortDirections: ['descend', 'ascend'],
            },
            {
                title: '难度',
                dataIndex: 'difficulty',
                key: 'difficulty',
                filters: [
                    { text: '简单', value: '简单' },
                    { text: '中等', value: '中等' },
                    { text: '困难', value: '困难' },
                ],
                onFilter: (value, record) => record.difficulty === value,
                render: difficulty => {
                    let color;
                    switch (difficulty) {
                        case '困难':
                            color = 'volcano';
                            break;
                        case '中等':
                            color = 'geekblue';
                            break;
                        case '简单':
                            color = 'green';
                            break;
                        default:
                            color = 'green';
                            break;
                    }
                    return (
                        <Tag color={color} key={difficulty}>
                            {difficulty}
                        </Tag>
                    );
                },
            },
        ];
        const { data, loading } = this.state;
        return <Table
            size="middle"
            columns={columns}
            dataSource={data}
            loading={loading}
            rowKey="index"
        />;
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(QuestionsCom);
