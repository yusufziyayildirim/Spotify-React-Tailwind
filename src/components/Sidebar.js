import logo from 'assets/images/logo.svg'
import Menu from './Sidebar/Menu';
const Sidebar = () => {
  return (
    <aside className="w-60 py-6 flex flex-col">
      <a href='#' className='mb-6 px-6'>
        <img src={logo} alt="logo" className='h-10' />
      </a>
      <Menu />
    </aside>
  )
}

export default Sidebar;