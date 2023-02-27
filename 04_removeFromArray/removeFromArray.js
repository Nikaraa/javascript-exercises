const removeFromArray = function(array, ...args) {
    const res=[];
    array.forEach(element => {
        if(!args.includes(element)){
            res.push(element);
        }
    });
    return res;
};

// Do not edit below this line
module.exports = removeFromArray;
