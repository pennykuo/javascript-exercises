const getTheTitles = function(books) {
    let Array=[];
    
    for(let i = 0;i<books.length;i++){
        Array.push(books[i].title);
        }
    
    return Array;

};

// Do not edit below this line
module.exports = getTheTitles;
