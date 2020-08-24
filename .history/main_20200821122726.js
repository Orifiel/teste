axios.get('https://api.1github.com/users/Orifiel')
.then(function (response) {
    console.log(response.data.avatar_url)
})
.catch(function (error){
    console.log(error)
})