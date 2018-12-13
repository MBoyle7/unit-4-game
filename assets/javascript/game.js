$(document).ready(function() {
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    var userScore = 0;
    
    var compNumber = Math.floor(Math.random() * 76);
    console.log(compNumber);
    $("#random").html(compNumber); 

    var firstCrystal = Math.floor(Math.random() * 11);
    var secondCrystal = Math.floor(Math.random() * 11);
    var thirdCrystal = Math.floor(Math.random()* 11);
    var fourthCrystal = Math.floor(Math.random() * 11);

    function reset() {
        var compNumber = Math.floor(Math.random() * 76);
        console.log(compNumber);
        $("#random").html(compNumber); 
    
        var firstCrystal = Math.floor(Math.random() * 11);
        var secondCrystal = Math.floor(Math.random() * 11);
        var thirdCrystal = Math.floor(Math.random()* 11);
        var fourthCrystal = Math.floor(Math.random() * 11);
        $("#currentScore").html(0);
        userScore = 0;
    };

    function userWon() {
        wins++;
        $("#userWins").html(wins);
    };

    function userLosses() {
        losses++;
        $("#userLosses").html(losses);
    };

    $("#blue").on("click", function() {
        userScore = userScore + firstCrystal;
        console.log(userScore)
        $("#currentScore").html(userScore);
            if (userScore === compNumber) {
                userWon();
                reset();
            }
            else if (userScore > compNumber) {
                userLosses();
                reset();
            }
    });

    $("#green").on("click", function() {
        userScore = userScore + secondCrystal;
        $("#currentScore").html(userScore);
        if (userScore === compNumber) {
            userWon();
            reset();
        }
        else if (userScore > compNumber) {
            userLosses();
            reset();
        }
    });

    $("#silver").on("click", function() {
        userScore = userScore + thirdCrystal;
        $("#currentScore").html(userScore);
        if (userScore === compNumber) {
            userWon();
            reset();
        }
        else if (userScore > compNumber) {
            userLosses();
            reset();
        }
    });

    $("#white").on("click", function() {
        userScore = userScore + fourthCrystal;
        $("#currentScore").html(userScore);
            if (userScore === compNumber) {
            userWon();
            reset();
            }
            else if (userScore > compNumber) {
            userLosses();
            reset();
            }
    });
});

