
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from 'react-router-dom';
import './App.css';
// import Navbar from './RRDV6/Navbar';
import Form from './Components/Form';
import NestedAsyn from './Components/NestedAsyn';
import Spinner from './Components/Spinner';
import PageNotFound from './RRDV6/PageNotFound';
import Layout from './RRDV6/Layout';
import AddForm from './RRDV6/AddForm';
import ListForm from './RRDV6/ListForm';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />} >
        <Route path='/nested' element={<NestedAsyn/>}></Route>
        <Route path='/spinner' element={<Spinner />}></Route>
        <Route path='/' element={''}> 
          <Route path='/form/add' element={<Form />} />
          <Route path='/form/List' element={<ListForm />} />
       </Route>
        <Route path='*' element={<PageNotFound />} /></Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />

      {/* <BrowserRouter>

    //   <Routes>
    //     <Route path='/' element={<Navbar />} >
    //     <Route path='/nested' element={<NestedAsyn />}></Route>
    //     <Route path='/spinner' element={<Spinner />}></Route>
    //     <Route path='/form' element={<Form />}></Route>
    //     <Route path='*' element={<PageNotFound />} /></Route>
    //   </Routes>

    //   

    </BrowserRouter> */}
      {/* <Form/> */}
      {/* <NestedAsyn/>
       <Spinner/> */}
    </>
  );
}

export default App;
