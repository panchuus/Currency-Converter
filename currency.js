
var url = "https://api.exchangeratesapi.io/latest?base=";
//es5
function convert(){
    var base = document.getElementById('base').value;
    var out = document.getElementById('out').value;
    var amount = document.getElementById('amount').value;
    var final;
    console.log(`${url}${base}`)
    fetch(`${url}${base}`,{method:'GET'})
    .then((response) => response.json())
    .then((data) => {
        final = data.rates;
        final = (final[out]*Number(amount))
        var result = `Converted Value of ${amount} ${base} is ${final} ${out}`
        document.getElementById('output').innerText=result
    })
}
/*function currency1(){
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var amount = document.getElementById('amount').value;

    var url =`https://api.exchangeratesapi.io/latest?base=${from}`;
    fetch(url,{ method: 'GET' })
    //resolve the data
    .then((response) => response.json())
    //use the data
    .then((data) => {
         var result = data.rates;
        var r = result[to] * Number(amount);
        document.getElementById('output').innerText = `Currency is ${r}`
    })

}*/

