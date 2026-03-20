export default function PortfolioSite() {
  const coursesTI = [
    'Gestão de Infraestrutura de TI – FIAP (20h)',
    'Introdução ao Hacking e Pentest – Solyd (7h)',
    'Introduction to Cybersecurity – Cisco Networking Academy',
    'Get Connected – Cisco Networking Academy',
    'Conceitos Básicos de Redes – Cisco Networking Academy',
    'Computação em Nuvem – SENAI (20h)',
    'Operador de Computador – SENAI (160h)',
  ];

  const coursesProg = [
    'Python Básico – Solyd (8h)',
    'Crie um site simples usando HTML, CSS e JavaScript – Escola do Trabalhador 4.0',
    'Maratona Zero ao Código – Kenzie Academy',
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Juan Pablo Corrêa de Mello</h1>
            <p className="text-cyan-300 text-sm md:text-base mt-1 font-medium">
              Suporte Técnico • Redes • Segurança da Informação • Em transição para TI
            </p>
          </div>
          <a
            href="#contato"
            className="rounded-2xl bg-white text-slate-950 px-4 py-2 text-sm font-semibold shadow-lg hover:opacity-90 transition"
          >
            Contato
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
              Suporte • Redes • Segurança da Informação
            </p>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight">
              Profissional em transição para a área de TI com base em redes, infraestrutura e segurança.
            </h2>
            <p className="mt-5 text-slate-300 text-lg leading-8">
              Estudante de Sistemas de Informação e Segurança da Informação, 
              suporte em informática. Busco oportunidade de entrada em TI,
              especialmente em suporte, infraestrutura e áreas correlatas.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-200">
                Sistemas de Informação – UDESC
              </span>
              <span className="rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-200">
                Segurança da Informação – UNIASSELVI
              </span>
              <span className="rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-200">
                Caçador – SC
              </span>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl">
              <div className="relative rounded-2xl border border-white/10 bg-slate-900 overflow-hidden">
                <div className="h-24 w-full bg-gradient-to-r from-cyan-500/40 via-blue-500/30 to-purple-500/40" />

                <div className="-mt-12 flex justify-center pb-4">
                  <div className="h-40 w-40 rounded-full border-4 border-slate-900 shadow-2xl overflow-hidden">
                    <img
                      src="/foto.jpg"
                      alt="Foto de Juan Pablo"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-slate-900 p-4 border border-white/10">
                  <p className="text-slate-400">Foco</p>
                  <p className="mt-1 font-semibold">Infraestrutura em TI</p>
                </div>
                <div className="rounded-2xl bg-slate-900 p-4 border border-white/10">
                  <p className="text-slate-400">Perfil</p>
                  <p className="mt-1 font-semibold">Júnior em potencial</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
              <h3 className="text-xl font-semibold">Experiência</h3>
              <ul className="mt-4 space-y-4 text-slate-300">
                <li>
                  <strong className="text-white">Contábil Pirolli</strong><br />
                  Auxiliar de Escritório • Jan/2025 – Atual
                </li>
                <li>
                  <strong className="text-white">Prefeitura Municipal de Caçador</strong><br />
                  Auxiliar de Manutenção • Nov/2022 – Dez/2024
                </li>
                <li>
                  <strong className="text-white">Reunidas Transportes</strong><br />
                  Jovem Aprendiz – Auxiliar de Escritório • 2020
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
              <h3 className="text-xl font-semibold">Habilidades</h3>
              <ul className="mt-4 space-y-2 text-slate-300">
                <li>• Suporte básico em informática</li>
                <li>• Redes e conceitos básicos</li>
                <li>• Rotinas administrativas</li>
                <li>• Pacote Office</li>
                <li>• Lançamentos fiscais</li>
                <li>• Comunicação com clientes</li>
                <li>• Organização e responsabilidade</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
              <h3 className="text-xl font-semibold">Objetivo</h3>
              <p className="mt-4 text-slate-300 leading-7">
                Atuar na área de TI, principalmente em funções de suporte, infraestrutura, redes ou segurança,
                aplicando conhecimento técnico, disciplina e capacidade de aprendizado rápido.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
              <h3 className="text-2xl font-semibold">Cursos em TI</h3>
              <div className="mt-5 space-y-3">
                {coursesTI.map((course) => (
                  <div key={course} className="rounded-2xl bg-slate-900/80 border border-white/10 p-4 text-slate-200">
                    {course}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
              <h3 className="text-2xl font-semibold">Programação</h3>
              <div className="mt-5 space-y-3">
                {coursesProg.map((course) => (
                  <div key={course} className="rounded-2xl bg-slate-900/80 border border-white/10 p-4 text-slate-200">
                    {course}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                <p className="text-emerald-300 font-semibold">MEUS PROJETOS</p>
                <p className="mt-2 text-slate-200 leading-7">
                  Por favor aguarde as próximas atualizações...
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 to-slate-800 p-8 shadow-2xl">
            <h3 className="text-2xl font-semibold">Contato</h3>
            <div className="mt-6 grid md:grid-cols-2 gap-4 text-slate-200">
              <div className="rounded-2xl bg-black/20 p-5 border border-white/10">
                <p className="text-slate-400 text-sm">Telefone</p>
                <p className="mt-1 text-lg font-medium">(49) 98918-1151</p>
              </div>
              <div className="rounded-2xl bg-black/20 p-5 border border-white/10">
                <p className="text-slate-400 text-sm">Email</p>
                <p className="mt-1 text-lg font-medium break-all">juanmelloadm@gmail.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}