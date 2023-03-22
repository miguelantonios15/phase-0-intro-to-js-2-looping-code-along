const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(namesArray, event1){
    let thankYouCards = [];
    for (let i = 0; i < namesArray.length; i++){
        
        thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event1} gift!` )
        
        //console.log(`Thank you, ${array1[i]}, for the wonderful ${event1} gift!`);
    }

    return thankYouCards; 
}

function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }