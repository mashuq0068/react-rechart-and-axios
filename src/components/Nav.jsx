import { useState } from 'react';
import { MdOutlineMenu } from 'react-icons/md';
import { RxCross1 } from 'react-icons/rx';

const Nav = () => {
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
    ];
    const [menu, setMenu] = useState(false)
    const handleMenu = () => {
        const newMenu = !menu;
        setMenu(newMenu)

    }
    return (
        <>
            <div onClick={handleMenu} className='lg:hidden block text-3xl'>
               {menu ? <RxCross1></RxCross1> : <MdOutlineMenu></MdOutlineMenu>}
            </div>

            <div className={`duration:1000 lg:flex justify-center list-none gap-[10%] ${menu ? "flex absolute z-10 top-8 bg-fuchsia-500 rounded-lg ml-5 p-10 flex-col text-white duration-700" : "absolute -top-52 lg:static duration-700"}`}>
                {routes.map(route => <li key={route.id}><a href={route.path}>{route.name}</a></li>)}
            </div>
        </>
    );
};

export default Nav;