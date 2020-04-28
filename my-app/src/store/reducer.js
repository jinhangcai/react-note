// reducer 必须为纯函数  就是 return出来的值 必须是通过store或者action产生的 不能在里面使用axios请求 或者 new Date这种不确定的数据
let defaultStore = {
    placeholder:'请输入',
    name: []
};
export default (store = defaultStore, action) => {
    console.log(store, action)
    if (action.type === 'changInput') {
        let Newaction = Object.assign({}, store);
        Newaction.placeholder = action.value;
        return Newaction;
    }
    if (action.type === 'addItem') {
        let Newaction = Object.assign({}, store);
        Newaction.name.push({a: Newaction.placeholder});
        Newaction.placeholder = '';
        return Newaction
    }
    if (action.type === 'deleteItem') {
        let Newaction = Object.assign({}, store);
        Newaction.name.splice(action.index, 1);
        return Newaction;
    }
    if (action.type === 'actionCreate') {
        let Newaction = Object.assign({}, store);
        Newaction.name = action.data.data;
        return Newaction;
    }
    return store;
}
