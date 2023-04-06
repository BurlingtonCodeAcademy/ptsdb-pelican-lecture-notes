// 1. Create an object consisting of six key value pairs.
//    The keys should be movies (strings, but with quotes if the movie has
//    spaces in it like 'The Dark Knight')
//    and the values should be your rating on a scale of 0 to 10.
// 2. Write a function that loops through the object and console.logs two sentences.
//    The first sentence should be something like "The Dark Knight scores a 7.2 out of 10."
// 3. The second sentence is dependent on if the score is less than 6 or not.
//    If less than 6, console.log "Don't make an effort to go see it" or something.
//    If 6 or greater, log "Make sure to give this one a try!" or something like that.
// 4. Call your function!

const movieScores = {
  'Air Bud': 9,
  'Air Bud: Golden Receiver': 6,
  'Air Bud: World Pup': 5,
  'Air Bud: Seventh Inning Fetch': 3,
  'Air Bud: Spikes Back': 1,
  'Air Buddies': -4
}

function printRecs (scores) {
  for (const movie in scores) {
    console.log(`${movie} is rated a ${scores[movie]}.`)
    if (scores[movie] < 6) {
      console.log('Air don\'t.')
    } else {
      console.log('AIR DO!')
    }
  }
}

printRecs(movieScores)