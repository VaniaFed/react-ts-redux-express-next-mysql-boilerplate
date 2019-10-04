import { stringify, parse } from 'query-string';

export const pushToHistory = params => {
    const existedHistoryData = parse(window.location.search);
    const dataToPush = {
        ...existedHistoryData,
        ...params
    };
    window.history.pushState(
        null,
        null,
        `search?${stringify(dataToPush, { sort: false })}`
    );
};
