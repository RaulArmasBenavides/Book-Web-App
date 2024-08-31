import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Layout} from '../../shared/Layout';
import {BookDetails } from "../components/BookDetails";

export const BookRoutes = () => {
  return (
    <Layout>
    <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path='Books/:id' element={<BookDetails />}></Route> 
        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
    </Layout>
  )
}