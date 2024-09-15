//fetch("L2p6F3DPNgp5VXVRvgp6zVA5mAzBkYQx")
//.then(data=>data.json())
//.then(quotes =>)
  fetch("https://timshim-quotes-v1.p.rapidapi.com/quotes", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "timshim-quotes-v1.p.rapidapi.com",
      "x-rapidapi-key": "9d313ce9ffmsh1d3cf10c97bd746p1c372djsnf97d2bee27b4"
    }
  })
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('quote');

        jokeElement.innerHTML = jokeText;
    })
   /*fetch("https://timshim-quotes-v1.p.rapidapi.com/quotes", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "timshim-quotes-v1.p.rapidapi.com",
		"x-rapidapi-key": "9d313ce9ffmsh1d3cf10c97bd746p1c372djsnf97d2bee27b4"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
*/

  //"browser_action":{
    //     "default_popup":"popup.html",
    //      "default_icon":"elon.jpg"
    //    },
    //    "icons":{
   //         "128":"elon.jpg"
    //    },
     //   "permissions":["activeTab"]
     