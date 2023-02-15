const JobTemplate = document.querySelector("[data-job-template]")
const JobContainer = document.querySelector("[data-jobs-container]")
const searchInput = document.querySelector("[data-search]")


let jobs = []

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    jobs.forEach( job => {
        const isVisible = job.name.toLowerCase().includes(value) ||
        job.salary.toLowerCase().includes(value) ||
        job.location.toLowerCase().includes(value)
        job.element.classList.toggle("hide",!isVisible)
    })
})

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        jobs = data.map(job => {
      
        const card = JobTemplate.content.cloneNode(true).children[0]
            const cname = card.querySelector("[data-name]")
            const salary = card.querySelector("[data-salary]")
            const location = card.querySelector("[data-location]")
            cname.textContent = job.name
            salary.textContent = job.address.zipcode
            location.textContent = job.address.city
            JobContainer.append(card)
            return { name: job.name, salary: job.address.zipcode, location: job.address.city, element: card}

    })
    })

