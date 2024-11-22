import React from 'react';
import { faker } from '@faker-js/faker';

const ComentariosAleatorios = () => {
    
    const Comentario = Array.from({ length: 5 }, () => ({
        nome: faker.name.fullName(), 
        comentario: faker.lorem.sentence(), 
    }));

    return (
        <div className='flex justify-center items-center flex-col'>
            <h2 className='font-bold text-[46px] text-center mb-[32px]'>Comentários dos Nossos Colaboradores</h2>
            <ul className='flex justify-start flex-col'>
                {Comentario.map((item, index) => (
                    <li className='mb-[20px]' key={`${item.nome}-${index}`}> 
                        <h3 className='font-bold text-[20px]'>{item.nome}:</h3> 
                        <p>{item.comentario}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ComentariosAleatorios;