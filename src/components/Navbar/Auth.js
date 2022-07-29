import { Menu, Transition } from '@headlessui/react'
import { Icon } from "assets/icons/Icons";

const Auth = () => {

    const user = {
        name: "Yusuf",
        avatar: "https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
    }

    return (
        <div className="w-56 text-right">
            <Menu as="nav" className="relative inline-block text-left">
                {({ open }) => (
                    <>
                        <Menu.Button className='flex items-center justify-between gap-x-2 pr-3 border-2 border-active transition-colors hover:border-white hover:border-opacity-30 p-1 rounded-2xl'>
                            <img src={user.avatar} className="h-8 w-8 rounded-full p-px" />
                            <span className='text-sm font-semibold'>{user.name}</span>
                            <span className={`transition-all ${open ? "-rotate-180" : ""}`}>
                                <Icon name="downDir" size={16} />
                            </span>
                        </Menu.Button>
                        {open && (
                            <Transition
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute z-30 w-48 bg-active right-0 mt-2 origin-top-right divide-y divide-gray-900 rounded-md shadow-lg focus:outline-none">
                                    <div className="p-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`
                                                        ${active
                                                            ? 'bg-[#ffffff1a] bg-opacity-5 text-gray'
                                                            : 'text-white'
                                                        }group flex w-full items-center justify-between rounded-md px-2 py-2 text-sm `
                                                    }
                                                >
                                                    Hesap
                                                    <Icon size={16} name="external" />
                                                </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`
                                                        ${active
                                                            ? 'bg-[#ffffff1a] bg-opacity-5 text-gray'
                                                            : 'text-white'
                                                        }group flex w-full items-center rounded-md px-2 py-2 text-sm `
                                                    }
                                                >
                                                    Profil
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                    <div className="p-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`
                                                        ${active
                                                            ? 'bg-[#ffffff1a] bg-opacity-5 text-gray'
                                                            : 'text-white'
                                                        }group flex w-full items-center rounded-md px-2 py-2 text-sm `
                                                    }
                                                >
                                                    Oturumu Kapat
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        )}
                    </>
                )}
            </Menu>
        </div>

    )
}

export default Auth