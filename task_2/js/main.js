fetch('https://www.breakingbadapi.com/api/characters')
    .then((response) => {
        return response.json();

    })
    .then((data) => {
        for(let item of data){
            card = document.createElement('div');
            card.classList = ('col-xl-3 card mb-3 ms-3 text-dark bg-light ')
            row.appendChild(card);
            
            cardRow = document.createElement('div')
            cardRow.classList.add('row', 'g-0')
            card.appendChild(cardRow);

            colImg = document.createElement('div')
            colImg.classList.add('col-md-6')
            cardRow.appendChild(colImg)

            link = document.createElement('a')
            link.setAttribute('href', `character.html?id=${item.char_id}`)
            colImg.appendChild(link)

            colImgImg = document.createElement('img')
            colImgImg.setAttribute('src', item.img)
            colImgImg.classList = 'img-fluid rounded-start'
            link.appendChild(colImgImg)

            colCard = document.createElement('div')
            colCard.classList.add('col-md-6')
            cardRow.append(colCard)

            cardBody = document.createElement('div')
            cardBody.classList.add('card-body')
            colCard.appendChild(cardBody)

            cardTitle = document.createElement('h4')
            cardTitle.classList.add('card-title')
            cardTitle.innerText = item.name
            cardBody.appendChild(cardTitle)
        }
    });
