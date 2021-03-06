'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

function getMinMax(str) {
    let arr = str.split("");
    let arrNumeric = [];
    let obj = {};
    
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    for (let i = 0; i < arr.length; i++) {
        let tmp = [];
        while (arr[i] && isNumeric(arr[i]) || arr[i] === '.' || arr[i] === '-') {
            if (arr[i] === '.' && ~tmp.indexOf('.')) break;
            if (arr[i] === '-' && ~tmp.indexOf('-')) break;
            tmp.push(arr[i]);
            i++;
        }
        if (tmp.join('') !== '-' && tmp[0]) arrNumeric.push(tmp.join(''));
    }

    if (arrNumeric[0]) {
        obj.max = obj.min = arrNumeric[0];
        for (let i = 0; i < arrNumeric.length; i++) {
            if (+obj.min > +arrNumeric[i]) {
                obj.min = +arrNumeric[i];
            } else if (+obj.max < +arrNumeric[i]) {
                obj.max = +arrNumeric[i];
            }
        }
    }
    return obj;
}
