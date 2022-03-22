class Profile{
    constructor(){
        this.clientid = "";
        this.clientSecret = "";

    }

    async getProfile(usarname){
        const profileResponse = await fetch(`https://jsonplaceholder.typicode.com/users?username=${usarname}`)

        const profile = await profileResponse.json()

        return {
            profile
        }
    }
}