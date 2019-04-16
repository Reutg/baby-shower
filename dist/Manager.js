class Manager {
    constructor(baby) {
        this.baby = baby
    }

    async getBabyFromDB() {
        let baby = await $.get('/baby')
        this.baby = baby
    }

    async saveBaby(){
        let baby = await $.post('/baby')
        this.baby = baby
    }

    async removeBaby(name){
        await $.ajax({
            methode: "DELETE",
            url: `/baby/${name}`
        })
    }
}