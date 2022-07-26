import Navbar from 'components/Navbar'
import { Routes, Route } from "react-router-dom";
import HomePage from "views/HomePage"
import SearchPage from "views/SearchPage"
import CollectionPage from "views/CollectionPage"

const Content = () => {
  return (
    <div className='w-full px-8'>
      <Navbar />
      <div className='pt-2'></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage/>} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
    </div>
  )
}

export default Content