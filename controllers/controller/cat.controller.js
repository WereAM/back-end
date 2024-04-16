const cat = []; //array to store the cats

exports.create = (req, res) => { 
    
    const { name } = req.params; //extract the name parameter from the request
    cat.push(name); //add the name to the array of cats
    res.send("Cat created: " + name); //send a response to the client with the message "Cat created" 
};

exports.read = (req, res) => { //function to read all the cats and send a response to the client
    res.send(cat); //send a response to the client with the array of cats
};

// exports.update = (req, res) => {
//     const { name } = req.params; //extract the name parameter from the request
//     cat.push(name); //add the name to the array of cats
//     res.send("Cat updated: " + name); //send a response to the client with the message "Cat updated"
// };

// exports.delete = (req, res) => {
//     const { name } = req.params; //extract the name parameter from the URL
//     const index = cat.indexOf(name); //find the index of the cat with the name
//     if (index !== -1) { //if the cat is found
//         cat.splice(index, 1); //remove the cat from the array
//         res.send("Cat deleted: " + name); //send a response to the client with the message "Cat deleted"
//     } else {
//         res.send("Cat not found: " + name); //send a response to the client with the message "Cat not found"
//     }
// };