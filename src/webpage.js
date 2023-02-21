function generateWebpage(newEmployee) {     
  
   
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
        <h1 >My Team</h1>
    </header>
 
    <main id="cards" class="flex flex-row flex-wrap justify-center">
    <section class="manager basis-full md:basis-2/5 lg:basis-1/4 bg-gray-300 mx-5 my-10 shadow-xl shadow-gray-500/70">
    <h2 class="text-white bg-blue-600 p-5">
            <p class="name text-2xl">${newEmployee.getName()}</p>
            <p class="role text-xl">${newEmployee.getRole()}</p>
    </h2>
    <p class="id bg-white p-5 mx-5 mt-10 mb-2">ID: <span>${newEmployee.getId()}</span></p>
    <p class="email bg-white p-5 mx-5 my-2">Email: <span>${newEmployee.getEmail()}</span></p>  
</section>   
    </main>    
</body>
</html>  
        
    `
    // function generateEmployee(newEmployee) {
    
      
    //         return `

    // <section class="manager basis-full md:basis-2/5 lg:basis-1/4 bg-gray-300 mx-5 my-10 shadow-xl shadow-gray-500/70">
    //     <h2 class="text-white bg-blue-600 p-5">
    //             <p class="name text-2xl">${newEmployee.getName()}</p>
    //             <p class="role text-xl">${newEmployee.getRole()}</p>
    //     </h2>
    //     <p class="id bg-white p-5 mx-5 mt-10 mb-2">ID: <span>${newEmployee.getId()}</span></p>
    //     <p class="email bg-white p-5 mx-5 my-2">Email: <span>${newEmployee.getEmail()}</span></p>  
    // </section>   
   
   
    //     `
        
   // }
    // <p class="officeNumber bg-white p-5 mx-5 mt-2 mb-10">Office number: <span>${newEmployee.getOfficeNumber()}</span></p>
    // Name: ${newEmployee.getName()}
    // Title: ${newEmployee.getRole()}
    // Employee ID: ${newEmployee.getId()}
    // Email: ${newEmployee.getEmail()}
    // Office Number: ${newEmployee.getOfficeNumber()}
    // GitHub Profile: ${newEmployee.getGithub()}
    // School: ${newEmployee.getSchool()}
    // Name: ${newEmployee.getName()}
    // Office Number: ${newEmployee.getOfficeNumber()}
    // Title: ${newEmployee.getRole()}
    // return `
    //     ${generateEmployee(newEmployee)}       
    //     `
    
    // function generateEmployee(newEmployee) {  
    //     if(newEmployee.role == 'Manager'){
           
    //     return `
    // Name: ${Manager.getName()}
    // Title: ${Manager.getRole()}
    // ID: $${Manager.getId()}
    // Email: ${Manager.getEmail()}
    // Office number: ${Manager.getOfficeNumber()}
    // `
    //     } else if (newEmployee.role === 'Engineer') {
    //     return `
    // Name: ${newEmployee.getName()}
    // Title: ${newEmployee.getRole()}
    // ID: $${newEmployee.getId()}
    // Email: ${newEmployee.getEmail()}
    // Office number: ${newEmployee.getGithub()}
    // `
    //     } else if (newEmployee.role === 'Intern') {
    //     return `
    // Name: ${newEmployee.getName()}
    // Title: ${newEmployee.getRole()}
    // ID: $${newEmployee.getId()}
    // Email: ${newEmployee.getEmail()}
    // Office number: ${newEmployee.getSchool()}
    // `
    //     } else {
    //     return ``
    //     }
        
    // }
   
    
}
    
    // module.exports = generateTeam;
    module.exports = generateWebpage;
    