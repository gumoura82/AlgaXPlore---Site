import { useState, useEffect } from "react";

export default function Contato(){

    const [nome, setNome] = useState(() => localStorage.getItem('nome') || "");
    const [email, setEmail] = useState(() => localStorage.getItem('email') || "");
    const [msg, setMsg] = useState(() => localStorage.getItem('msg') || "");

    useEffect(() => {
        localStorage.setItem('nome', nome);
    }, [nome]);

    useEffect(() => {
        localStorage.setItem('email', email);
    }, [email]);

    useEffect(() => {
        localStorage.setItem('msg', msg);
    }, [msg]);


    const formsEnviar = (e) => {
        e.preventDefault()
        alert(`Seu nome é ${nome}, seu e-mail é ${email} a mensagem é ${msg}`);
        setNome('');
        setEmail('');
        setMsg('');
    }

    return (
        <section className="flex flex-col justify-center items-center mb-[30px]">
            <div className="mb-[35px] items-center text-center">
                <h1 className="text-[3rem] font-bold text-center">Entre em Contato</h1>
                <p>Tire qualquer dúvida preenchendo o formulário</p>
            </div>
            <form onSubmit={formsEnviar} className="flex flex-col justify-center w-[70%]">
                <label className="mb-[8px]" htmlFor="nome">Nome Completo:</label>
                <input className="border border-black mb-[24px] pb-[4px] pt-[4px]" type="text" id="nome" value={nome} onChange={e => setNome(e.target.value)}/>
                <label className="mb-[8px]" htmlFor="email">E-mail:</label>
                <input className="border border-black mb-[24px] pb-[4px] pt-[4px]" type="email" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
                <label className="mb-[8px]" htmlFor="msg">Mensagem:</label>
                <textarea className="border border-black resize-none mb-[32px]" cols='30' rows='10' type="text" id="msg" value={msg} onChange={e => setMsg(e.target.value)}></textarea>
                <button className="text-white bg-black p-[11px] transition-all durantion-5000 hover:bg-white hover:text-black border border-black" type="submit">Enviar</button>
            </form>
        </section>  
    )
}