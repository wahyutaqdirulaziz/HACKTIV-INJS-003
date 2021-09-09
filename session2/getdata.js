const api = require('axios')

api.get('https://reqres.in/api/users?page=2')
    .then((response) => {
        console.log(response.data)
    }).catch((err) => {
    {
        console.log(err)
    };
})
