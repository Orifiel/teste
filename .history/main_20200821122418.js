axios.get('https://api.github.com/users/Orifiel')
.then(() => (response) {
    console.log(response)
})
.catch(() => (error){
    console.log(error)
})