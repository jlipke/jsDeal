$(document).ready(function(){

    function card(name,suit,value) {
        this.name = name;
        this.suit = suit;
        this.value = value;
    } 

    var deck = [
        new card('Ace', 'Hearts',11),
        new card('Two', 'Hearts',2),
        new card('Three', 'Hearts',3),
        new card('Four', 'Hearts',4),
        new card('Five', 'Hearts',5),
        new card('Six', 'Hearts',6),
        new card('Seven', 'Hearts',7),
        new card('Eight', 'Hearts',8),
        new card('Nine', 'Hearts',9),
        new card('Ten', 'Hearts',10),
        new card('Jack', 'Hearts',10),
        new card('Queen', 'Hearts',10),
        new card('King', 'Hearts',10),
        new card('Ace', 'Diamonds',11),
        new card('Two', 'Diamonds',2),
        new card('Three', 'Diamonds',3),
        new card('Four', 'Diamonds',4),
        new card('Five', 'Diamonds',5),
        new card('Six', 'Diamonds',6),
        new card('Seven', 'Diamonds',7),
        new card('Eight', 'Diamonds',8),
        new card('Nine', 'Diamonds',9),
        new card('Ten', 'Diamonds',10),
        new card('Jack', 'Diamonds',10),
        new card('Queen', 'Diamonds',10),
        new card('King', 'Diamonds',10),
        new card('Ace', 'Clubs',11),
        new card('Two', 'Clubs',2),
        new card('Three', 'Clubs',3),
        new card('Four', 'Clubs',4),
        new card('Five', 'Clubs',5),
        new card('Six', 'Clubs',6),
        new card('Seven', 'Clubs',7),
        new card('Eight', 'Clubs',8),
        new card('Nine', 'Clubs',9),
        new card('Ten', 'Clubs',10),
        new card('Jack', 'Clubs',10),
        new card('Queen', 'Clubs',10),
        new card('King', 'Clubs',10),
        new card('Ace', 'Spades',11),
        new card('Two', 'Spades',2),
        new card('Three', 'Spades',3),
        new card('Four', 'Spades',4),
        new card('Five', 'Spades',5),
        new card('Six', 'Spades',6),
        new card('Seven', 'Spades',7),
        new card('Eight', 'Spades',8),
        new card('Nine', 'Spades',9),
        new card('Ten', 'Spades',10),
        new card('Jack', 'Spades',10),
        new card('Queen', 'Spades',10),
        new card('King', 'Spades',10)
    ];
    var HeartIsClicked = false;
    var DiamondIsClicked = false;
    var ClubIsClicked = false;
    var SpadeIsClicked = false;

    var HeartCount = 0;
    var DiamondCount = 0;
    var ClubCount = 0;
    var SpadeCount = 0;
    

    $("#btnHeart").click(function(){
        if(HeartIsClicked == false){
            ShowHearts(0, "Ace", "Hearts", 11);
        }
    });

    $("#btnDiamond").click(function(){
        if(DiamondIsClicked == false){
            ShowDiamonds(13, "Ace", "Diamonds", 11);
        }
    });

    $("#btnClub").click(function(){
        if(ClubIsClicked == false){
            ShowClubs(26, "Ace", "Clubs", 11);
        }
    });

    $("#btnSpade").click(function(){
        if(SpadeIsClicked == false){
            ShowSpades(39, "Ace", "Spades", 11);
        }
    });

    
    
    function ShowHearts(selectedCard, name, suit, value){
        
        if(HeartCount < 13){
            HeartIsClicked = true;
            if(value == 12) {value = 2}    // Allows for starting with the value 11, so it will jump to 2
            name = deck[selectedCard].name;    // Get the name by the selected Card in array
            var lowercaseSuit = suit.toLowerCase();     // Create lowercase and shortened suit for the id's
            lowercaseSuit = lowercaseSuit.substring(0, lowercaseSuit.length -1);

            suit = deck[selectedCard].suit;    // Set suit equal to the selected card in deck.suit
            $("<img>")
            .attr('src', "images/cards/" + suit + "/" + name + ".jpg")
            .appendTo("#" + lowercaseSuit)
            .hide()
            .fadeIn("slow")
            .delay("1000")
            .fadeOut("slow",function(){
                value++;
                selectedCard++;
                HeartCount++;
                ShowHearts(selectedCard, name, suit, value);
                    
                    
            });
        } else {    // If the Count is over 13 (End of suit) display the checkmark
            
            var lowercaseSuit = suit.toLowerCase();     // Create lowercase and shortened suit for the id's
            lowercaseSuit = lowercaseSuit.substring(0, lowercaseSuit.length -1);
            $("<img>")
            .attr('src', "images/check_sm.png")
            .appendTo("#" + lowercaseSuit)
            .hide()
            .fadeIn("slow")
            .delay("1000")
            .fadeOut("slow",function(){
                    $("#" + lowercaseSuit).empty();
                    HeartIsClicked = false;
                    selectedCard = 0;
                    HeartCount = 0;
            });
        }
    }

    function ShowSpades(selectedCard, name, suit, value){
        
        if(SpadeCount < 13){
            SpadeIsClicked = true;
            if(value == 12) {value = 2}    // Allows for starting with the value 11, so it will jump to 2
            name = deck[selectedCard].name;    // Get the name by the selected Card in array
            var lowercaseSuit = suit.toLowerCase();     // Create lowercase and shortened suit for the id's
            lowercaseSuit = lowercaseSuit.substring(0, lowercaseSuit.length -1);

            suit = deck[selectedCard].suit;    // Set suit equal to the selected card in deck.suit
            $("<img>")
            .attr('src', "images/cards/" + suit + "/" + name + ".jpg")
            .appendTo("#" + lowercaseSuit)
            .hide()
            .fadeIn("slow")
            .delay("1000")
            .fadeOut("slow",function(){
                value++;
                selectedCard++;
                SpadeCount++;
                ShowSpades(selectedCard, name, suit, value);
                    
                    
            });
        } else {    // If the Count is over 13 (End of suit) display the checkmark
            
            var lowercaseSuit = suit.toLowerCase();     // Create lowercase and shortened suit for the id's
            lowercaseSuit = lowercaseSuit.substring(0, lowercaseSuit.length -1);
            $("<img>")
            .attr('src', "images/check_sm.png")
            .appendTo("#" + lowercaseSuit)
            .hide()
            .fadeIn("slow")
            .delay("1000")
            .fadeOut("slow",function(){
                    $("#" + lowercaseSuit).empty();
                    SpadeIsClicked = false;
                    selectedCard = 0;
                    SpadeCount = 0;
            });
        }
    }

    function ShowDiamonds(selectedCard, name, suit, value){
        
        if(DiamondCount < 13){
            DiamondIsClicked = true;
            if(value == 12) {value = 2}    // Allows for starting with the value 11, so it will jump to 2
            name = deck[selectedCard].name;    // Get the name by the selected Card in array
            var lowercaseSuit = suit.toLowerCase();     // Create lowercase and shortened suit for the id's
            lowercaseSuit = lowercaseSuit.substring(0, lowercaseSuit.length -1);

            suit = deck[selectedCard].suit;    // Set suit equal to the selected card in deck.suit
            $("<img>")
            .attr('src', "images/cards/" + suit + "/" + name + ".jpg")
            .appendTo("#" + lowercaseSuit)
            .hide()
            .fadeIn("slow")
            .delay("1000")
            .fadeOut("slow",function(){
                value++;
                selectedCard++;
                DiamondCount++;
                ShowDiamonds(selectedCard, name, suit, value);
                    
                    
            });
        } else {    // If the Count is over 13 (End of suit) display the checkmark
            
            var lowercaseSuit = suit.toLowerCase();     // Create lowercase and shortened suit for the id's
            lowercaseSuit = lowercaseSuit.substring(0, lowercaseSuit.length -1);
            $("<img>")
            .attr('src', "images/check_sm.png")
            .appendTo("#" + lowercaseSuit)
            .hide()
            .fadeIn("slow")
            .delay("1000")
            .fadeOut("slow",function(){
                    $("#" + lowercaseSuit).empty();
                    DiamondIsClicked = false;
                    selectedCard = 0;
                    DiamondCount = 0;
            });
        }
    }

    function ShowClubs(selectedCard, name, suit, value){
        
        if(ClubCount < 13){
            ClubIsClicked = true;
            if(value == 12) {value = 2}    // Allows for starting with the value 11, so it will jump to 2
            name = deck[selectedCard].name;    // Get the name by the selected Card in array
            var lowercaseSuit = suit.toLowerCase();     // Create lowercase and shortened suit for the id's
            lowercaseSuit = lowercaseSuit.substring(0, lowercaseSuit.length -1);

            suit = deck[selectedCard].suit;    // Set suit equal to the selected card in deck.suit
            $("<img>")
            .attr('src', "images/cards/" + suit + "/" + name + ".jpg")
            .appendTo("#" + lowercaseSuit)
            .hide()
            .fadeIn("slow")
            .delay("1000")
            .fadeOut("slow",function(){
                value++;
                selectedCard++;
                ClubCount++;
                ShowClubs(selectedCard, name, suit, value);
                    
                    
            });
        } else {    // If the Count is over 13 (End of suit) display the checkmark
            
            var lowercaseSuit = suit.toLowerCase();     // Create lowercase and shortened suit for the id's
            lowercaseSuit = lowercaseSuit.substring(0, lowercaseSuit.length -1);
            $("<img>")
            .attr('src', "images/check_sm.png")
            .appendTo("#" + lowercaseSuit)
            .hide()
            .fadeIn("slow")
            .delay("1000")
            .fadeOut("slow",function(){
                    $("#" + lowercaseSuit).empty();
                    ClubIsClicked = false;
                    selectedCard = 0;
                    ClubCount = 0;
            });
        }
    }

    
 
    
    
    
    
});  // end of ready