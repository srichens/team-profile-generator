function generateIntern(newIntern) {
    
      
    return `

<section class="manager basis-full md:basis-2/5 lg:basis-1/4 bg-gray-300 mx-5 my-10 shadow-xl shadow-gray-500/70">
<h2 class="text-white bg-blue-600 p-5">
    <p class="name text-2xl">${newIntern.getName()}</p>
    <p class="role text-xl">${newIntern.getRole()}</p>
</h2>
<p class="id bg-white p-5 mx-5 mt-10 mb-2">ID: <span>${newIntern.getId()}</span></p>
<p class="email bg-white p-5 mx-5 my-2">Email: <span>${newIntern.getSchool()}</span></p>

</section>
`
}
module.exports = generateIntern;