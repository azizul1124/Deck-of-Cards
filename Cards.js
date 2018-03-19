// Azizul Hakim
// CGS 3175
// Karin Whiting
// MW 1:30-2:45
// Assignment 3

var cards = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
var suits = ["Diamonds", "Hearts", "Spades", "Clubs"];
var deck = new Array();


window.onload = load;

function getDeck() 
{
    for (var i = 0; i < suits.length; i++)
    {
        for(var j = 0; j < cards.length; j++)
        {

            var card = {Value: cards[j], Suit: suits[i]};
            deck.push(card);
        }
    }

    return deck;

}

function deal()
{
    var card = deck[deck.length-1];
    deck.splice(deck.length-1,1);
    return card;
}

function shuffle() 
{

    for (var i = 0; i < 1000; i++)
    {

        var place1 = Math.floor(Math.random() * deck.length);
        var place2 = Math.floor(Math.random() * deck.length);
        var tmp = deck[place1];

        deck[place1] = deck[place2];
        deck[place2] = tmp;
    }
}

function renderDeck() 
{
    for(var i = 0; i < deck.length; i++)
    {
        var card = document.createElement("div");
        var Value = document.createElement("div");

        var suit =  getCardUI(deck[i]);

        card.className = "card";
        Value.className = "value";

        card.appendChild(Value);
        card.appendChild(suit);

        document.getElementById("deck").appendChild(card);

    }
}

function getCardUI(card)
{
    var el = document.createElement('div');
    var icon = '';

    if(card.Suit == 'Hearts')
        icon = "&#9829";

    else if(card.Suit == 'Spades')
        icon = "&#9824";
		
    else if(card.Suit == 'Diamonds')
        icon = '&#9830';
    else
        icon = "&#9827";

    el.innerHTML = card.Value + '<br/>' +icon;

    return el;

}

function load() 
{
    deck = getDeck();
    shuffle();
    renderDeck();

}
