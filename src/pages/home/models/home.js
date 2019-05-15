import { getRankList } from '../../../services';

import icon1 from '../../../assets/avatar/icon_lvone.png';
import icon2 from '../../../assets/avatar/icon_lvtwo.png';
import icon3 from '../../../assets/avatar/icon_lvthree.png';

export default {
    namespace: 'home',
    state: {
        rankingList: []
    },
    effects: {
        * getRankList({ payload, callback }, { call, put }) {
            // const response = yield call(getRankList, payload);
            // console.log(response);
            yield put({
                type: 'save',
                payload: {
                    rankingList: [{ no: 1, img: icon1 }, { no: 2, img: icon2 }, { no: 3, img: icon3 }]
                },
            });
        },
    },
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
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
