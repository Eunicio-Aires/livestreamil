import moonLo from "../../public/moonLogo.jpeg"
import Image from "next/image";

export default function Registar(){

    return(
        <div className="px-3">
            
<div className="flex items-center justify-center h-screen">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex justify-center mb-6">
            {/* <span className="inline-block bg-gray-200 rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/></svg>
            </span> */}
             < Image 
                    className=" "
                    src={moonLo}
                    alt="Logo Moon"
                    width={250} 
                    // height={500} automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
             />
        </div>
        {/* <h2 className="text-2xl font-semibold text-center mb-4">Create a new account</h2> */}
        <p className="text-gray-600 text-center mb-6">Detalhes do Registo</p>
        <form>
            <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700 text-sm font-semibold mb-2">Nome completo</label>
                <input type="text" id="fullName" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="seu nome"/>
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email </label>
                <input type="email" id="email" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="seuemail@mail.com"/>
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password *</label>
                <input type="password" id="password" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="••••••••"/>
                <p className="text-gray-600 text-xs mt-1">Crie uma Password Segura</p>
            </div>
            <button type="submit" className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">Registar</button>
            {/* <p className="text-gray-600 text-xs text-center mt-4">
                By clicking Register, you agree to accept Apex Financial's
                <a href="#" className="text-blue-500 hover:underline">Terms and Conditions</a>.
            </p> */}
        </form>
    </div>
</div>
        </div>
    )
}