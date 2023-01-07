/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  let arrDevelopers = arr.map(function(element)
  {
      if(element.profession === "developer")
      {
        console.log(element)
      }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here
  let arrDev = arr.forEach(function(array)
  {
      if(array.profession === "developer")
      {
        console.log(array)
      }
  })
}

function addData() {
  //Write your code here
  arr.push({id:4,name:"susan",age:"20",profession:"intern"})
  console.log(arr)
}

function removeAdmin() {
  //Write your code here
  let updatedArr = arr.filter(function(array)
  {
    if(array.profession !== "admin")
    {
      return array
    }
  })

  console.log(updatedArr);
}

function concatenateArray() {
  //Write your code here
  let userarr = [
      {id: 24, name: "elizabeth", age: "23", profession: "student"},
      {id: 12, name: "elle", age: "25", profession: "singer"},
      {id: 35, name: "ancy", age: "27", profession: "artist"}
  ];

  let mergedarr = arr.concat(userarr)
  console.log(mergedarr)
}
