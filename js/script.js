	let button = document.querySelector('button');
	button.onclick = function(){
		fetch('./php/test.php')  
		  .then(  
		    function(response) {  
		      if (response.status !== 200) {  
		        console.log('Looks like there was a problem. Status Code: ' +  
		          response.status);  
		        return;  
		      }

		      // Examine the text in the response  
		      response.json().then(function(data) {  
		        alert(data);  
		      });  
		    }  
		  )  
		  .catch(function(err) {  
		    console.log('Fetch Error :-S', err);  
		  });
	} 
