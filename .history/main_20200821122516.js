axios.get('https://api.github.com/users/Orifiel')
.then(function (response) {
    console.log(response)
})
.catch(function (error){
    console.log(error)
})