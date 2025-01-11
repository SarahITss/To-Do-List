const colors = ['red','yellow','blue']

colors.forEach(function(currentValue, index, array){
    console.log(index,currentValue);
})

const ages = [12,45,74]

const hasAgae = ages.some(function(element){
    return element >= 18
})

console.log(hasAgae)

const everyAge = ages.every(function(element){
    return element >= 18
})

console.log(everyAge)

const inContainRed = colors.includes('red',1)
console.log(inContainRed)