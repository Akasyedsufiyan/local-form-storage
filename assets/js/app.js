//var
const tweetList = document.getElementById('tweet-list')



//event

function eventListeners(){
    document.querySelector('#form').addEventListener('submit', newTweets);

    tweetList.addEventListener('click', removeTweet);

    document.addEventListener('DOMContentLoaded', localDomContent);
}
eventListeners();


//function
function newTweets(e){
e.preventDefault();

// read tweet value
const tweet = document.getElementById('tweet').value;


// create remove button
const removeBtn = document.createElement('a');
removeBtn.classList = 'remove-tweet';
removeBtn.textContent = 'X';

// li create
const li = document.createElement('li');
li.textContent = tweet;

// add remove button
li.appendChild(removeBtn);


// add list
tweetList.appendChild(li);

addTweetLocalStorage(tweet);

// print the alert
alert('Tweet Added');

this.reset();

}

function removeTweet(e){
    if(e.target.classList.contains('remove-tweet')){
    e.target.parentElement.remove();        
    } 
    

    removeFromLocalStorage( e.target.parentElement.textContent );
}

function addTweetLocalStorage(tweet){
    let tweets = getTweetLocalStorage();

tweets.push(tweet);
// converyt tweet array into string 
localStorage.setItem('tweets', JSON.stringify(tweets))    
}

function getTweetLocalStorage(){
    let tweets;
const tweetLS = localStorage.getItem('tweets')

    if(tweetLS === null){
    tweets=[];        
    } else{
        tweets=JSON.parse(tweetLS);
    }
    return tweets;
}

function localDomContent(){
    let tweets = getTweetLocalStorage();

    tweets.forEach(function(tweet){
        const removeBtn = document.createElement('a');
removeBtn.classList = 'remove-tweet';
removeBtn.textContent = 'X';

// li create
const li = document.createElement('li');
li.textContent = tweet;

// add remove button
li.appendChild(removeBtn);


// add list
tweetList.appendChild(li);

    });
}

// remove tweet from local storage

function removeFromLocalStorage(tweet){
    //get tweets from storage
let tweets = getTweetLocalStorage();

// remove x from tweet

const tweetDelete = tweet.substring(0, tweet.length -1);

// loop through tweets and remove tweets that equal

tweets.forEach(function(tweetLS, index){
if (tweetDelete === tweetLS){
tweets.splice(index, 1)    
}
})
// save the date
localStorage.setItem('tweets', JSON.stringify(tweets))

}