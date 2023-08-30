var profileImageURLs = [
    'https://archzine.fr/wp-content/uploads/2018/02/comment-faire-un-de%CC%81grade%CC%81-homme-coupe-cheveux-tendance-mi-long.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZSoQrpmxVOjGz5BgaNiUs02frk8ZW5o30fepn8o1X0dhYlk2JGZdBM4cj3eOSxXR1GA&usqp=CAU',
    'https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg',
  ];
  
  var cardContainer = document.querySelector('.card-container');
  
  for (let i = 0; i < 12; i++) {
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
  
    var cardImage = document.createElement('img');
    cardImage.src = profileImageURLs[i % profileImageURLs.length];
    cardImage.alt = 'Profile Image';
  
    var cardTitle = document.createElement('h2');
    cardTitle.innerHTML = 'Card Title';
  
    var cardText = document.createElement('p');
    cardText.innerHTML = 'This is the content of the card.';
//   
    var blueBg = document.createElement('div');
    blueBg.classList.add('blue-bg');
  
    cardDiv.appendChild(cardImage);
    cardDiv.appendChild(blueBg);
    cardDiv.appendChild(cardTitle);
    cardDiv.appendChild(cardText);
  
    cardContainer.appendChild(cardDiv);
  }
  