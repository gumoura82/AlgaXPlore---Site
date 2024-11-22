import Comentario from "../components/Comentarios";

export default function Tecnica(){
    return (
        <section>
            <div className="pr-[33px] pl-[33px] pt-[10%] pb-[10%] bg-custom-gradient">
                <div className="w-[45%]">
                    <h1 className="font-bold text-[56px] mb-[13px]">Desbloqueie Seu Potencial com Nossa Plataforma</h1>
                    <p>Nosso serviço inovador capacita você a alcançar seus objetivos sem esforço. Junte-se a uma comunidade que valoriza crescimento, colaboração e sucesso.</p>
                </div>
            </div>
            <div className="flex items-center justify-center flex-col mr-[10%] ml-[10%] text-center mt-[40px] mb-[40px]">
                <h1 className="font-bold text-[42px] mb-[13px]">Inovação Sustentável: Captura de Energia Renovável a partir das Algas</h1>
                <p>O AlgaXPlore é um projeto inovador dedicado a explorar uma das fontes mais abundantes e inexploradas de energia renovável: a fotossíntese das algas. Através de um processo altamente eficiente, capturamos os elétrons emitidos pelas algas durante a fotossíntese e os convertemos em energia elétrica utilizável. Este processo não apenas contribui para a produção de energia limpa, mas também oferece uma solução sustentável para os desafios energéticos atuais. O AlgaXPlore visa revolucionar a forma como pensamos a geração de energia, aproveitando o potencial natural das algas para criar um futuro mais verde e sustentável. Com uma tecnologia em constante evolução, estamos focados em aprimorar a eficiência energética deste sistema, com ênfase na otimização da área de captura para maximizar sua produção.</p>
            </div>
            <Comentario/>
        </section>   
    )
}