let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {
    let current = new Date(this.from.setHours(0, 0, 0));
    current.setDate(current.getDate() + 1);
    let last = this.to;



    return {
        next() {
            if (current <= last) {
                let day = current.getDay();
                let strDate = '';
                if (day === 0 || day === 6) {
                    if (current.getDate() < 10) {
                        strDate = '[0' + current.getDate() + ']';
                    } else {
                        strDate = '[' + current.getDate() + ']';
                    }
                } else {
                    if (current.getDate() < 10) {
                        strDate = '0' + current.getDate();
                    } else {
                        strDate = current.getDate().toString();
                    }                    
                }
                current.setDate(current.getDate() + 1);
                return {
                    done: false,
                    value: strDate
                };
            } else {
                return {
                    done: true
                };
            }
        }

    }
};
