const topNum = process.argv[1];
const bottomNum = process.argv[2];

if (topNum>0) {
    for (var i = 0; i<=topNum; i++) {
        if (((topNum/i)||0)%1 == 0) {
            if (((topNum/i)+i)==bottomNum) {
                console.log(`the answer is ${i} and ${topNum/i}`)
            }
            if (((topNum/-i)+i)==bottomNum) {
                console.log(`the answer is ${i} and ${topNum/i}`)
            }
        }
    }
    for (var i = 0; i>=-topNum; i--) {
        if (((topNum/i)||0) == 0) {
            if (((topNum/i)+i)==bottomNum) {
                console.log(`the answer is ${i} and ${topNum/i}`)
            }
            if (((topNum/-i)+i)==bottomNum) {
                console.log(`the answer is ${i} and ${topNum/i}`)
            }
        }
    }
} else {
    for (var i = 0; i>=topNum; i--) {
        if (((topNum/i)||0)%1 == 0) {
            if (((topNum/i)+i)==bottomNum) {
                console.log(`the answer is ${i} and ${topNum/i}`)
            }
            if (((topNum/-i)+i)==bottomNum) {
                console.log(`the answer is ${i} and ${topNum/i}`)
            }
        }
    }
    for (var i = 0; i<=-topNum; i++) {
        if (((topNum/i)||0)%1 == 0) {
            if (((topNum/i)+i)==bottomNum) {
                console.log(`the answer is ${i} and ${topNum/i}`)
            }
            if (((topNum/-i)+i)==bottomNum) {
                console.log(`the answer is ${i} and ${topNum/i}`)
            }
        }
    }
}
