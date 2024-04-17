
export default function Yout(){

    return <div className="container mx-auto">
    {/* Cabeçalho */}
    <header className="bg-gray-900 p-4 text-white">
      {/* Logo */}
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M2 5a2 2 0 012-2h2.586a1 1 0 01.707.293l1.414 1.414a1 1 0 01.293.707V14.5a2.5 2.5 0 002.5 2.5h3.5a2.5 2.5 0 002.5-2.5V4.707l1.646 1.647a1 1 0 01.146.146l1 1a1 1 0 01.107 1.3l-1.5 2.598a1 1 0 01-.843.544L14 11.243V14.5a4.5 4.5 0 01-4.5 4.5h-3.5a4.5 4.5 0 01-4.5-4.5V5zm4-1a1 1 0 00-1 1v8.5a.5.5 0 00.5.5h5.5a.5.5 0 00.5-.5V8a1 1 0 00-1-1H6z" clipRule="evenodd" />
        </svg>
        <span className="font-bold text-lg">YouTube</span>
      </div>
      {/* Barra de pesquisa */}
      <div className="mt-4">
        <input type="text" placeholder="Pesquisar" className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none" />
      </div>
    </header>
  
    {/* Conteúdo principal */}
    <main className="flex mt-8">
      {/* Barra lateral */}
      <aside className="w-1/4 p-4">
        <ul>
          <li className="mb-4">
            <a href="#" className="text-gray-900 hover:text-gray-700 font-bold">Início</a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-gray-900 hover:text-gray-700">Em alta</a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-gray-900 hover:text-gray-700">Inscrições</a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-gray-900 hover:text-gray-700">Biblioteca</a>
          </li>
        </ul>
      </aside>
  
      {/* Conteúdo do vídeo */}
      <section className="flex-1 p-4">
        {/* Vídeo em destaque */}
        <div className="mb-4">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        {/* Lista de vídeos */}
        <div>
          {/* Exemplo de miniatura de vídeo */}
          <div className="flex items-center mb-4">
            <img src="https://via.placeholder.com/150" alt="Thumbnail" className="w-24 h-16 mr-4" />
            <div>
              <h2 className="font-bold">Título do Vídeo</h2>
              <p>Nome do Canal</p>
              <p>1.5M visualizações • há 1 semana</p>
            </div>
          </div>
          {/* Adicione mais miniaturas de vídeo conforme necessário */}
        </div>
      </section>
    </main>
  </div>
  
  
  
}