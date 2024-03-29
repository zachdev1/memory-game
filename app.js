document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'bird',
        img: 'https://zachdev1.github.io/memory-game/imgs/bird.png'
      },
      {
        name: 'bowling-ball',
        img: 'https://zachdev1.github.io/memory-game/imgs/bowling-ball.jpg'
      },
      {
        name: 'dragon',
        img: 'https://zachdev1.github.io/memory-game/imgs/dragon.png'
      },
      {
        name: 'flame',
        img: 'https://zachdev1.github.io/memory-game/imgs/flame.png'
      },
      {
        name: 'panda',
        img: 'https://zachdev1.github.io/memory-game/imgs/panda.jpg'
      },
      {
        name: 'sword',
        img: 'https://zachdev1.github.io/memory-game/imgs/sword.png'
      },
      {
        name: 'bird',
        img: 'https://zachdev1.github.io/memory-game/imgs/bird.png'
      },
      {
        name: 'bowling-ball',
        img: 'https://zachdev1.github.io/memory-game/imgs/bowling-ball.jpg'
      },
      {
        name: 'dragon',
        img: 'https://zachdev1.github.io/memory-game/imgs/dragon.png'
      },
      {
        name: 'flame',
        img: 'https://zachdev1.github.io/memory-game/imgs/flame.png'
      },
      {
        name: 'panda',
        img: 'https://zachdev1.github.io/memory-game/imgs/panda.jpg'
      },
      {
        name: 'sword',
        img: 'https://zachdev1.github.io/memory-game/imgs/sword.png'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'https://zachdev1.github.io/memory-game/imgs/blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'https://zachdev1.github.io/memory-game/imgs/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'https://zachdev1.github.io/memory-game/imgs/blank.jpg')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'https://zachdev1.github.io/memory-game/imgs/white.png')
        cards[optionTwoId].setAttribute('src', 'https://zachdev1.github.io/memory-game/imgs/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'https://zachdev1.github.io/memory-game/imgs/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'https://zachdev1.github.io/memory-game/imgs/blank.jpg')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = ' Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })