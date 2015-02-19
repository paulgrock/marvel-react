var fetch = require('node-fetch');

module.exports = function(path) {
    return fetch(`http://localhost:8000/${path}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function(res) {
            return res.json();
    }).then((data)=>{
        return data.data.results;
    }).catch(function(){
        console.log(arguments);
    });
}
