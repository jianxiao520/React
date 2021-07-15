import React from 'react';
import { Switch } from 'react-router-dom';
import FrontendAuth from './router/FrontendAuth';

import routerMap from "./router/routerMap";
export default (
    <div>
        <Switch>
            {/* 路由跳转均交由FrontendAuth高阶组件处理 */}
            <FrontendAuth routerConfig={routerMap} />
        </Switch>
    </div>
)