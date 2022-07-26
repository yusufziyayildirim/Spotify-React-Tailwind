import Title from "components/Content/Title"
import SongCard from "./SongCard"

const Section = ({ title, more = false, items }) => {
    return (
        <section>
            <Title title={title} more={more} />
            <div className="grid grid-cols-6 gap-x-6">
                {items.map(item => <SongCard item={item} key={item.id} />)}
            </div>
        </section>
    )
}

export default Section