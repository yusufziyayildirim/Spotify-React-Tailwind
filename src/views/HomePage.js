import Section from "components/Content/Home/Section"
import songs from "assets/data/songs"

const HomePage = () => {

 

  return (
    <div className='bg-gradient-to-b from-[#1e1e1e] to-[#121212] px-8 py-5'>
      <Section
        title="Hoşuna gidebilecek programlar"
        more="/more"
        items={songs}
      />
      <Section
        title="Sizin için derlendi"
        more="/more"
        items={songs}
      />
      <Section
        title="Yakında çalınanlar"
        more="/more"
        items={songs}
      />
    </div>
  )
}

export default HomePage