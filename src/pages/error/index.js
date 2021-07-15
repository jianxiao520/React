import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
export default (props) => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="很抱歉，您访问的页面不存在！！"
            extra={
                <Link to="/">
                    <Button type="primary">返回首页</Button>
                </Link>
            }
        />
    )
};