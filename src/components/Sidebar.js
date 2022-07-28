import logo from 'assets/images/logo.svg'
import Menu from './Sidebar/Menu';
import { Icon } from "assets/icons/Icons";
import Playlists from "components/Sidebar/Playlists"
import DownloadApp from "components/Sidebar/DownloadApp"
import { useSelector } from 'react-redux/es/hooks/useSelector';
import SidebarCover from './Sidebar/SidebarCover';

const Sidebar = () => {

  const sidebar = useSelector(state => state.player.sidebar)

  return (
    <aside className="w-60 py-6 flex flex-shrink-0 flex-col bg-black">
      <a href='#' className='mb-6 px-6'>
        <img src={logo} alt="logo" className='h-10' />
      </a>
      <Menu />
      <nav className="mt-6">
        <ul>
          <li>
            <a href="#" className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white">
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-white bg-opacity-60 group-hover:bg-opacity-100 rounded-sm text-black">
                <Icon name="plus" size={12} />
              </span>
              Çalma Listesi Oluştur
            </a>
          </li>
          <li>
            <a href="#" className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white">
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-purple-700 text-white rounded-sm to-blue-300 opacity-70 group-hover:opacity-100">
                <Icon name="heartFilled" size={12} />
              </span>
              Beğenilen Şarkılar
            </a>
          </li>
        </ul>
      </nav>
      <Playlists />
			<DownloadApp />
      {sidebar && <SidebarCover />}
    </aside>
  )
}

export default Sidebar;