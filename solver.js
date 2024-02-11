const topNum = 12;
const bottomNum = -7;

if (topNum>0) {
    for (var i = 0; i<topNum; i++) {
        if (((topNum/i)%1 == 0) && i != 0) {
            if (((topNum/i)+i)==bottomNum) {
                console.log(`the answer is ${i} and ${topNum/i}`)
            }
        }
    }
    for (var i = 0; i>-topNum; i--) {
        if (((topNum/i)%1 == 0) && i != 0) {
            if (((topNum/i)+i)==bottomNum) {
                console.log(`the answer is ${i} and ${topNum/i}`)
            }
        }
    }
} else {
    for (var i = 0; i>topNum; i--) {
        if (((topNum/i)%1 == 0) && i != 0) {
            if (((topNum/i)+i)==bottomNum) {
                console.log(`the answer is ${i} and ${topNum/i}`)
            }
        }
    }
    for (var i = 0; i<-topNum; i++) {
        if (((topNum/i)%1 == 0) && i != 0) {
            if (((topNum/i)+i)==bottomNum) {
                console.log(`the answer is ${i} and ${topNum/i}`)
            }
        }
    }
}
