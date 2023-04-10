
import { useEffect, useState } from 'react';
// import { Question7, Question5, Trial, Question2, Question3, Question4 } from './Practice5';


//---------------------------------------QUESTION 1 Discuss it!!!!!!
const fakeFetch1 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/products') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            products: [
              {
                name: 'Shoes',
                price: 3000,
                desc: 'lorem ipsum dolor sit amit',
                src: 'https://picsum.photos/200/200',
              },
              {
                name: 'Tshirt',
                price: 500,
                inStock: false,
                desc: 'lorem ipsum dolor sit amit',
                src: 'https://picsum.photos/201/201',
              },
              {
                name: 'Trekking Bag',
                price: 2000,
                inStock: true,
                desc: 'lorem ipsum dolor sit amit',
                src: 'https://picsum.photos/205/205',
              },
            ],
          },
        })
      } else {
        reject({
          status: 404,
          message: 'Items list not found.',
        })
      }
    }, 2000)
  })
}
function Question1(){
const [items, setItems] = useState([]);
const [buttons, setButtons] = useState([]);
const [display, setDisplay] = useState("");

const getData = async() => {
  try{
    const response = await fakeFetch1("https://example.com/api/products");
   setButtons(response.data.products);
  setItems(response.data.products)
    
  }catch(e){
    console.error(e);
  }
}

useEffect(()=>{
getData();
},[])
 
const buttonHandler = (name) => {
  const filter = items.find((item) => item.name === name);
  console.log(filter);
  setDisplay(filter);
 
  
}


  return(
    <>
    <h2>Question1</h2>
    <ul>
      {
        buttons.map((item) => <button key={item.name} onClick = {() => buttonHandler(item.name)}>Show {item.name}</button>)
      }
      
    </ul>
    <img src={display.src} alt="flower" style={{ height: "200px", width: "200px" }}/>
   <h2>{display.name}</h2>
   <h2>Price: {display.price}</h2>
   <h2>{display.desc}</h2>
    </>
  )
}

//---------------------------------------QUESTION 2



//---------------------------------------QUESTION 3
const fakeFetch3 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/habits') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            habits: [
              {
                title: 'Drinking enough water',
                desc: 'Aim to drink 5-6L of water each day to stay hydrated',
                daysFollowed: 7,
                daysSkipped: 3,
              },
              {
                title: 'Exercise',
                desc: 'Track your workouts and aim to exercise a certain number of days per week',
                daysFollowed: 10,
                daysSkipped: 4,
              },
              {
                title: 'Meditation',
                desc: 'Track your daily meditation practice and try to increase the length of your sessions over time',
                daysFollowed: 30,
                daysSkipped: 7,
              },
              {
                title: 'Gratitude',
                desc: 'Write down something you are grateful for each day',
                daysFollowed: 11,
                daysSkipped: 5,
              },
              {
                title: 'Saving Money',
                desc: 'Track your expenses and set a goal to save a certain amount of money each month',
                daysFollowed: 40,
                daysSkipped: 15,
              },
            ],
          },
        })
      } else {
        reject({
          status: 404,
          message: 'Habits not found.',
        })
      }
    }, 2000)
  })
}

function Question3(){

  const [items, setItems] = useState([])


  const getData = async() => {
    const response = await fakeFetch3('https://example.com/api/habits');
    setItems(response.data.habits)

  }

  useEffect(() => {
    getData();
  },[])

  return(
    <>
    <ul>
      {
        items.map((item) => 
          <li><h2>{item.title}</h2>
          <p>{item.desc}</p><br/>
          <h3>Days Followed: {item.daysFollowed}</h3>
          <h3>Days Skipped: {item.daysSkipped}</h3><hr/></li>
          
          


        )
      }
    </ul>
    </>
  )
}



function App() {

  return (
    <div className="App">
     <h1>Practice Set 5 (useEffect)</h1>
     <Question3/>

     {/* <Question2/> */}
    {/* <Question1/> */}

    {/* <h1>Practice Set 5 (useEffect)</h1>
    <Question7/>
    <Question5/>
    <Trial/>          //Question1
    <Question2/>
    <Question3/>
    <Question4 heading = "User Profile" height = "400px" width = "400px" /> */}
      
    </div>
  );
}

export default App;
