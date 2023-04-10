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
function Question1() {
  const [items, setItems] = useState([]);
  const [buttons, setButtons] = useState([]);
  const [display, setDisplay] = useState("");

  const getData = async () => {
    try {
      const response = await fakeFetch1("https://example.com/api/products");
      setButtons(response.data.products);
      setItems(response.data.products);

    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const buttonHandler = (name) => {
    const filter = items.find((item) => item.name === name);
    console.log(filter);
    setDisplay(filter);


  };


  return (
    <>
      <h2>Question1</h2>
      <ul>
        {buttons.map((item) => <button key={item.name} onClick={() => buttonHandler(item.name)}>Show {item.name}</button>)}

      </ul>
      <img src={display.src} alt="flower" style={{ height: "200px", width: "200px" }} />
      <h2>{display.name}</h2>
      <h2>Price: {display.price}</h2>
      <h2>{display.desc}</h2>
    </>
  );
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
        });
      } else {
        reject({
          status: 404,
          message: 'Habits not found.',
        });
      }
    }, 2000);
  });
};
function Question3() {

  const [items, setItems] = useState([]);


  const getData = async () => {
    const response = await fakeFetch3('https://example.com/api/habits');
    setItems(response.data.habits);

  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>Question3</h2>
      <ul>
        {items.map((item) => <li><h2>{item.title}</h2>
          <p>{item.desc}</p><br />
          <h3>Days Followed: {item.daysFollowed}</h3>
          <h3>Days Skipped: {item.daysSkipped}</h3><hr /></li>




        )}
      </ul>
    </>
  );
}
//---------------------------------------QUESTION 4
const fakeFetch4 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/videos') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            videos: [
              {
                title: 'The Power of Habit',
                thumbnail: 'https://picsum.photos/200/130',
                views: 1000000,
                likes: 50000,
              },
              {
                title: 'How to Code in JavaScript',
                thumbnail: 'https://picsum.photos/200/135',
                views: 500000,
                likes: 25000,
              },
              {
                title: '10 Minute Yoga for Beginners',
                thumbnail: 'https://picsum.photos/200/131',
                views: 250000,
                likes: 15000,
              },
              {
                title: 'Introduction to Machine Learning',
                thumbnail: 'https://picsum.photos/200/132',
                views: 100000,
                likes: 10000,
              },
              {
                title: 'The Science of Cooking',
                thumbnail: 'https://picsum.photos/200/133',
                views: 75000,
                likes: 5000,
              },
              {
                title: 'The Art of Public Speaking',
                thumbnail: 'https://picsum.photos/200/134',
                views: 50000,
                likes: 2500,
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: 'Videos not found.',
        });
      }
    }, 2000);
  });
};
function Question4() {
  const [items, setItems] = useState([]);

  const getData = async () => {
    try {
      const response = await fakeFetch4("https://example.com/api/videos");
      setItems(response.data.videos);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handler = () => {
    const filtered = items.filter((item, index) => index !== 0);
    console.log(filtered);
    setItems(filtered);
  };

  return (
    <>
      <h2>Question4</h2>
      <h3>My Playlist</h3>
      <button onClick={handler}>Delete</button>

      <ul>
        {items.map((item) => (

          <li key={item.title}>
            <img src={item.thumbnail} />
            <p>{item.title}</p>
            <p>Views: {item.views}</p>
            <p>Likes :{item.likes}</p>


          </li>
        ))}
      </ul>
    </>
  );
}
//---------------------------------------QUESTION 5

export const fakeFetch5 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/posts') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            posts: [
              {
                caption: 'Delicious chocolate cake recipe',
                src: 'https://picsum.photos/300/301',
                views: 1000,
                likes: 100,
                category: 'Bakery',
              },
              {
                caption: '5-minute breakfast ideas',
                src: 'https://picsum.photos/300/300',
                views: 500,
                likes: 50,
                category: 'Food',
              },
              {
                caption: "The best bread recipe you'll ever taste",
                src: 'https://picsum.photos/300/302',
                views: 2000,
                likes: 200,
                category: 'Bakery',
              },
              {
                caption: '10 DIY home decor ideas',
                src: 'https://picsum.photos/300/303',
                views: 100,
                likes: 10,
                category: 'DIY',
              },
              {
                caption: 'Healthy snacks for work',
                src: 'https://picsum.photos/300/304',
                views: 300,
                likes: 30,
                category: 'Food',
              },
              {
                caption: 'How to make sourdough bread at home',
                src: 'https://picsum.photos/300/305',
                views: 1500,
                likes: 150,
                category: 'Bakery',
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: 'Post not found.',
        });
      }
    }, 500);
  });
};
function Question5() {

  const [items, setItems] = useState([]);

  const getData = async () => {
    try {
      const response = await fakeFetch5('https://example.com/api/posts');
      setItems(response.data.posts);
      console.log(response.data.posts);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handler = () => {
    const filtered = items.filter((item) => item.category === 'Bakery');
    setItems(filtered);
  };

  return (
    <>
      <h2>Question5...</h2>
      <button onClick={handler}>SHow Bakery </button>
      <ul>
        {items.map((item) => (
          <li key={item.title}>
            <img src={item.src} />
            <h3>{item.title}</h3>
            <p>Category: {item.category}</p>
            <p>Likes: {item.likes}</p>
            <p>Views: {item.views}</p>

          </li>
        ))}
      </ul>
    </>
  );
}
//---------------------------------------QUESTION 6 ...doubt
export const fakeFetch6 = (url) => {
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
                archived: false,
              },
              {
                title: 'Exercise',
                desc: 'Track your workouts and aim to exercise a certain number of days per week',
                daysFollowed: 10,
                daysSkipped: 4,
                archived: true,
              },
              {
                title: 'Meditation',
                desc: 'Track your daily meditation practice and try to increase the length of your sessions over time',
                daysFollowed: 30,
                daysSkipped: 7,
                archived: true,
              },
              {
                title: 'Gratitude',
                desc: 'Write down something you are grateful for each day',
                daysFollowed: 11,
                daysSkipped: 5,
                archived: false,
              },
              {
                title: 'Saving Money',
                desc: 'Track your expenses and set a goal to save a certain amount of money each month',
                daysFollowed: 40,
                daysSkipped: 15,
                archived: false,
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: 'Habits not found.',
        });
      }
    }, 2000);
  });
};
export function Question6() {
  const [items, setItems] = useState([]);
  const [data, setData] = useState([]);
  const [heading, setHeading] = useState("Unarchived");

  const getData = async () => {
    try {
      const response = await fakeFetch6('https://example.com/api/habits');
      setItems(response.data.habits);
      setData(response.data.habits);



    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handler = () => {
    const updated = items.filter((item) => item.archived === true);

    setData(updated);

  };


  return (
    <>
      <h2>Question 6</h2>
      <h1>{heading}</h1>
      <ul>
        {data.map((item) => (
          <li key={item.title}>
            <h2>{item.title}</h2>
          </li>
        ))}
      </ul>
      <button onClick={handler}>Show Archived</button>

    </>
  );
}
//---------------------------------------QUESTION 7 


export const fakeFetch7 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/projects') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            projects: [
              {
                title: 'E-commerce Website',
                description: 'A fully functional e-commerce website with shopping cart and checkout functionality.',
                technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
                completed: false,
              },
              {
                title: 'Weather App',
                description: 'A web application that displays the current weather and forecast for a given location.',
                technologies: ['React', 'Node.js', 'OpenWeatherMap API'],
                completed: true,
              },
              {
                title: 'Task Manager',
                description: 'A web application that allows users to create, manage and track tasks.',
                technologies: ['Vue.js', 'Firebase'],
                completed: false,
              },
              {
                title: 'Blog Website',
                description: 'A blog website that allows users to create, read, update and delete blog posts.',
                technologies: ['React JS', 'MongoDB'],
                completed: true,
              },
              {
                title: 'Mobile Game',
                description: 'A mobile game developed for iOS and Android platforms.',
                technologies: ['Unity', 'C#'],
                completed: false,
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: 'Projects not found.',
        });
      }
    }, 2000);
  });
};
function Question7() {
  const [items, setItems] = useState([]);
  const [details, setDetails] = useState([]);

  const getData = async () => {
    try {
      const response = await fakeFetch7('https://example.com/api/projects');
      setItems(response.data.projects);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handler = (title) => {
    const desc = items.filter((item) => item.title === title);
    setDetails(desc);
  };
  return (
    <>
      <h2>Question 7</h2>
      <ul>
        {details.map((item) => (
          <li key={item.title}>
            <h3>Name: {item.title}</h3>
            <p>Tech: {item.technologies.join(" ")}</p>
            <p>{item.description}</p>


          </li>
        ))}
      </ul>
      <h2>All projects :</h2>
      <ul>
        {items.map((item) => (
          <li key={item.title}>
            <h3>Name: {item.title}</h3>
            <p>{item.technologies.join(" ")}</p>
            <button onClick={() => handler(item.title)}>Show Details</button>

          </li>
        ))}
      </ul>
    </>
  );
}
//---------------------------------------QUESTION 8
export const fakeFetch8 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/profile') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            profiles: {
              name: 'John',
              age: 30,
              gender: 'male',
              email: 'john@example.com',
              occupation: 'Software Engineer',
            },
          },
        });
      } else {
        reject({
          status: 404,
          message: 'User Profile not found.',
        });
      }
    }, 2000);
  });
};
function Question8() {
  const [items, setItems] = useState([]);

  const getData = async () => {
    try {
      const response = await fakeFetch8('https://example.com/api/profile');
      setItems(response.data.profiles);
      console.log(response.data.profiles);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handler = () => {
    const updatedItem = {
      ...items,
      name: "Vinla"
    };
    setItems(updatedItem);
  };

  return (
    <>
      <h2>Question 8</h2>
      <h1>Profile</h1>
      <h3>Name: {items.name}</h3>
      <h3>Age: {items.age}</h3>
      <h3>Gender: {items.gender}</h3>
      <h3>Email: {items.email}</h3>
      <h3>Occupation: {items.occupation}</h3>

      <button onClick={handler}>Update Name</button>
    </>
  );
}
//---------------------------------------QUESTION 9

export const fakeFetch9 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/getvideo') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            videos: {
              title: 'The Power of Habit',
              thumbnail: 'https://picsum.photos/250/130',
              views: 1000000,
              likes: 50000,
            },
          },
        });
      } else {
        reject({
          status: 404,
          message: 'Video not found.',
        });
      }
    }, 2000);
  });
};
function Question9() {

  const [items, setItems] = useState([]);

  const getData = async () => {
    try {
      const response = await fakeFetch9('https://example.com/api/getvideo');
      setItems(response.data.videos);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handler = () => {
    const updatedItems = {
      ...items,
      label: "Label : Self Motivational"
    };
    setItems(updatedItems);
  };

  return (
    <>
      <img src={items.thumbnail} alt=" " />
      <h3>{items.title}</h3>
      <p>Views: {items.views}</p>
      <p>Likes: {items.likes}</p>
      <p>{items.label}</p>
      <button onClick={handler}>Add Label</button>
    </>
  );
}
//---------------------------------------QUESTION 10



export const fakeFetch10 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/profile') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            profile: {
              name: 'John',
              age: 30,
              gender: 'male',
              email: 'john@example.com',
              occupation: 'Software Engineer',
              followers: 450,
              followedBy: 400,
            },
          },
        });
      } else {
        reject({
          status: 404,
          message: 'Profile not found.',
        });
      }
    }, 2000);
  });
};
function Question10() {
  const [items, setItems] = useState([]);
  const [isDisable, setIsDisable] = useState(false);

  const getData = async () => {
    try {
      const response = await fakeFetch10('https://example.com/api/profile');
      setItems(response.data.profile);
    } catch (e) {
      console.error(e);
    }

  };

  useEffect(() => {
    getData();
  }, []);
  const handler = () => {
    const updatedItem = {
      ...items,
      followers: items.followers + 1
    };
    setItems(updatedItem);
    setIsDisable(true);

  };
  return (
    <>
      <h2>Question10</h2>
      <h1>Profile</h1>
      <h3>Name: {items.name}</h3>
      <h3>Gender: {items.gender}</h3>
      <h3>Age: {items.age}</h3>
      <h3>Email: {items.email}</h3>
      <h3>Followers:{items.followers}</h3>
      <h3>Followedby: {items.followedBy}</h3>

      <button onClick={handler} disabled={isDisable}>Follow</button>
    </>
  );
}
