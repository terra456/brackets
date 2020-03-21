module.exports = function check(str, bracketsConfig) {

  const arr = Array.from(str);

    for (let i=0; i<arr.length; i++) {

        var twoArr = arr[i]+arr[i+1];

        for (let j=0; j<bracketsConfig.length; j++) {
            var con = bracketsConfig[j].join('');
            if (twoArr == con) {
                var removed = arr.splice(i, 2);
                 i=i-2;

            }

        }

     }


    if (arr.length == 0) {
        return true;

    } else {
        return false;
    }

}
