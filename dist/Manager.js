class Manager {
    constructor() {
        this.baby
        this.babiesList = []
        this.guests = []
        this.tasks=[]
        this.date
    }

    async getNameSuggestions(firstLetter, popularity, gender) {
        let babies = await $.get(`/babyNames/${firstLetter}/${popularity}/${gender}`)
        let babyListNames = babies[0].map(b => { return { name: b.name } })
        this.babiesList = babyListNames
    }

    async getBabyFromDB() {
        let baby = await $.get('/baby')
        this.baby = baby
    }

    async saveBaby(inputName) {
        await $.post('/baby', { name: inputName })
        this.baby = inputName
    }

    async removeBaby(name) {
        await $.ajax({
            methode: "DELETE",
            url: `/baby/${name}`
        })
    }

    async getGuestsFromDB(){
        let guests = await $.get('/guests')
        this.guests = guests
    }

    async saveGuest(newGuest){
        let savedGuest = await $.post('/guests', {name: newGuest})
        this.guests.push(savedGuest)
    }

    async removeGuest(id){
        await $.ajax({
            method: "DELETE",
            url: `/guests/${id}`
        })

        this.guests = this.guests.filter(guest => guest._id != id)
    }

    //todo: change the route to ajax and change the route name to be different than the saveNote route
    async rsvpGuest(guestID){
        let guestIndex = this.guests.findIndex(guest => guest._id == guestID)
        await $.put('/guests', this.guests[guestIndex])
        this.guests[guestIndex].rsvp = true
    }

    async rsvpGuest(guestID){
        let guestIndex = this.guests.findIndex(guest => guest._id == guestID)
        let updatedGuest = await $.ajax({
            type: "PUT",
            url: `guests/${guestID}/rsvp`,
            data: {rsvp: true}
        })
        this.guests[guestIndex] = updatedGuest 
        
    }

    async saveNote(note,guestID){
        let guestIndex = this.guests.findIndex(guest => guest._id == guestID)
        let updatedGuest = await $.ajax({
            type: "PUT",
            url: `/guests/${guestID}`,
            data: {note}
        })
        this.guests[guestIndex] = updatedGuest
    }
    async getTasksFromDB(){
        let tasks = await $.get('/tasks')
        this.tasks = tasks
    }
    async saveTasks(newTask,cost){
        // console.log(cost)
        let savedTask = await $.post('/tasks', {task: newTask, cost: cost})
        this.tasks.push(savedTask)
    }
    async removeTask(idTask){
        await $.ajax({
            method: "DELETE",
            url: `/tasks/${idTask}`
        })
    this.tasks = this.tasks.filter(task => task._id != idTask)
    }

    async checkedTask(taskID){
        let taskIndex = this.tasks.findIndex(task => task._id == taskID)
        let updatedTask = await $.ajax({
            type: "PUT",
            url: `tasks/${taskID}/checked`,
            data: {checked: true}
        })
        this.tasks[taskIndex] = updatedTask    
    }

    // async saveCost(cost,taskID){
    //     debugger
    //     let taskIndex = this.tasks.findIndex(task => task._idTask == TaskID)
    //     let updatedCost = await $.ajax({
    //         type: "PUT",
    //         url: `/tasks/${taskID}`,
    //         data: {cost}
    //     })
    //     this.tasks[taskIndex] = updatedCost
    // }

    async getDateFromDB(){
        let date = await $.get('/date')
        this.date = date
    }

    async saveDate(date){
        // console.log(date)
        await $.post(`/date/:${date}`)
        this.date = date
    }

    async removeDate(){
        await $.ajax({
            method: "DELETE",
            url: '/date'
        })
    }

    

    
}