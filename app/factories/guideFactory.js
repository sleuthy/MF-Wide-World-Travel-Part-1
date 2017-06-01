"use strict";

app.factory("guideFactory", function($q, $http){
  let getBooks = () => {
    let items = [];
    return $q((resolve,reject) => {
      $http.get('./data/guides.json')
      .then((itemObject) => {
        let itemCollection = itemObject.data;
        console.log("itemCollection", itemCollection);
        resolve(itemCollection.guides);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };
  return {getBooks};
});