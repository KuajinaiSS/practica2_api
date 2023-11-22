import { useEffect, useState } from 'react';
import agent from '../services/api';
import '../index.css';

export default function ProfilePage() {
    const [profile, setProfile] = useState<any>({});
    const [formData, setFormData] = useState<any>({
        name: '',
        Lastname: '',
        email: '',
        city: '',
        country: '',
        summary: ''
    });
    const [isEditing, setIsEditing] = useState(false); // Estado para controlar si se está editando o no

    useEffect(() => {
        agent.profile.get()
            .then((res) => {
                setProfile(res);
                setFormData(res); // Setear los datos iniciales del formulario con los datos del perfil
            })
            .catch((err) => console.log(err));
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        agent.profile.update(formData)
            .then((res) => {
                setProfile(res);
                setIsEditing(false);
            })
            .catch((err) => console.log(err));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const [editingFramework, setEditingFramework] = useState<any>(null); // Estado para el framework a editar

    const handleEditFramework = (frameworkId: number) => {
        const frameworkToEdit = profile.frameworks.find((framework: any) => framework.id === frameworkId);
        setEditingFramework(frameworkToEdit); // Almacena el framework a editar en el estado
        setIsEditing(true); // Activa el modo de edición
    };

    const handleDeleteFramework = (frameworkId: number) => {

        // Lógica para eliminar el framework con el ID dado
        agent.profile.deleteFramework(profile.id, frameworkId)
            .then((res) => {
                agent.profile.get()
                loadProfileData();
            })
            .catch((err) => console.log(err));
    };

    // acualizar pagina
    const loadProfileData = () => {
        agent.profile.get()
            .then((res) => {
                setProfile(res);
                setFormData(res); // Actualiza los datos del perfil
            })
            .catch((err) => console.log(err));
    };


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
                                    <th className="border py-2 px-4 bg-sky-500 text-white capitalize w-1/3"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {profile.frameworks &&
                                    profile.frameworks.map((framework: any) => (
                                        <tr className="border" key={framework.id}>
                                            <td className="border py-2 px-4 bg-gray-100 text-black capitalize">
                                                <b>{framework.name}</b>
                                            </td>
                                            <td className="border py-2 px-4 bg-gray-100 text-black capitalize">
                                                <b>{framework.level}</b>
                                            </td>
                                            <td className="border py-2 px-4 bg-gray-100 text-black capitalize">
                                                <b>{framework.year}</b>
                                            </td>
                                            <td className="border py-2 px-4 bg-gray-100 text-black">
                                                <button
                                                    onClick={() => handleDeleteFramework(framework.id)}
                                                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded-md"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>

                    </div>
                </section>

                <section className="bg-contenedor rounded-lg p-6 mt-4 mx-auto sm:mx-4 md:mx-8 lg:mx-16 xl:mx-24 shadow-shadow">
                    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                        <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>

                        {/* Inputs del formulario con handleInputChange */}
                        {/* Name */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-1">Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="border rounded-md w-full px-3 py-2" />
                        </div>

                        {/* Lastname */}
                        <div className="mb-4">
                            <label htmlFor="Lastname" className="block mb-1">Lastname</label>
                            <input type="text" id="Lastname" name="Lastname" value={formData.Lastname} onChange={handleInputChange} className="border rounded-md w-full px-3 py-2" />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-1">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="border rounded-md w-full px-3 py-2" />
                        </div>

                        {/* City */}
                        <div className="mb-4">
                            <label htmlFor="city" className="block mb-1">City</label>
                            <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} className="border rounded-md w-full px-3 py-2" />
                        </div>

                        {/* Country */}
                        <div className="mb-4">
                            <label htmlFor="country" className="block mb-1">Country</label>
                            <input type="text" id="country" name="country" value={formData.country} onChange={handleInputChange} className="border rounded-md w-full px-3 py-2" />
                        </div>

                        {/* Summary */}
                        <div className="mb-4">
                            <label htmlFor="summary" className="block mb-1">Summary</label>
                            <textarea id="summary" name="summary" value={formData.summary} onChange={handleInputChange} className="border rounded-md w-full px-3 py-2" />
                        </div>

                        {/* Botón para guardar cambios */}
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                            Save Changes
                        </button>
                    </form>
                </section>

            </main>
        </div>
    )
}
