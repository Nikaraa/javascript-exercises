
const repeatString = function(string, num) {
    let res=string;
    for(let i=0;i<num-1;i++){
        res+=string;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
