function generateTeam(response) {
return `Manager's name: ${response.fullname}
Manager's ID: ${response.id}
Manager's email: ${response.email}
Manager's office number: ${response.office}`

}

module.exports = generateTeam;