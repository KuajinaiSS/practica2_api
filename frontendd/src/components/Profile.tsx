import { useEffect, useState } from 'react';
import agent from '../services/api';
import '../index.css';

export default function ProfilePage() {
    const [profile, setProfile] = useState<any>({});

    useEffect(() => {
        agent.profile.get()
            .then((res) => {
                console.log(res);
                setProfile(res);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="text-center">
            <header className="bg-header text-white py-5">
                <h1 className="text-4xl font-bold capitalize">
                    {profile.name} {profile.Lastname}
                </h1>
            </header>

            <main className="py-5 px-4 sm:px-10 md:px-16 lg:px-24 xl:px-32 bg-fondo">

                <section className="rounded-lg p-6 bg-contenedor mx-auto sm:mx-4 md:mx-8 lg:mx-16 xl:mx-24 shadow-shadow">
                    <h2 className="text-3xl font-bold capitalize py-5">sobre mi</h2>

                    <div className="flex flex-wrap">
                        <section className="w-full sm:w-1/2 lg:w-1/3 px-4">
                            <h3 className="text-secundario text-2xl font-bold capitalize py-5">Descripción</h3>
                            <p>{profile.summary}</p>
                        </section>

                        <section className="w-full sm:w-1/2 lg:w-1/3 px-4">
                            <h3 className="text-secundario text-2xl font-bold capitalize py-5">datos personales</h3>
                            <p>Tengo 22 años y soy {profile.city} y estudiante de la carrera Ingeniería Civil en Computación e Informática en la universidad Católica del Norte nací en la ciudad de {profile.country}, pero me hospedó en la ciudad de Antofagasta por motivos de estudio, Mi correo es {profile.email}</p>
                        </section>

                        <section className="w-full sm:w-1/2 lg:w-1/3 px-4">
                            <h3 className="text-secundario text-2xl font-bold capitalize py-5">hobbies</h3>
                            <p>Mi hobby principal es leer mangas y ver anime, también me gusta jugar videojuegos, escuchar música y ver películas, igualmente me gusta salir a caminar y jugar al basquetbol.</p>
                        </section>
                    </div>
                </section>

                <section className="bg-contenedor rounded-lg p-6 mt-4 mx-auto sm:mx-4 md:mx-8 lg:mx-16 xl:mx-24 shadow-shadow">
                    <h2 className="text-2xl font-bold capitalize py-6">mis conocimientos</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-black">
                            <thead>
                                <tr className="border">
                                    <th className="border py-2 px-4 bg-sky-500 text-white capitalize w-1/3"> <b>Tecnologia</b></th>
                                    <th className="border py-2 px-4 bg-sky-500 text-white capitalize w-1/3"> <b>Conocimiento</b></th>
                                    <th className="border py-2 px-4 bg-sky-500 text-white capitalize w-1/3"> <b>Año</b></th>
                                </tr>
                            </thead>
                            <tbody>
                                {profile.frameworks && profile.frameworks.map((framework: any) => (
                                    <tr className="border" key={framework.id}>
                                        <td className="border py-2 px-4 bg-gray-100 text-black capitalize"> <b>{framework.name}</b> </td>
                                        <td className="border py-2 px-4 bg-gray-100 text-black capitalize"> <b>{framework.level}</b> </td>
                                        <td className="border py-2 px-4 bg-gray-100 text-black capitalize"> <b>{framework.year}</b> </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    )
}
