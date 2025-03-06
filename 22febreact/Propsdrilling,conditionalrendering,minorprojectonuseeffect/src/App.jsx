import { useEffect, useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import FirstChild from './Component/FirstChild';
// import Skeliton from './Component/Skeliton';

function App() {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  // const [text, setText] = useState("")
  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log('faced error while feching data....');
  //       setLoading(false);
  //     });
  // });

  const [data, setData] = useState({
    userId: 1,
    title: 'delectus aut autem',
    completed: false,
  });
  return (
    <>
      <div className='p-6'>
        {/* Props drilling */}
        <FirstChild userId={data.userId} title = {data.title} completed = {data.completed}/>

        {/* <div>
          <h1>Two way Binding </h1>
          <input type="text" className='border rounded-md' placeholder='Type Something ...' value={text} onChange={(e)=>setText(e.target.value)} />
          <p>you type: {text}</p>
        </div> */}

        {/* <div className='grid grid-cols-1 gap-4'> */}
        {/* conditional rendering */}
        {/* {loading === true */}
        {/* ? <Skeliton/> */}
        {/* : products.map((data) => ( */}
        {/* // key was defined because distingueisment each and every product */}
        {/* <div key={data.id} className='bg-white shadow-lg rounded-xl p-4 hover:shadow-xl transition'>
                  <h1 className='text-5xl font-bold mb-4'>Product List</h1>
                  <img className='w-full h-30 object-contain mb-2' src={data.image} alt='image' />
                  <h2 className='text-lg font-semibold truncate'>{data.title}</h2>
                  <p className='text-gray-800 font-bold'> Price:--{data.price}</p>
                </div> */}
        {/* ))} */}
        {/* </div> */}
      </div>
    </>
  );
}

export default App;
