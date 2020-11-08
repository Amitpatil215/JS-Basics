

const converToRs = (doller) => {
    if (typeof doller === 'number') {
        return doller * 64;
    } else {
        throw Error('Amount needs to be in numbers')
    }

}

try {
    const myValue = converToRs('yv')
    console.log(myValue);
} catch (error) {
    console.log(error.message);
}

console.log("Am I running?");