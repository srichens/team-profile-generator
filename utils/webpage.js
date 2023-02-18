
function generateTeam(response) {
    addQuestion = response.add;   
return `
    ${generateManager(response)}
    ${generateEngineer(response)}
    ${generateIntern(response)}
    `

function generateManager() {  
    if(response.fullname){
    return `
Manager's name: ${response.fullname}
Manager's ID: ${response.id}
Manager's email: ${response.email}
Manager's office number: ${response.office}
`
} else {
    return ``
    }
    
}

function generateEngineer() {   
    if(response.eName){
        return `
Engineer's name: ${response.eName}
Engineer's ID: ${response.eid}
Engineer's email: ${response.eEmail}
Engineer's github: ${response.eGithub}
`
    } else {
        return ``
    }
}

function generateIntern() {   
    if(response.iName){
        return `
Intern's name: ${response.iName}
Intern's ID: ${response.iid}
Intern's email: ${response.iEmail}
Intern's github: ${response.iGithub}
`
    } else {
        return ``
    }

}

}

module.exports = generateTeam;
