//We need to require express in order to build a fast API
//The line of code below now enables us to use express()
//So all the functions and modules that comes with express js
//are now stored in the app variables and can be used anywhere
//const PORT = 8000 means the server should listen at port 8000
//The cols package makes it possible for the client to fetch data on the server  


//Now since we are creating a CRUD api that gets file upon request we use 
//the get method, which listens for request and responses with some files
//The '/' represents the home page load or root site
//Once the server hears a get request from the client side
//it runs the call back function

const express = require ('express')
const app = express()
const cors = require('cors')
const PORT = 8000

//The code below enables us to use to the cors package we installed.
app.use(cors())

//the rapper object below stores a collection of objects i.e savage and chance the rapper.
//The savage object is sent to the client when it is requested by the user via the api/url below
let rappers={
    'savage': {
        'age': 28,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 27,
        'birthName': 'Chancelor Jonathan Bennett',
        'birthLocation': 'chicago, Illinios'
    },
     'unknown':{
        'age': 29,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
     }
}


//The code below simply means when a request is made for the home page 
//represented by /, the response parameter should send html file to the client
//The get and listen functions/methods all come with express but stored in the app variable
app.get('/', (request, response) => {
   response.sendFile(__dirname + '/index.html')
})

//This api response with a json file when the client requests for /api/savage api via the url
//The :rapperName basically holds the name of the rapper the user will type in the url
app.get('/api/rappers/:rapperName', (request, response) =>{
    //the line below grabs the request from the client and stores it the rapName variable
   const rapName = request.params.rapperName.toLowerCase()
   //The conditional below checks to see if the name of the rapper entered in the url is in the rappers object
   //the block of code below selects the paticular rappers object from the rappers object and respond with it
   //the [] notation is used here instead of .(dot) notation because the objects to are spaced 
   //as seen in 21 savage not 21savage
   if(rappers[rapName]){
    response.json(rappers[rapName])
   }else{
    response.json(rappers['unknown'])
   }
  
})


//This code enables the server to listen for requests on port 8000 
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})