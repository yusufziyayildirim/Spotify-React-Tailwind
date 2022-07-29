import Navbar from 'components/Navbar'
import { Routes, Route } from "react-router-dom";
import HomePage from "views/HomePage"
import SearchPage from "views/SearchPage"
import CollectionPage from "views/CollectionPage"
import { useRef, useState } from "react"


const Content = () => {

  const [scrollY, setScrollY] = useState(false);

  const listInnerRef = useRef();

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop } = listInnerRef.current;
      if (scrollTop > 0) {
        return setScrollY(true)
      }
        return setScrollY(false)
    }
  };

  return (
    <div className='flex-auto overflow-auto scrollbar scrollbar-content' onScroll={onScroll} ref={listInnerRef}>
      <Navbar onScroll={scrollY}/>
      <div className='pt-2'></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
    </div>
  )
}

export default Content