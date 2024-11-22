import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <section>
            <div>
                <img className="w-full h-[20rem] md:h-[33rem] object-cover object-center" src="/images/slose-up-coniferous-tree-branch-bali-indonesia.jpg" alt="Descrição da imagem" />
                <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-[64px] mt-6 md:mt-[50px] mb-10 md:mb-[80px]">
                    <h1 className="font-bold text-[32px] md:text-[56px] max-w-full md:max-w-[616px] mb-6 md:mb-0 md:mr-[64px] text-center md:text-left">Aproveitando as Algas para um Amanhã Sustentável</h1>
                    <div className="text-center md:text-left">
                        <p className="mb-4 md:mb-[32px] text-[16px] md:text-[18px]">Descubra como a tecnologia biofotovoltaica transforma algas em uma poderosa fonte de energia renovável. Junte-se a nós para liderar um futuro mais verde por meio de soluções energéticas inovadoras.</p>
                        <div>
                            <NavLink to="/contato" className="text-white bg-black px-4 py-2 md:p-[11px] transition-all duration-400 hover:bg-white hover:text-black border border-black mr-4 md:mr-[11px]">Entre em Contato</NavLink>
                            <NavLink to='/tecnica' className="text-black bg-white px-4 py-2 md:p-[11px] border border-black transition-all duration-400 hover:bg-black hover:text-white">Veja Mais</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between px-4 md:px-[64px] mb-10 md:mb-[60px]">
                <div className="md:mr-[80px]">
                    <p className="font-bold mb-4 md:mb-[16px] text-center md:text-left">Sustentabilidade</p>
                    <div>
                        <h1 className="text-[32px] md:text-[48px] font-bold mb-4 md:mb-[24px] text-center md:text-left">Aproveitando as Algas para Soluções de Energia Limpa</h1>
                        <p className="text-[16px] md:text-[18px] text-center md:text-left">O processo biofotovoltaico utiliza algas para converter a luz solar em energia. Essa abordagem inovadora oferece uma solução sustentável para atender à crescente demanda por energia.</p>
                    </div>
                    <div className="flex flex-col md:flex-row mb-8 mt-8">
                        <div className="mb-6 md:mb-0 md:mr-[34px]">
                            <img src="/images/Relume.png" alt="" />
                            <h5 className="text-[18px] md:text-[20px] font-bold mt-4">Eco-Friendly</h5>
                            <p className="mt-2">Transformando a luz solar em energia enquanto reduz as emissões de carbono para um planeta mais verde.</p>
                        </div>
                        <div>
                            <img src="/images/Relume.png" alt="" />
                            <h5 className="text-[18px] md:text-[20px] font-bold mt-4">Innovative Technology</h5>
                            <p className="mt-2">Soluções de ponta que aproveitam o poder da natureza para a produção de energia sustentável.</p>
                        </div>
                    </div>
                    <NavLink to='/tecnica' className="text-black bg-white px-4 py-2 md:p-[11px] border border-black transition-all duration-400 hover:bg-black hover:text-white">Veja Mais</NavLink>
                </div>
                <img className="w-full md:w-[69%] h-[20rem] md:h-[33rem] object-cover object-center mt-6 md:mt-0" src="/images/close-up-algae-nature.jpg" alt="" />
            </div>
        </section>
    );
}