const Product = require('../models/product');


module.exports.home = async(req, res) => {
    return res.send('Hello');
}


//  function to render the products 
module.exports.renderPro = async(req, res) => {
    await Product.find({}, {"_id":0}, {"__v": -1})
    .then(pro => {
        
        res.send(pro);
        // console.log(pro.length);
    })
}


// function to add product to data base
module.exports.create = async(req, res) => {
    if(req.body.name || req.body.quantity == null){
        return res.send("No product to add");
    }
    let D = [];
    let name = req.body.name;
    let quantity = req.body.quantity;
    D.push({Name:name, Quantity:quantity});
    let L = await Product.find();
    let l = L.length
    // console.log(l);
    
    let data = {id:l+1, Name:name, Quantity:quantity};
    await Product.create({
        product:data
    })
    .then(pro => {
        return res.send(D);
    })
    .catch(error => {
        res.send('Error in adding product to data base : '+ error);
    })
  
    
}

// function to update quantity of the product
module.exports.update = async(req, res) => {
    let id = req.params.id;
    let num = req.query.number;
    // console.log(id,num);
    try{
        let find = await Product.find({"product.id":id});
        console.log(find);
        let ID = find[0].toObject()._id;
        let qu = find[0].product.Quantity;
        qu = Number(qu)+Number(num);
        let up = await Product.findByIdAndUpdate(ID,{
            $set:{
                "product.Quantity":qu
            }
        });
        if(up){
            let find = await Product.find({"_id":ID});
            let f = find[0].toObject().product;
            let data = {
                data:{
                    product:{
                        id:f.id,
                        Name:f.Name,
                        Quantity:f.Quantity
                    },
                    message:"updated successfully"
                }
            }
            return res.send(data)
        }else{
            return res.send('Error in updating')
        }
        
        
    }
    catch{

    }

    // await Product.findOneAndUpdate({id,Quantity:num})
    // .then(done => {
    //     let data =[];
    //     data.push({Message:'Updated Successfully'})
    //     return res.send(done, data);
    // })
}


// function to delete the product from Data Base

module.exports.destroy = async(req, res) => {
    try{
        let id = req.params.id;
        console.log(id);
        let find = await Product.find({"product.id":id});
        let ID = find[0].toObject()._id
        console.log(ID);
        let del = await Product.findByIdAndDelete(ID);
        let data = []
        data.push({Message:'Product has Deleted '});
        res.send(data)
        // res.send(dle)
        // console.log(del);
    }
    catch{
        console.log(`Error in deleting product from Data Base`);
    }

}
