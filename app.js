
document.addEventListener('DOMContentLoaded', () =>{
    const button = document.querySelector('#pexeso');
    console.log(button);

    button.addEventListener('click', function() {
        let cardArray = [
            {
                name: 'rabbitHours',
                img: 'images/rabbit.png'
            }, 
            {
                name: 'rabbitHours',
                img: 'images/rabbit.png'
            },  {
                name:'Alice',
                img: 'images/alice.png'
            }, 
            {
                name:'Alice',
                img: 'images/alice.png'
            }, {
                name: 'lolka',
                img: 'images/lolka.png'
            },
            {
                name: 'lolka',
                img: 'images/lolka.png'
            }
        ]

        // random flex
        cardArray.sort(() => 0.5 - Math.random());

        const game = document.querySelector('.game');
        let chosen = [];
        let chosenID = [];
        let cardsWon = [];
        let result = document.querySelector('#result');


        function createBoard() {
            for(let i= 0; i < cardArray.length; i++) {
                let card = document.createElement('img');
                card.setAttribute('src', 'images/back.png');
                card.setAttribute('data-id', i);
                card.addEventListener('click', flipCard);
                game.appendChild(card);
            }
        }

        function flipCard() {
            let cardID = this.getAttribute('data-id');
            chosen.push(cardArray[cardID].name);
            chosenID.push(cardID);
            this.setAttribute('src', cardArray[cardID].img);

            if (chosen.length === 2) {
                setTimeout(checkForMatch, 500)
            }

        }

        function checkForMatch() {
            const cards = document.querySelectorAll('img');
            const optionOneID = chosenID[0];
            const optionTwoID = chosenID[1];
            if (chosen[0]=== chosen[1]){
                alert('Match!!');
                cards[optionOneID].setAttribute('src', 'images/empty.png');
                cards[optionTwoID].setAttribute('src', 'images/empty.png');
            
                cardsWon.push(chosen);
                result.textContent = result.textContent + 1;
            } else {
                cards[optionOneID].setAttribute('src', 'images/back.png');
                cards[optionTwoID].setAttribute('src', 'images/back.png');
                alert('Try again!')
            }
            chosen = [];
            chosenID = [];

            result.textContent = cardsWon.length;
            if (cardsWon.length == cardArray.length/2) {
            alert('Congratulation! You won!');
            document.body.remove(game);
            
            }
        }


        createBoard();
       
    });
});