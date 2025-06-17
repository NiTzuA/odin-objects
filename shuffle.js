let arr = [1, 2, 3];

function shuffle(numArr) {
    let array = [...numArr];
    let shuffledArr = [];
    while (array.length > 0) {
        let randomIndex = Math.floor(Math.random() * array.length);
        let [element] = array.splice(randomIndex, 1);
        shuffledArr.push(element);
    }
    return shuffledArr;
}

alert(shuffle(arr));