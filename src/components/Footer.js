import Player from "./Footer/Player"
import { useDispatch, useSelector } from "react-redux/es/exports";

const Footer = () => {
  const current = useSelector(state => state.player.current)
  return (
    <div className="h-24 bg-footer border-t border-white border-opacity-5">
      {current && (
        <Player />
      )}
      {!current && (
        <div className="bg-gradient-to-r from-[#af2896] to-[#509bf5] w-full h-full flex items-center justify-between px-10">
          <div>
            <p className="font-semibold">Spotify Önizlemesi</p>
            <p className="text-sm font-semibold">Şarkı ve podcast'lere sınırsız erişim ve aralarda çıkan reklamlar için kaydol. Kredi kartına gerek yok.</p>
          </div>
          <button className="bg-white rounded-3xl text-black font-semibold shadow-spotify px-5 py-3 hover:scale-95 transition">
            Ücretsiz Kaydol
          </button>
        </div>

      )}
    </div>
  )
}

export default Footer