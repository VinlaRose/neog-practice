import { useState, useEffect } from 'react';

const fakeFetch1 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/users/status') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            users: [
              { name: 'Raju', status: 'Online' },
              { name: 'Pankaj', status: 'Offline' },
              { name: 'Sakshi', status: 'Offline' },
              { name: 'Kishore', status: 'Offline' },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: 'No users Found',
        });
      }
    }, 2000);
  });
};
export function Trial() {
  const [items, setItems] = useState([]);
  useEffect(() => {

    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fakeFetch1('https://example.com/api/users/status');
      if (response.status === 200) {
        setItems(response.data.users);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <p>Question1</p>
      <ul>
        {items.map((prod) => {
          return (
            <li key={prod.id} style={{ color: prod.status === "Offline" ? "red" : "green" }}>{prod.name}</li>
          );
        })}
      </ul>
    </>
  );
}
// -----------------------------------------------------------------------------------------
const fakeFetch2 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/products') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            products: [
              { name: 'Color Pencils', price: 50, quantity: 40 },
              { name: 'Sketchpens', price: 110, quantity: 20 },
              { name: 'Erasor', price: 20, quantity: 20 },
              { name: 'Sharpner', price: 22, quantity: 30 },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: 'Items list not found.',
        });
      }
    }, 2000);
  });
};
export const Question2 = () => {
  const [items, setItems] = useState([]);
  const getData = async () => {
    try {
      const response = await fakeFetch2('https://example.com/api/products');
      if (response.status === 200) {
        setItems(response.data.products);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = () => {
    const filteredItems = items.filter((item) => item.quantity > 20);
    setItems(filteredItems);
  };


  return (
    <>
      <p>Question 2</p>
      <button onClick={handleClick}>Show Products with quantity more than 20</button>
      <ul>
        {items.map((item) => <li>{item.name}--INR {item.price}--{item.quantity}</li>)}
      </ul>
    </>
  );
};
// -----------------------------------------------------------------------------------------
export const Question3 = () => {
  const [items, setItems] = useState([]);
  const getData = async () => {
    try {
      const response = await fakeFetch2('https://example.com/api/products');
      if (response.status === 200) {
        setItems(response.data.products);
        console.log(response.data.products);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = () => {
    const filteredItems = items.filter((item) => item.price < 100);
    setItems(filteredItems);
  };


  return (
    <>
      <p>Question 3</p>
      <button onClick={handleClick}>Filter by price less than 100</button>
      <ul>
        {items.map((item) => <li key={item.name}>{item.name}--INR {item.price}--{item.quantity}</li>)}
      </ul>
    </>
  );
};
// -----------------------------------------------------------------------------------------
const fakeFetch4 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/user') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            name: 'Saroj',
            image: 'https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_1280.jpg',
            likes: 500,
            comments: 10,
          },
        });
      } else {
        reject({
          status: 404,
          message: 'user data not found.',
        });
      }
    }, 3000);
  });
};
export function Question4({ height, width, heading }) {
  const [items, setItems] = useState([]);
  const getData = async () => {
    try {
      const response = await fakeFetch4('https://example.com/api/user');
      setItems(response.data);
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <p>Question 4</p>
      <h1>{heading}</h1>
      <h2>{items.name}</h2>
      <img src={items.image} alt="flower" style={{ height: height, width: width }} />
      <p>Likes: {items.likes}</p>
      <p>Comments: {items.comments}</p>
    </>
  );
}
// -----------------------------------------------------------------------------------------
export const fakeFetch5 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/users') {
        resolve({
          status: 200,
          message: 'Success',
          data: [
            {
              name: 'Saroj',
              image: 'https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg',
              likes: 500,
              comments: 10,
            },
            {
              name: 'Meeta',
              image: 'https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg',
              likes: 200,
              comments: 1,
            },
            {
              name: 'Alia',
              image: 'https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg',
              likes: 100,
              comments: 5,
            },
          ],
        });
      } else {
        reject({
          status: 404,
          message: 'users data not found.',
        });
      }
    }, 2000);
  });
};
export function Question5() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    try {
      setLoading(true);
      const response = await fakeFetch5('https://example.com/api/users');

      setItems(response.data);


      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <p>Question 5</p>
      {loading && <p style={{ color: "red" }}>"Data is Loading..."</p>}

      <ul>
        {items.map((item) => <li>
          <img src={item.image} alt="flower" style={{ height: "200px", width: "200px" }} /><p>{item.name}</p>
          <p>Likes: {item.likes}</p><p>Comments: {item.comments}</p></li>)}
      </ul>
    </>
  );
}
// -----------------------------------------------------------------------------------------
export const fakeFetch7 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/comments') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            comments: [
              {
                name: 'Raju',
                text: 'Hello how are you long time no see!!!'
              },
              { name: 'Pankaj', text: 'Party when??' },
              { name: 'Sakshi', text: 'Where are you currently staying' },
              { name: 'Kishore', text: 'Hello Buddy!!' },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: 'No comments Found',
        });
      }
    }, 2000);
  });
};
export function Question7() {
  const [items, setItems] = useState([]);

  const getData = async () => {
    try {
      const response = await fakeFetch7('https://example.com/api/comments');
      setItems(response.data.comments);
    } catch (e) {
      console.error(e);
    }

  };

  useEffect(() => {
    getData();
  }, []);
  const handler = (name) => {
    const filtered = items.filter((item) => item.name !== name);
    setItems(filtered);
  };
  return (
    <>
      <p>Question 7 Chatting</p>
      <ul>
        {items.map((item) => <li><h3>{item.name}</h3><p>{item.text}</p>
          <p>
            <button onClick={() => handler(item.name)}>DELETE</button>
          </p>
        </li>)}
      </ul>
    </>
  );
}
// -----------------------------------------------------------------------------------------
export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/userchat') {
        resolve({
          status: 200,
          message: 'Success',
          data: [
            {
              name: 'Alia',
              messages: [
                {
                  from: 'Alia',
                  message: 'Good Morning',
                },
                {
                  from: 'Ranvir',
                  message: 'Good Morning, How are you?',
                },
              ],
            },
            {
              name: 'Jeena',
              messages: [
                {
                  from: 'Jeena',
                  message: 'When is the meeting scheduled?',
                },
                {
                  from: 'Seema',
                  message: 'It is at 10AM tomorrow.',
                },
              ],
            },
            {
              name: 'Abhay',
              messages: [
                {
                  from: 'Abhay',
                  message: 'Have you found a house yet?',
                },
                {
                  from: 'John',
                  message: 'No luck yet, still searching.',
                },
                {
                  from: 'Abhay',
                  message: 'Hey, an apartment just got vacant in my bulding. Do you wanna have a look?',
                },
              ],
            },
          ],
        });
      } else {
        reject({
          status: 404,
          message: 'users chat not found.',
        });
      }
    }, 2000);
  });
};
