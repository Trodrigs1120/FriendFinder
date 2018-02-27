// ===============================================================================
// DATA
// Below data will hold all of the surveys.
// you could have it be an empty array as well.
// ===============================================================================

var SurveyArray = [
  {
    friendName: "Lauren",
    friendEmail: "LMudd@example.com",
    friendID: "LMoney",
    friendSurvey: [1,2,3,4,5,5,4,3,2,1,5]
  },
  {
    friendName: "Ahmed",
    friendEmail: "ahmed@example.com",
    friendID: "afhaque89",
    friendSurvey: [1,2,3,4,5,5,4,3,2,1,5]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = SurveyArray;
