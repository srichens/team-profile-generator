const manager = managerInfo => {
    return `
    <section class="manager basis-full md:basis-2/5 lg:basis-1/4 bg-gray-300 mx-5 my-10 shadow-xl shadow-gray-500/70">
    <h2 class="text-white bg-blue-600 p-5">
            <p class="name text-2xl">${managerInfo.getName()}</p>
            <p class="role text-xl">${managerInfo.getRole()}</p>
    </h2>
    <p class="id bg-white p-5 mx-5 mt-10 mb-2">ID: ${managerInfo.getId()}</p>
    <p class="email bg-white p-5 mx-5 my-2">Email: ${managerInfo.getEmail()}</p>  
    <p class="officeNumber bg-white p-5 mx-5 mt-2 mb-10">Office number: ${managerInfo.getOfficeNumber()}</p>
</section>   
`
}

const engineer = engineerInfo => {
    return `
    <section class="engineer basis-full md:basis-2/5 lg:basis-1/4 bg-gray-300 mx-5 my-10 shadow-xl shadow-gray-500/70">
    <h2 class="text-white bg-blue-600 p-5">
            <p class="name text-2xl">${engineerInfo.getName()}</p>
            <p class="role text-xl">${engineerInfo.getRole()}</p>
    </h2>
    <p class="id bg-white p-5 mx-5 mt-10 mb-2">ID: ${engineerInfo.getId()}</p>
    <p class="email bg-white p-5 mx-5 my-2">Email: ${engineerInfo.getEmail()}</p> 
    <p class="github bg-white p-5 mx-5 mt-2 mb-10">GitHub Profile: ${engineerInfo.getGithub()}</p> 
</section>   
`
}

const intern = internInfo => {
    return `
    <section class="intern basis-full md:basis-2/5 lg:basis-1/4 bg-gray-300 mx-5 my-10 shadow-xl shadow-gray-500/70">
    <h2 class="text-white bg-blue-600 p-5">
            <p class="name text-2xl">${internInfo.getName()}</p>
            <p class="role text-xl">${internInfo.getRole()}</p>
    </h2>
    <p class="id bg-white p-5 mx-5 mt-10 mb-2">ID: ${internInfo.getId()}</p>
    <p class="email bg-white p-5 mx-5 my-2">Email: ${internInfo.getEmail()}</p>  
    <p class="school bg-white p-5 mx-5 mt-2 mb-10">School: ${internInfo.getSchool()}</p>
</section>   
`
}

const teamSection = team => {
    let teamHtml = '';
    for (i = 0; i < team.length; i++) {
        if(team[i].getRole() === 'Manager') {
            teamHtml = teamHtml + manager(team[i])
        }
        if(team[i].getRole() === 'Engineer') {
            teamHtml = teamHtml + engineer(team[i])
        }
        if(team[i].getRole() === 'Intern') {
            teamHtml = teamHtml + intern(team[i])
        }
    } return teamHtml;
}

const webpage = data => {     
  
   
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Document</title>
</head>
<body>
    <header class="bg-red-500 text-white py-10 mx-5 text-5xl text-center">
        <h1>My Team</h1>
    </header>
 
    <main id="cards" class="flex flex-row flex-wrap justify-center">
    ${teamSection(data)}
    </main>    
</body>
</html>  
        
    `  
    
}
 
    module.exports = webpage;
    