import { Navigate, Route, Routes } from 'react-router-dom';
import {BookRoutes} from '../books/routes/BookRoutes';
 

export const AppRouter = () => {

  return (
    <Routes>
        <Route path="/*" element={ <BookRoutes /> } />
        {/* <Route path='/*' element={ <Navigate to='/auth/login' />  } />
        <Route path='/' element={<Home />}></Route>
				<Route path='/quotes' element={<Quotes />}></Route>
		
				<Route path='*' element={<NotFound/>} /> */}
        {/* Login y Registro */}
        {/* <Route path="/auth/*" element={ <AuthRoutes /> } /> */}

        {/* BookRoutes */}
        {/* {<Route path="/*" element={ <AuthRoutes /> } />} */}

    </Routes>
  )
}
