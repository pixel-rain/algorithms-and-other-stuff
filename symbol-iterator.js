const days = { //without generator
    body: {
        0: 'Monday',
        1: 'Tuesday',
        2: 'Wednesday',
        3: 'Thursday',
        4: 'Friday',
        5: 'Saturday',
        6: 'Sunday'
    },
    [Symbol.iterator]() {
        const body = this.body;
        const bodyKeys = Object.keys(body);
        return {
            next() {
                if (bodyKeys.length === 0) {
                    return {
                        value: undefined,
                        done: true
                    };
                }
                let bodyKey = bodyKeys[0];
                bodyKeys.shift();
                return {
                    value: body[bodyKey],
                    done: false
                };
            }
        };
    }
};

for (let day of days) {
    console.log(day);
}

const days_gen = { //with generator
    body: {
        0: 'Monday',
        1: 'Tuesday',
        2: 'Wednesday',
        3: 'Thursday',
        4: 'Friday',
        5: 'Saturday',
        6: 'Sunday'
    },
    [Symbol.iterator]:  function*() {
        const bodyKeys = Object.keys(this.body);
        for (let key of bodyKeys) {
            yield this.body[key];
        }
    }    
};

for (let day of days_gen) {
    console.log(day);
}

function Iterable(length) { //generator with a constructor function
    this.length = length;
}
Iterable.prototype[Symbol.iterator] = function*() {
    for (let i=0; i < this.length; i++) {
        yield (Math.random().toFixed(2) * 2).toFixed(2);
    }
}

const it = new Iterable(6);
console.log([... it]);
