'use strict';

const sortByCategory = (list, categoryName) => {
    list.sort((category1, category2) => {
        return String(category1[categoryName]).localeCompare(String(category2[categoryName]));
    })
};

const sortByDate = list => {
    list.sort((category1, category2) => {
        return new Date(category1.releaseDate).getTime() - new Date(category2.releaseDate).getTime();
    })
};

const filterByCategory = (list, categoryType, name) => list.filter(item => item[categoryType] === name);


export {sortByCategory, sortByDate, filterByCategory};