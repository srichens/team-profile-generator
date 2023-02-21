
function generateEngineer(newEngineer) {
    let cards = document.querySelector('#cards');
    let newP = document.createElement('p');
    let text = document.createTextNode(newEngineer.getName());
    newP.appendChild(text);
    cards.appendChild(newP);

    // cards.insertAdjacentHTML('beforeend', '<section class="basis-full md:basis-2/5 lg:basis-1/4 bg-gray-300 mx-5 my-10 shadow-xl shadow-gray-500/70"></section>');
    // cards.insertAdjacentHTML('beforeend', '<h2 class="text-white bg-blue-600 p-5"><h2>');
    // cards.insertAdjacentHTML('beforeend', '<p class="name text-2xl"></p>');
    // cards.insertAdjacentHTML('beforeend', '<p class="role text-xl"></p>');
    // cards.insertAdjacentHTML(before)
      
//    function engineerText(newEngineer) {
//     return `


// <h2 class="text-white bg-blue-600 p-5">
//     <p class="name text-2xl">${newEngineer.getName()}</p>
//     <p class="role text-xl">${newEngineer.getRole()}</p>
// </h2>
// <p class="id bg-white p-5 mx-5 mt-10 mb-2">ID: <span>${newEngineer.getId()}</span></p>
// <p class="email bg-white p-5 mx-5 my-2">Email: <span>${newEngineer.getEmail()}</span></p>


// `
//    }
}
module.exports = generateEngineer;