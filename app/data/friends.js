// ===============================================================================
// DATA
// Below data will hold all of the surveys.
// you could have it be an empty array as well.
// ===============================================================================

var SurveyArray = [
  {
    friendName: "Lauren",
    friendphoto: "https://stockfresh.com/image/zoom/6a5944/stockfresh_5794",
    scores: [1,2,3,5,5,5,4,3,2,1,5]
  },
  {
    friendName: "Ahmed",
    friendphoto: "https://img3.stockfresh.com/files/g/giulio_fornasar/m/21/4873815_stock-photo-woman-whispering-nastily-venom-in-mans-ear.jpg",
    scores: [1,2,3,4,5,5,4,3,2,1,5]
  }
  ,
  {
    friendName: "Larry",
    friendphoto: "https://img3.stockfresh.com/files/e/elnur/m/37/7624554_stock-photo-aggressive-man-with-baseball-bat-isolated-on-white.jpg",
    scores: [5,4,1,3,2,5,3,3,5,1,2]
  },
  {
    friendName: "Jordyn",
    friendphoto: "https://img3.stockfresh.com/files/e/elnur/m/85/4159436_stock-photo-violent-man-with-baseball-bat-on-white.jpg",
    scores: [1,2,3,2,5,5,4,3,2,1,1]
  },
  {
    friendName: "Fred",
    friendphoto: "https://stockfresh.com/zooms/stockfresh_id2064626_e36e09.jpg",
    scores: [1,2,1,5,1,5,3,3,2,1,3]
  }

];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = SurveyArray;
