import Image from "next/image";
import moonLo from "../public/moonLogo.jpeg"

export default function Home() {
  
  return (
 <div>
    <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
    <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10">
            <div className="flex justify-center">
            < Image 
      className=" mt-9"
      src={moonLo}
      alt="Logo Moon"
      width={250} 
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
                {/* <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Sign in</h1>
                <p className="text-gray-500 dark:text-gray-400">Sign in to access your account</p> */}
            </div>
            <div className="m-7">
                <form action="">
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email </label>
                        <input type="email" name="email" id="email" placeholder="meuEmail@mail.com" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                    <div className="mb-6">
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-400">Password</label>
                            <a href="#!" className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300">Esqueci minha Pass</a>
                        </div>
                        <input type="password" name="password" id="password" placeholder="Sua Password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                    <div className="mb-6">
                        <button type="button" className="w-full px-3 py-4 text-white bg-red-400 rounded-md focus:bg-indigo-600 focus:outline-none">Entrar</button>
                    </div>
                    <p className="text-sm text-center text-gray-400">Nao tenho uma conta ainda <a href="#!" className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">Criar</a>.</p>
                </form>
            </div>
        </div>
    </div>
</div>



<div className="fixed bottom-5 w-full text-center text-gray-400">
	Designed with ♡ by <a className="text-blue-500" target="_blank" href="/">E.Aires</a>
</div>
</div>
  )
}
