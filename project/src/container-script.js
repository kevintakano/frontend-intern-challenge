function compareHits(x,y) 
{
	return y.hits - x.hits;
}

$( document ).ready(function() {
    console.log( "ready!" );

     // document.getElementById("past-your-link-text").value = "Cole o seu link aqui";
    /*Pega json através do projeto do git-hub*/
    $.getJSON("https://raw.githubusercontent.com/chaordic/frontend-intern-challenge/master/Assets/urls.json", function(result){
        
        result.sort(compareHits);

       for(var i = 0 ;i < 5; i++)
       {
        	console.log("i = "+ i);
            $("#top-" + (i+1)).text(result[i].shortUrl);
            $("#top-" + (i+1)).attr("href", result[i].url)
            console.log(result[i].url);
            $("#hits-" + (i+1)).text(result[i]	.hits);

        };


    })
    .error(function() { alert("Error in getting json file!\n"); });

 
    $("#past-your-link-button").click(function()
    {   
        console.log( $("#text-inside-button").text());

        if($("#past-your-link-button").text() == "ENCURTAR")
        {
            console.log("entrou ui");
            textbox =  document.getElementById("past-your-link-text");

            if(textbox.value == "" || textbox.value == null)
            {
                alert("Cole algum link antes para encurtar! :)");
            } else 
            {
                /*Fade out */
                $("#past-your-link-text").animate({opacity: 0}, 400);
                $("#text-inside-button").animate({opacity: 0}, 400);
                $(".clear").animate({opacity: 0}, 400);
                /*Setando os valores*/
                setTimeout(function(){
                     $("#past-your-link-text").val("http://chr.dc/xyxyxy");

                     $("#past-your-link-button").text("COPIAR");
                    $('#past-your-link-text').css("color","white").delay(100);
                },500);
                /*Fade in*/
                 $("#past-your-link-text").animate({opacity: 1}, 400);
                 $("#text-inside-button").animate({opacity: 1}, 400);
                 $(".clear").animate({opacity: 1}, 400);

                 // $('#past-your-link-text').css("font-weight","bold");
                 // $('#past-your-link-text').css("top","-26.7rem");
                 $(".clear").click(function()
                 {
                    $(".clear").animate({opacity: 0}, 400);
                    {
                        $("#text-inside-button").animate({opacity: 0}, 400);

                        setTimeout(function(){
                            $("#past-your-link-button").text("ENCURTAR");
                            $('#past-your-link-text').css("color","#ff6e14").delay(100);
                        },500);
                        /*Fade in*/
                         $("#text-inside-button").animate({opacity: 1}, 400);
                    }
                 });
            }
            
        } else if($("#past-your-link-button").text()  == "COPIAR")
        {
            $("#past-your-link-text").focus();
            document.execCommand('SelectAll');
            document.execCommand("Copy", false, null);
            alert("Copiado para transferência! :)");
        }
    });


});