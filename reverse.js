const reverse = (list) => {
    if (list.length < 2) { 
        return list;
    }
    let i = 0, j = list.length - 1, temp = [];
    while (i <= j) {
        temp[i] = list[j];
        temp[j] = list[i];
        i++;
        j--;
    }
    return Array.isArray(list) ? temp : temp.join('');
};

console.log(reverse('123'));
console.log(reverse([1,2]));
console.log(reverse([1,'2',3,'4', 5,'6']));
console.log(reverse('Let\'s try reverse'));
