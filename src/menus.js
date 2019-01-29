import antdMenus from './menus-ant-design-example';
/*
* 菜单数据 返回Promise各式，支持前端硬编码、异步获取菜单数据
* */
export default function getMenus(userId) {
    // TODO 根据userId获取菜单数据 或在此文件中前端硬编码菜单
    return Promise.resolve([
        {key: 'ajax', local: 'ajax', text: 'ajax请求', icon: 'api', path: '/example/ajax', order: 1000},
        {key: 'user', local: 'users', text: '用户列表', icon: 'user', path: '/example/users', order: 900},
        {key: 'role', local: 'roles', text: '角色列表 ', icon: 'team', path: '/example/roles', order: 800},
        {key: 'antDesign', local: 'antDesign', text: 'Ant Design组件扩展', icon: 'ant-design', order: 700},
    ].concat(antdMenus));
}
