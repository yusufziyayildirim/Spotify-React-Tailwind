import {useEffect, useRef, useState} from "react";
import categories from "assets/data/categories"
import favoriteCategories from "assets/data/favorite-categories"
import Title from "components/Content/Title"
import { Icon } from "assets/icons/Icons"
import { Category, WideCategory } from "components/Content/Search/Category"
import ScrollContainer from "react-indiana-drag-scroll";


const SearchPage = () => {

  const favoritesRef = useRef()
  const [prev, setPrev] = useState(false)
  const [next, setNext] = useState(false)

  useEffect(() => {
    if (favoritesRef.current) {
      const scrollHandle = () => {
        const isEnd = favoritesRef.current.scrollLeft + favoritesRef.current.offsetWidth === favoritesRef.current.scrollWidth
        const isBegin = favoritesRef.current.scrollLeft === 0
        setPrev(!isBegin)
        setNext(!isEnd)
      }

      scrollHandle()
      favoritesRef.current.addEventListener('scroll', scrollHandle)

      return () => {
        favoritesRef?.current?.removeEventListener('scroll', scrollHandle)
      }

    }
  }, [favoritesRef])

  const slideNext  = () => {
    favoritesRef.current.scrollLeft += favoritesRef.current.offsetWidth - 300
  }
  const slidePrev = () => {
    favoritesRef.current.scrollLeft -= favoritesRef.current.offsetWidth - 300
  }


  return (
    <div className="px-8">
      <section className="mb-8">
        <Title title="En çok dinlediğin türler" />
        <div className="relative">
          {prev && <button className="w-12 absolute -left-6 hover:scale-[1.06] z-10 top-1/2 -translate-y-1/2 h-12 rounded-full bg-white text-black flex items-center justify-center" onClick={slidePrev}><Icon name="prev" size={24} /></button>}
          {next && <button className="w-12 absolute -right-6 hover:scale-[1.06] z-10 top-1/2 -translate-y-1/2 h-12 rounded-full bg-white text-black flex items-center justify-center" onClick={slideNext}><Icon name="next" size={24} /></button>}
          <ScrollContainer
            innerRef={favoritesRef}
            className="flex scrollable overflow-x gap-x-6 scroll-smooth"
          >
          {favoriteCategories.map((category, index) => <WideCategory key={index} category={category} />)}
           
          </ScrollContainer>
        </div>
      </section>

      <section>
        <Title title="Hepsine göz at" />
        <div className="grid grid-cols-6 gap-6">
          {categories.map((category, index) => <Category key={index} category={category} />)}
        </div>
      </section>
    </div>
  )
}

export default SearchPage