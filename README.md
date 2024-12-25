So I used the OMDBAPI to get the JSON response when I input the movie year and the movie name which happens by Dom manipulation using event listener.
When pressed click it empties the result div and get the value from the movie input and the year input and passes it in the URL that calls the API.


Then I fetch the response from the API and then I check if the response is OK that means if the response results in the status code 200 if not then throw the error.
If the data is there which is verified by data.response then run a for each loop which goes through data.search and then gets all the values and creates individual divs for different movies as there can be more than one movies.
But if there is some error, then catch it.

The main problem I faced was construction of the API URL as the URL that I have used was not directly given on the OMDBAPI website so I had to figure it out by seeing that
Adding & and then adding various parameters.

I applied concepts like fetch API and dom manipulation.
