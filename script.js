const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    card.addEventListener('mouseover', (event) => {
        const cardWithMouseOver = event.target;

        cards.forEach((menuCard) => {
            const isCardWithoutMouseOver = menuCard != cardWithMouseOver;

            if (isCardWithoutMouseOver) {
                menuCard.classList.add('blur');
            }
        })
    })

    card.addEventListener('mouseout', (event) => {
        cards.forEach((menuCard) => {
            const CardHasBlurClass = menuCard.classList.contains('blur');

            if (CardHasBlurClass) {
                menuCard.classList.remove('blur');
            }
        })
    })
})