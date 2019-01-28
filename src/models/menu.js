import {createAction} from 'redux-actions';
import {getTopNodeByNode} from '@/library/utils/tree-utils';
import {uniqueArray} from '@/library/utils';
import {getSelectedMenuByPath} from '../commons';

export const types = {
    GET_MENU_STATUS: 'MENU:GET_MENU_STATUS',    // 防止各个模块冲突，预订[模块名:]开头
};

export default {
    initialState: {
        loading: false,         // 请求菜单loading
        menus: [],              // 菜单数据，树状结构
        openKeys: [],           // 当前展开菜单keys
        selectedMenu: [],       // 当前选中菜单
        topMenu: [],            // 当前选中菜单的顶级菜单
        keepOtherOpen: false,   // 点击菜单进入页面时，保持其他菜单打开状态
    },
    syncState: {
        openKeys: true,
        selectedMenu: true,
        topMenu: true,
        keepOtherOpen: true,
    },

    setKeepOtherOpen: (keepOtherOpen) => ({keepOtherOpen}),
    setOpenKeys: (openKeys) => ({openKeys}),
    setMenus: (menus) => ({menus}),
    getMenuStatus: (arg, state) => {
        const path = window.location.pathname;
        const {keepOtherOpen} = state;
        let openKeys = [...state.openKeys];
        let selectedMenu = getSelectedMenuByPath(path, state.menus);
        let topMenu = {};

        // 如果没有匹配到，使用上一次菜单
        if (!selectedMenu && path !== '/') { // 首页除外
            selectedMenu = state.selectedMenu;
        }

        if (selectedMenu) {
            topMenu = getTopNodeByNode(state.menus, selectedMenu);
            const parentKeys = selectedMenu.parentKeys || [];

            openKeys = keepOtherOpen ? openKeys.concat(parentKeys) : [...parentKeys];

            openKeys = uniqueArray(openKeys);
        }
        return {
            topMenu,
            selectedMenu,
            openKeys,
        };
    },
}

