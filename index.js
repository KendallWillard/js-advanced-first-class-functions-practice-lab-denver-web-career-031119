// Code your solution in this file!
function logDriverNames(drivers) {
    drivers.map(function(elem) {
         console.log(elem.name);
    }) 
}

function logDriversByHometown(drivers, location) {
    let result = drivers.filter(function(elem) { 
       return elem.hometown === location
    } )
    result.map(function(elem) {
        console.log(elem.name);
    } )
}

function driversByRevenue(drivers) {
    let sortedRevenues = drivers.slice().sort(function (alpha, beta) {
        let alphaRevenue = alpha.revenue.toString();
        let betaRevenue = beta.revenue.toString();
        return alphaRevenue.localeCompare(betaRevenue);
    })
    return sortedRevenues;
}

function driversByName(drivers) {
    let sortedDrivers = drivers.slice().sort(function (alpha, beta) {
        return alpha.name.toString().localeCompare(beta.name.toString())
    })
    return sortedDrivers;
}

function totalRevenue(drivers) {
    const sumOfRevenues = drivers.reduce(function(agg, elem) {
        return agg + elem.revenue;
    }, 0)
    return sumOfRevenues;
}

function averageRevenue(drivers) {
    let averageRevenues = totalRevenue(drivers);
    return(averageRevenues / drivers.length-1 ) + 1 
}
