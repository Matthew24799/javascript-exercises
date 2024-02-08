const removeFromArray = function(array, ...thearg) {
const newArray = [];
    array.forEach((item) => {

        if(!thearg.includes(item)) {
            newArray.push(item);
        }
});
return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;
