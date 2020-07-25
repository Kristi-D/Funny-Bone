var shiftWindow = function() { 
    scrollBy(0,-100) 
  };
           
  if (location.hash) shiftWindow();
           
  window.addEventListener("hashchange",shiftWindow);
  
  /*Hide navbar when clicked*/
  $(".navbar-collapse a").click(function() {
    
    $(".navbar-collapse").collapse("hide");
    
  });
  
 function getQuote() {
    $.getJSON("https://api.whatdoestrumpthink.com/api/v1/quotes/random/", function(response){
      //Pull quote from API
      var DonQuote = JSON.stringify(response.message);
      $("#quotegoeshere").html("<b><i>"+DonQuote+"</i></b>");
      //my random names for the donald.
      var authors = ["mini hands","The Donald","Don Don Izakaya",
                     "Donnie","Sir Orange is the new Black","Overgrown Oompa Loompa",
                     "Tupay man","Russia's Friend","Swamp Drainer","Mr Great Again", 
                     "Dude with a Mood"]
      //random number generator.
      var rand = Math.floor(Math.random()* (authors.length));
      $("#authorHere").html("<b><i>"+" -"+authors[rand]+"</i></b>");
  $("#tweetButton").click(function() {
      window.open("https://twitter.com/intent/tweet?text="+'"'+DonQuote+'"');
  });

$(".dropdown-menu").click(function() {

  $(".navbar-collapse").collapse("hide");
 
});

$(".homeLink").click(function() {

     $(".navbar-collapse").collapse("hide");
},
)},
    )};

    $(document).ready(function() {
      //getQuote(); //fill page with a random quote at start so we dont see place holders.
      getQuote();
      $("#randomQuote").on("click", getQuote);
      //$.getScript('https://platform.twitter.com/widgets.js');
      
    });