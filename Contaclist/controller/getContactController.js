let Contact = require('../model/contactModel')


module.exports.getContactControllers=async(req, res)=>{

    try{

        let AllContact= await Contact.find()
        console.log(AllContact)
    res.json({
        "data": AllContact
       })   

    }

    catch(err){
                 res.json(err)
    }   



    

}


module.exports.addContactController=async(req,res)=>{

    const {name,email,phone}=req.body;

    try{
        let newContact= new Contact({
            name,email,phone
        })

        await newContact.save()

        console.log("New user Created Successfully", newContact)
        res.json(newContact)
    }

    catch(err){
     

        res.json(err)
    }


}


module.exports.deleteContactController=async(req,res)=>{
    let id= req.params.id
try{

    let deleteContact=await Contact.findByIdAndDelete(id)

    console.log('Contact Deleted Successfully!')

    res.json({
        "Message" : "Succeesfully Deleted"
    })

}

  catch(err){
         res.json(err)
    }


}

module.exports.updateContactController=async(req,res)=>{

let _id= req.params.id
    let {name,email,phone}= req.body

    try{
            let updateContact= await Contact.findByIdAndUpdate(_id,{name, email,phone}, {new: true} )
            res.josn({
                "Message" :updateContact
            })

          console.log("Contact is Updated", updateContact)
    }

      catch(err){
      
 res.json(err)
    }


}