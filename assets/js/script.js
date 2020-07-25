

var shiftWindow = function() { 
    scrollBy(0,-100) 
};
           
if (location.hash) shiftWindow();
           
window.addEventListener("hashchange",shiftWindow);

/*Hide navbar when clicked*/
$(".navbar-collapse a").click(function() {
    
    $(".navbar-collapse").collapse("hide");
    
});

$(document).ready(function() { 
    var randomQuote = '' + "Debugging is twice as hard as writing the code in …are, by definition, not smart enough to debug it." + '';
    
    $("#randomQuote").click(function() {      
       $.get("https://api.whatdoestrumpthink.com/api/v1/quotes/", function(data, status){
    return data;
  });
            
            randomQuote = responseText.quoteText;
            
            var randomColor = function getRandomColor() {
                var letters = '012345';
                var color = '#';
                for (var i = 0; i < 6; i++ ) {
                    color += letters[Math.floor(Math.random() * 6)];
                }
                return color;
            }
            
            $("body").css("color",randomColor); 
        });                    
    });
    
    
    $("#tweetButton").click(function() {
        window.open("https://twitter.com/intent/tweet?text="+'"'+randomQuote+'"');
    });

$(".dropdown-menu").click(function() {

    $(".navbar-collapse").collapse("hide");
   
});

$(".homeLink").click(function() {
 
       $(".navbar-collapse").collapse("hide");
   
});
        
    