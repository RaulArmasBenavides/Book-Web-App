import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import {BookRoutes} from '../books/routes/BookRoutes';
// import { useCheckAuth } from '../hooks';


export const AppRouter = () => {

  // const status = useCheckAuth();c
 console.log("test")
  // if ( status === 'checking' ) {
  //   // return < />
  // }

  return (

 
    <Routes>

        {/* {
          (status === 'authenticated')
           ? <Route path="/*" element={ <BookRoutes /> } />
           : <Route path="/auth/*" element={ <AuthRoutes /> } />
        } */}

        {/* <Route path='/*' element={ <Navigate to='/auth/login' />  } />
        <Route path='/' element={<Home />}></Route>
				<Route path='/quotes' element={<Quotes />}></Route>
				<Route path='Books/:id' element={<BookDetails />}></Route>
				<Route path='*' element={<NotFound/>} /> */}
        {/* Login y Registro */}
        {/* <Route path="/auth/*" element={ <AuthRoutes /> } /> */}

        {/* BookRoutes */}
        {<Route path="/*" element={ <AuthRoutes /> } />}

    </Routes>
  )
}
