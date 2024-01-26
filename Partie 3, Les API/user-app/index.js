//https://randomuser.me/api/?results=24
let userData = []; 

const fetchUser = async () => {    
    await fetch('https://randomuser.me/api/?results=24')
    .then((res) => res.json())
    .then((data) => userData = data.results)
    console.log(userData);
}

const userDisplay = async () => {
    await fetchUser()

    const dateParser = (date) => {
        let newDate = new Date('date').toLocaleDateString("fr-FR", {
            year: "numeric",
            month: 'long',
            day: 'numeric',
        })
        return newDate
    }

    const dayCalc = (date) => {
        let today = new Date()
        let todayTimeStamp = Date.parse(today)
        let timeStamp = Date.parse(date)
        return (Math.ceil(todayTimeStamp - timeStamp) / 8.64e7);
    }

    document.body.innerHTML = userData.map((user) => 
        `
        <div class="card">
        <img src="${user.picture.large}" alt="photo de ${user.name.last} "/>
        <h3> ${user.name.title} ${user.name.first} ${user.name.last} </h3>
        <p>${user.location.city} le ${dateParser(user.dob.date)} </p>
        <p>Age: ${user.dob.age}</p>
        <em> Membre depuis : ${dayCalc(user.registered.date)} jours</em>
        </div>
        `
    ).join("")
}

userDisplay()