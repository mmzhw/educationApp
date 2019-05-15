import request from '../utils/request';

export function getRankList(body) {
    return request.post('/getRankList', body);
}
