var mongoose    = require("mongoose");

/*global res*/

module.exports = {
    dbQuery: function(dataModel, page, item_perpage){
        return new Promise((resolve, reject) => {
            dataModel.count().exec(function(err, count){
                if (err){
                    reject("The dataModel might not exist.");
                } else {
                    console.log("The number of this kind of item is : " + count);
                    dataModel.find().skip((page-1)*item_perpage).limit(item_perpage).exec(function(err, query) {
                        if (err) {
                            reject("Unable to Query");
                        } else {
                            //console.log("The query result is : " +  result);
                            resolve({query, count});
                        }
                    });
                }
            });
            
            
        });
    },
        
    
};