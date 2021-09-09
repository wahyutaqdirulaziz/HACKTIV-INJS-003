data = [

    {
        nama : "wahyu",
        kelas : "tes"
    },
    {
        nama : "ozi",
        kelas : "tes"
    }

]


// const result = data.filter(data => data.nama !== "wahyu");

var users = [
    {id: 1, firstname: 'John', lastname: 'Ken'},
    {id: 2, firstname: 'Robin', lastname: 'Hood'},
    {id: 3, firstname: 'William', lastname: 'Cook'}
    ];
    
    var editedUser = {id: 2, firstname: 'Michael', lastname: 'Angelo'};
    
    users = users.map(u => u.id !== editedUser.id ? u : editedUser);
    
    console.log('users -> ', users);
// console.log(result)
