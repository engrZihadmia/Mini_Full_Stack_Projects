let Contact = require('../model/contactModel')

let Alldata=()=>{
    return Contact.find()
}

module.exports.getContactControllers=async(req, res)=>{

    try{
        let AllContact= await Alldata()

        console.log(AllContact)
   res.render('index', {Contacts:AllContact}) 

    }

    catch(err){
                 res.json(err)
    }   



    

}


module.exports.addContactController=async(req,res)=>{

    const {name,email,phone}=req.body;
    let id=req.body.id

     if(id){

        
    try{
            let updateContact= await Contact.findByIdAndUpdate(id,{name, email,phone}, {new: true} )
             console.log(AllContact)
            res.render('index', {Contact:AllContact})
          console.log("Contact is Updated", updateContact)
    }

      catch(err){
      
 res.json(err)
    }

    }else{

           try{

        
        let newContact= new Contact({
            name,email,phone
        })

        await newContact.save()
   let AllContact= await Alldata()
        console.log("New user Created Successfully", newContact)
        res.render('index', {Contacts:AllContact}) 
    }

    catch(err){
     

        res.json(err)
    }
    }

   
 


}


module.exports.deleteContactController=async(req,res)=>{
    let id= req.params.id
try{

    let deleteContact=await Contact.findByIdAndDelete(id)

      let AllContact= await Alldata()

        console.log(AllContact)
   res.render('index', {Contacts:AllContact}) 

   

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