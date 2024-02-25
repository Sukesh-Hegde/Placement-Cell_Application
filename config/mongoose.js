const mongoose = require('mongoose');
async function main(){
    const url ="mongodb://localhost:27017/placement_cell"
    // await mongoose.connect('mongodb+srv://placement:1UbhMXi13RXuCwSn@cluster0.p5gbb.mongodb.net/placementcell?retryWrites=true&w=majority');
    await mongoose.connect(url);

    console.log("mongoose connection Successfull !! ");
}
main().catch(error =>console.log("mongoose connection not successfull !!"));