document.querySelector('button').addEventListener('click', getrapName)

//The async/await function below basically fetches the api (api/savage) 
//in the server we created that listen at port 8000
async function getrapName(){
    //the line below grabs the values within the input and store it
    //in the rapName variable
    const rapName = document.querySelector('input').value
    try{
        //`http://localhost:8000/api/rappers/${rapName}`,whatever rapper name
        //entered by the user is appended to api below and fetched from the server
        const res = await fetch(`http://localhost:8000/api/rappers/${rapName}`)
        const data = await  res.json()
        console.log(data)
        //puts the rapper's name in the h2 tag in the DOM
        document.querySelector('h2').innerText = data.birthName
    }catch(err){
        console.log(err)
    }
}