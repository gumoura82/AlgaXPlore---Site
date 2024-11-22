import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="ml-[6%] mr-[6%] mb-[14px] mt-[14px] flex justify-between items-center ">
                <nav className="list-none">
                    <ul className="flex">
                        <li className="mr-[30px]">
                        <NavLink to="/" className={({ isActive }) => isActive ? 'text-main-color font-bold ' : 'text-black  hover:border-b-2 hover:border-black'}>Home</NavLink>
                        </li>
                        <li>
                        <NavLink to="/tecnica" className={({ isActive }) => isActive ? 'text-main-color font-bold ' : 'text-black  hover:border-b-2 hover:border-black'}> Tecnologia Usada </NavLink>
                        </li>
                    </ul>
                </nav>
                <div>
                    <NavLink className="text-[1.5rem] font-bold" to="/">Algas<strong className="text-main-color">X</strong>Plore</NavLink>
                </div>
                <div>
                    <NavLink to="/contato" className={({ isActive }) => isActive ? 'bg-main-color p-[11px] text-white font-bold'  : "text-white bg-black p-[11px] transition-all durantion-5000 hover:bg-white hover:text-black border border-black"}>Contato</NavLink>
                </div>
            </header>
        </>
    );
}
