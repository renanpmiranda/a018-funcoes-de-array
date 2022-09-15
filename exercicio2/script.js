array = [1,2,3,4,5,6,7,8]

const multiplicaPor3 = array.map((item,index,array) => {
        return item * 3
    })

const triplos = multiplicaPor3

const dividePor2 = array.map((item,index,array)=> {
    return item / 2
})

const metades = dividePor2

console.log(triplos, metades)