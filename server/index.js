const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(' ');
const app = express();

app.get('/rentals',function(req,res){
    res.json({'success': true});
});

const PORT = process.env.PORT || 3001;
app.listen(PORT,function(){
    console.log('I am running!');
})

mongodb+srv://dbUser:<pass>@cluster0-vxw8z.mongodb.net/test?retryWrites=true

api/v1/rentals will fetch all rentals
api/v1/rentals/:id 

