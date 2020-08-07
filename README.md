#### TTT Backend
The backend has been implemented using Node.js.

Libraries and Plugins used:
* Express Js
* Axios 

The api endpoint is https://tttbackend.herokuapp.com/file/data?n=5. 
A request with n = 5 will return the 5 most frequently occuring words in the text file. 

Logic: 
The text file is taken as an input and is split on all the non-alphanumeric delimitors.
A json object stores the frequency of the words and is then stored based on the frequency.

The final sorted JSON object is in this format: 
{
  "word" : "ttt", 
  "count" : 2 
}

The following cases are considered: 
1. n < 0 - returns success = false

![Image of n=-4](https://dl.dropbox.com/s/grcqpeobyre6aob/pic1.JPG?dl=0)

2. n > 0 and n < max_number_of words - returns sucess = true and the array

![Image of n=5](https://dl.dropbox.com/s/yls92qjitk8pnp3/pic2.JPG?dl=0)

3. n > max_number_of_words - returns the array of size max_number_of_words.

![Image of n=555](https://dl.dropbox.com/s/tx5mpj8ihbbou3c/pic3.JPG?dl=0)




