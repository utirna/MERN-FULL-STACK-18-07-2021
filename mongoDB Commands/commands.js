/*
    # see database
        show dbs
    
    # create/switch
        use db_name
        
    # current db name
        db
    
    # create collection
        db.createCollection('collection_name');

    # get collection list
        show collections

    # delete collection 
         db.collection_name.drop()

    # delete db
        db.dropDatabase()


    // insert one ==> insert() 
        db.collection_name.insert({ name:"deepak", course:'React' })

    // insert many ==> insertMany()
        db.collection_name.insertMany([{
            name:'Ramesh',
            course:'Core Java'
        },
        {
            name:'Ajay',
            course:'Advance Java'
        },
        {
            name:'Rohit',
            course:'React'
        },
        {
            name:'Rohan',
            course:'Node Js'
        }])



    // read ===> find()
        db.collection_name.find() or
        db.collection_name.find({name:"deepak"},{name:1,_id:0}) filter | projections

    // find 
        db.collection_name.find().count()
        db.collection_name.find({course:'React'}).count()

    // limit 
        db.collection_name.find().limit(3)

    // update ==> update()
        db.student_details.updateOne({name:"deepak"},{name:"deepakkumar", course:'React'}) filter | update data | flags
        db.student_details.updateMany({name:"deepak"},{name:"deepakkumar", course:'React'})

        db.student_details.update({name:"deepak1"},{name:"deepakkumar shinde", course:'React'},{upsert:true})


    // delete ==> delete()
        db.collection_name.deleteOne({name:'Rohan'})
        db.collection_name.deleteMany({name:'Rohan'})
*/
