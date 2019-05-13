export default {
    namespace: 'login',
    state: {
        userInfo: {
            name: '周瀚文'
        }
    },
    effects: {
        * reg({ payload, callback }, { call, put }) {
            // const response = yield call(reg, payload);
            // yield put({
            //     type: 'setData',
            //     payload: response.data,
            // });
        },
    },
    reducers: {
        setData(state, { payload }) {
            return { ...payload };
        },
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, search }) => {
                console.log(pathname, search);
            });
        },
    },
};
