document.addEventListener('DOMContentLoaded', function() {
    // Fetch JSON data
    fetch('index.json')
        .then(response => response.json())
        .then(data => {
            // Fill first paragraph
            document.querySelector('#para1 .home-col h2').textContent = data[0].Title;
            const para1Text = data[0].paragraphs ? data[0].paragraphs.join(' ') : '';
            document.querySelector('#para1 .home-col p').textContent = para1Text;

            // Fill second paragraph and ordered list
            document.querySelector('#para2 .home-col h2').textContent = data[1].Title;
            document.querySelector('#para2 .home-col p').textContent = data[1]['paragraphs'];
            const orderedList = document.querySelector('#para2 .home-col ol');
            data[1]['ordered-list'].forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item;
                orderedList.appendChild(listItem);
            });

            // Fill third paragraph and unordered list
            document.querySelector('#para3 .home-col h2').textContent = data[2].Title;
            const unorderedList = document.querySelector('#para3 .home-col ul');
            data[2]['unordered-list'].forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item;
                unorderedList.appendChild(listItem);
            });
            localStorage.setItem('indexData', JSON.stringify(data));
        })
        .catch(error => console.error('Error fetching data:', error));
});





// Fetch JSON data
fetch('wildlifeintro.json')
.then(response => response.json())
.then(data => {
    // Populate location descriptions
    document.getElementById('lochead1').innerText = data[0].Title;
    document.getElementById('descpara1').innerText = data[0].paragraphs[0];
    document.getElementById('lochead2').innerText = data[1].Title;
    document.getElementById('descpara2').innerText = data[1].paragraphs[0];

    // Populate animal information
    const animals = data[2].table;
    const table = document.querySelector('.table-info');

    animals.forEach(animal => {
        const row = table.insertRow();
        const nameCell = row.insertCell(0);
        const imageCell = row.insertCell(1);
        const descCell = row.insertCell(2);

        nameCell.textContent = animal['Animal Name'];
        imageCell.innerHTML = `<img src="${animal.Image}" alt="${animal['Animal Name']}">`;
        descCell.textContent = animal.Description;
    });
    localStorage.setItem('wildlifeIntroData', JSON.stringify(data));
})
.catch(error => console.error('Error fetching data:', error));





document.addEventListener("DOMContentLoaded", function () {
    fetch('depofwildlife.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('depfill').textContent = data.departmentDescription;

        localStorage.setItem('depOfWildlifeData', JSON.stringify(data));
    })
    .catch(error => console.error('Error fetching JSON: ', error));
});








document.addEventListener('DOMContentLoaded', function () {
    fetch('animalsinsl.json')
        .then(response => response.json())
        .then(data => {
            const title = data.introduction.title;
            const description = data.introduction.description;
            document.querySelector('.animal-intro h2').textContent = title;
            document.querySelector('#aniIntro').textContent = description;

            data.animals.forEach((animal, index) => {
                const animalIndex = index + 1;
                const animalName = animal.name;
                const animalDescription = animal.description;
                const animalImage = animal.image;

                document.querySelector(`#animal-info${animalIndex} h3 strong`).textContent = animalName;
                document.querySelector(`#animal-info${animalIndex} p`).textContent = animalDescription;
                document.querySelector(`#animal-img${animalIndex} img`).src = animalImage;
            });
            localStorage.setItem('animalsData', JSON.stringify(data));
        })
        .catch(error => console.error('Error fetching JSON:', error));
});







document.addEventListener("DOMContentLoaded", function() {
    // Fetch JSON data
    fetch('wilpattu.json')
        .then(response => response.json())
        .then(data => {
            // Fill content for section with id wilpattu1
            const wilpattu1 = data.wilpattu1;
            document.querySelector('#wilpattu1 h2').innerHTML = `<u>${wilpattu1.title}</u>`;
            document.querySelector('#wilpattu1 p').textContent = wilpattu1.description;
            document.querySelector('#wilpattu1 img').src = wilpattu1.image;

            // Fill content for section with id wilpattu2
            const wilpattu2 = data.wilpattu2;
            document.querySelector('#wilpattu2 h3').innerHTML = `<u>${wilpattu2.title}</u>`;
            document.querySelector('#wilpattu2 p').textContent = wilpattu2.description;
            document.querySelector('#wilpattu2 img').src = wilpattu2.image;

            // Fill content for section with id wilpattu3
            const wilpattu3 = data.wilpattu3;
            document.querySelector('#wilpattu3 h3').innerHTML = `<u>${wilpattu3.title}</u>`;
            document.querySelector('#wilpattu3 p').textContent = wilpattu3.description;

            localStorage.setItem('wilpattuData', JSON.stringify(data));
        })
        .catch(error => console.error('Error fetching data:', error));
});

document.addEventListener("DOMContentLoaded", function() {
    // Fetching the JSON data
    fetch('yala.json')
    .then(response => response.json())
    .then(data => {
        // Filling the empty tags with data from JSON
        data.sections.forEach(section => {
            const sectionElement = document.getElementById(section.id);
            if(sectionElement) {
                const titleElement = sectionElement.querySelector('h2, h3');
                const contentElement = sectionElement.querySelector('p');
                const imageElement = sectionElement.querySelector('img');

                if(titleElement) titleElement.innerText = section.title;
                if(contentElement) contentElement.innerText = section.info.content;
                if(imageElement) {
                    imageElement.src = section.image.src;
                    imageElement.alt = section.image.alt;
                }
            }
        });
        localStorage.setItem('yalaData', JSON.stringify(data));
    })
    .catch(error => console.error('Error fetching JSON:', error));
});










/* login.js */
document.addEventListener('alpine:init', () => {
    Alpine.data('logindata', () => ({
        uname : '',
        pword : '',
        users : [
            {
                username : 'admin',
                password : 'admin',
                role : 'admin',
                email : 'admin@admin.com'
            },
            {
                username : 'user',
                password : 'user',
                role : 'site_user',
                email : 'user@user.com'
            }
        ],
        login() {
            const user = this.users.find(u => u.username === this.uname && u.password === this.pword);
            if (user) {
                if (user.username === 'user') {
                    window.location.href = 'index.html'; // Redirect to index.html for user
                } else if (user.role === 'admin') {
                    window.location.href = 'index.html'; // Redirect to admin dashboard for admin
                }
            } else {
                alert("Access denied. Incorrect username or password.");
            }
        }
    }));
});