import { NavLink } from "react-router-dom";

export default function Footer() {
    const styleImgs = "w-[30px] h-[30px]";

    return (
        <footer className="flex flex-col items-center pb-6 pt-6 px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center w-full pb-6 gap-6">
                <h1 className="text-[1.5rem] font-bold text-center md:text-left">
                    Algas<strong className="text-main-color">X</strong>Plore
                </h1>
                <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                    <NavLink className="font-bold" to="/">Home</NavLink>
                    <NavLink className="font-bold" to="/contato">Contate-nos</NavLink>
                    <NavLink className="font-bold" to="*">FAQ</NavLink>
                </div>
                <div className="flex justify-center gap-6">
                    <a href="https://www.facebook.com/?locale=pt_BR">
                        <img className={styleImgs} src="images/facebook-Freepik .png" alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/">
                        <img className={styleImgs} src="images/instagram Freepik.png" alt="Instagram" />
                    </a>
                    <a href="https://x.com/home?lang=pt-brsd">
                        <img className={styleImgs} src="images/x-social-media-round-icon.png" alt="X" />
                    </a>
                </div>
            </div>
            <div className="flex flex-wrap flex-col sm:flex-row justify-center items-center pt-6 border-t border-black w-full text-center gap-4 sm:gap-9">
                <p>© 2024 AlgaXPlore. Todos os direitos reservados.</p>
                <p className="underline cursor-pointer">Política de Privacidade</p>
                <p className="underline cursor-pointer">Termos de Serviços</p>
            </div>
        </footer>
    );
}