import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const body = document.body;

    const updateBackground = (x: number, y: number) => {
      body.style.background = `
        radial-gradient(
          circle at ${x}px ${y}px,
          rgba(255, 255, 255, 0.05),
          #ffffff 600px
        )
      `;
    };

    const onMouseMove = (e: MouseEvent) => {
      updateBackground(e.clientX, e.clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        updateBackground(touch.clientX, touch.clientY);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <div className="font-inter min-h-screen bg-white text-gray-800 transition-all duration-300">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md">
        <div className="flex flex-col items-start">
          <img
            src="https://eskimo.com.br/wp-content/uploads/2023/03/image-1.png"
            alt="Eskimo Sorvetes"
            className="h-12"
          />
        </div>
        <nav className="hidden space-x-6 md:flex"></nav>
        <div className="flex items-center space-x-4">
          <a
            href="https://wa.me/5549998176691?text=Quero%20saber%20mais%20sobre%20a%20promoção%20do%20pote%20de%202L%20🍨"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-red-600 px-4 py-2 text-sm text-white transition hover:bg-red-700"
          >
            Fale conosco
          </a>
        </div>
      </header>
      {/* Promoção em destaque */}
      {/* Imagem de Promoção */}
      <div className="bg-red-0 relative flex justify-center py-10">
        <img
          src="https://i.pinimg.com/736x/d9/34/61/d93461fb5ccab5f7446fa703797653ee.jpg"
          alt="Promoção - Pote de Sorvete"
          className="max-h-60 w-auto object-contain drop-shadow-lg"
        />
      </div>{" "}
      <div className="animate-pulse rounded-b-lg bg-yellow-400 px-6 py-4 text-center text-xl font-extrabold tracking-wider text-red-800 shadow-md">
        LIMPA ESTOQUE
      </div>
      <div className="animate-bounce rounded-b-xl bg-red-600 px-6 py-4 text-center text-white shadow-md">
        <p className="text-lg font-bold">
          🎉 Promoção Especial: Pote de 2L com super desconto! Aproveite agora!
          🍨
        </p>
      </div>
      {/* Onde Encontrar */}
      <section id="onde" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm text-gray-400">
            Efapi, Passo dos Fortes, Palmital
          </p>
          <div className="my-6 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-center text-red-700">
            <p className="text-sm font-medium md:text-base">
              Promoção válida somente para retirada no local — aproveite
              enquanto durar! 🍦
            </p>
          </div>

          <h2 className="mb-10 mt-4 text-3xl font-extrabold text-gray-900">
            Onde encontrar nossas unidades em Chapecó
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Palmital */}
            <div className="rounded-xl border bg-white p-6 shadow-lg">
              <h3 className="text-lg font-bold">Palmital</h3>
              <p className="mt-1 text-sm text-gray-600">
                Av. Gen. Osório, 1064 - Palmital, Chapecó - SC, 89803-003
              </p>
              <a
                href="https://www.google.com/maps/place/Eskim%C3%B3+Atacad%C3%A3o+de+Sorvetes+-+Palmital+Chapec%C3%B3/@-27.1151195,-52.6170339,20z/data=!4m6!3m5!1s0x94e4b56debcdda73:0xac183fb9b6883ec7!8m2!3d-27.1152884!4d-52.6166752!16s%2Fg%2F11nyl98sgm"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Ver no mapa
              </a>
              <p className="mt-4 text-sm font-medium">
                Horário de funcionamento
              </p>
              <p className="text-sm text-gray-600">
                Todos os dias das 13h às 19h.
              </p>
              <p className="text-sm text-gray-600">49-998176691</p>
              <p className="mt-4 text-sm font-medium">Redes sociais</p>
              <div className="mt-2 flex space-x-3">
                <img
                  src="https://img.icons8.com/ios-glyphs/30/instagram-new.png"
                  alt="Instagram"
                  className="h-5 w-5"
                />
                <p className="text-sm text-gray-600">@eskimosorveteschapeco</p>
              </div>
            </div>

            {/* Passo dos Fortes */}
            <div className="rounded-xl border bg-white p-6 shadow-lg">
              <h3 className="text-lg font-bold">Passo dos Fortes</h3>
              <p className="mt-1 text-sm text-gray-600">
                R. John Kennedy, 1480 - Passo Dos Fortes, Chapecó - SC,
                89805-502
              </p>
              <a
                href="https://www.google.com/maps/place/Eskim%C3%B3+Atacad%C3%A3o+de+Sorvetes/@-27.077056,-52.6122383,20z"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Ver no mapa
              </a>
              <p className="mt-4 text-sm font-medium">
                Horário de funcionamento
              </p>
              <p className="text-sm text-gray-600">
                Todos os dias das 13h às 19h.
              </p>
              <p className="text-sm text-gray-600">49-998176691</p>
              <p className="mt-4 text-sm font-medium">Redes sociais</p>
              <div className="mt-2 flex space-x-3">
                <img
                  src="https://img.icons8.com/ios-glyphs/30/instagram-new.png"
                  alt="Instagram"
                  className="h-5 w-5"
                />
                <p className="text-sm text-gray-600">@eskimosorveteschapeco</p>
              </div>
            </div>

            {/* Efapi */}
            <div className="rounded-xl border bg-white p-6 shadow-lg">
              <h3 className="text-lg font-bold">Efapi</h3>
              <p className="mt-1 text-sm text-gray-600">
                R. Cunha Porã, 716E - Efapi, Chapecó - SC, 89809-531
              </p>
              <a
                href="https://www.google.com/maps/place/R.+Cunha+Por%C3%A3,+716E+-+Efapi,+Chapec%C3%B3+-+SC,+89809-531"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Ver no mapa
              </a>
              <p className="mt-4 text-sm font-medium">
                Horário de funcionamento
              </p>
              <p className="text-sm text-gray-600">
                Todos os dias das 13h às 19h.
              </p>
              <p className="text-sm text-gray-600">49-998176691</p>
              <p className="mt-4 text-sm font-medium">Redes sociais</p>
              <div className="mt-2 flex space-x-3">
                <img
                  src="https://img.icons8.com/ios-glyphs/30/instagram-new.png"
                  alt="Instagram"
                  className="h-5 w-5"
                />
                <p className="text-sm text-gray-600">@eskimosorveteschapeco</p>
              </div>
            </div>
          </div>
          <div className="my-6 flex justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/jIqrvl72OVk"
              title="Eskimó Sorvetes - É Verão o Ano Todo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <footer className="mt-16 bg-red-600 px-6 py-10 text-white">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
              {/* Institucional */}
              <div>
                <h4 className="mb-3 text-lg font-semibold">Eskimó Sorvetes</h4>
                <p className="text-sm leading-relaxed">
                  Atuando em Chapecó com qualidade e sabor. Visite uma de nossas
                  unidades para aproveitar nossas promoções exclusivas.
                </p>
              </div>

              {/* Contato */}
              <div>
                <h4 className="mb-3 text-lg font-semibold">Contato</h4>
                <ul className="space-y-2 text-sm">
                  <li>📞 (49) 99817-6691</li>
                  <li>📍 Efapi, Chapecó - SC</li>
                  <li>
                    <a
                      href="mailto:contato@eskimosorvetes.com.br"
                      className="underline"
                    ></a>
                  </li>
                </ul>
              </div>

              {/* Redes sociais */}
              <div>
                <h4 className="mb-3 text-lg font-semibold">Siga nas redes</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/eskimosorveteschapeco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:opacity-80"
                  >
                    <img
                      src="https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png"
                      alt="Instagram"
                      className="h-6 w-6"
                    />
                  </a>
                  <a
                    href="https://wa.me/5549998176691"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:opacity-80"
                  >
                    <img
                      src="https://img.icons8.com/ios-filled/24/ffffff/whatsapp.png"
                      alt="WhatsApp"
                      className="h-6 w-6"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Direitos autorais */}
            <div className="mt-8 border-t border-red-400 pt-4 text-center text-sm text-red-100">
              © {new Date().getFullYear()} Eskimó Sorvetes - Todos os direitos
              reservados.
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
