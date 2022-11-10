

let urlParams = new URLSearchParams(window.location.search);

let param = urlParams.get('id');


fetch('https://www.breakingbadapi.com/api/characters')
    .then((response) => {
        return response.json();

    })
    .then((data) => {
        for(let item of data){
            if (item.char_id == param){
                var character = item
                break

            }
        };
        console.log(character)
        card = document.createElement('div');
        card.classList = ('col-xl-3 card mb-3 ms-3 text-dark bg-light ')
        row.appendChild(card);
        
        cardRow = document.createElement('div')
        cardRow.classList.add('row', 'g-0')
        card.appendChild(cardRow);

        colImg = document.createElement('div')
        cardRow.appendChild(colImg)

        colImgImg = document.createElement('img')
        colImgImg.setAttribute('src', character.img)
        colImgImg.classList = 'img-fluid rounded-start'
        colImg.appendChild(colImgImg)

        colCard = document.createElement('div')
        cardRow.append(colCard)

        cardBody = document.createElement('div')
        cardBody.classList.add('card-body')
        colCard.appendChild(cardBody)

        cardTitle = document.createElement('h4')
        cardTitle.classList.add('card-title')
        cardTitle.innerText = character.name
        cardBody.appendChild(cardTitle)

        dateBirthday = document.createElement('p')
        dateBirthday.classList = 'card-text'
        if (character.birthday != 'Unknown'){
            date = new Date();
            year = date.getFullYear();
            console.log(year)
            birthday = character.birthday.slice(6, 10)
            age = year - birthday

            dateBirthday.innerText = age
        }
        else{
            dateBirthday.innerText = 'Не указан'
        }
        
        cardBody.appendChild(dateBirthday)

        nickname = document.createElement('p')
        nickname.classList = 'card-text'
        nickname.innerText = 'nickname ' + character.nickname
        cardBody.appendChild(nickname)

       

    })

