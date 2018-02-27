// ===============================================================================
// DATA
// Below data will hold all of the surveys.
// you could have it be an empty array as well.
// ===============================================================================

var SurveyArray = [
  {
    friendName: "Lauren",
    friendphoto: "url",
    scores: [1,2,3,5,5,5,4,3,2,1,5]
  },
  {
    friendName: "Ahmed",
    friendphoto: "url",
    scores: [1,2,3,4,5,5,4,3,2,1,5]
  }
  ,
  {
    friendName: "Larry",
    friendphoto: "url",
    scores: [5,4,1,3,2,5,3,3,5,1,2]
  },
  {
    friendName: "Jordyn",
    friendphoto: "url",
    scores: [1,2,3,2,5,5,4,3,2,1,1]
  },
  {
    friendName: "Fred",
    friendphoto: "url",
    scores: [1,2,1,5,1,5,3,3,2,1,3]
  }

];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = SurveyArray;
