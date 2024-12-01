import "./main.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import {
  background,
  bread1,
  bread2,
  cake1,
  cake2,
  drink1,
  drink2,
  drink3,
  drink5,
  coffe2,
  coffe3,
  coffe1,
  backgroundCake,
  backgroundCoffe,
  backgroundDrink,
} from "../../assets/Javascript/images";

import { Autoplay, Pagination } from "swiper/modules";

const Main = () => {
  return (
    <>
      <main>
        <div className="container-backgroundcoffe">
          <div
            className="background"
            style={{
              backgroundImage: `url(${background})`, // Define a imagem de fundo
              backgroundSize: "cover", // Faz a imagem preencher o contêiner proporcionalmente
              backgroundPosition: "center", // Centraliza a imagem
              backgroundRepeat: "no-repeat", // Impede que a imagem se repita
              width: "100%", // Largura ajustável
              height: "100vh", // Altura ajustável
              position: "relative",
            }}
          ></div>
          <div className="title-background">
            <h1>Café da manhã com sabor e aconchego.</h1>
            <p>Comece o dia do jeito certo, com opções frescas e deliciosas!</p>
          </div>
        </div>

        <section className="title-cards">
          <h1>O Sabor da Tradição e Inovação</h1>
        </section>

        {/*ESTILIZANDO CARDS*/}

        <div className="all-cards">

          <div className="container-slider2">
            <Swiper
              className="swiper"
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
            >
              <SwiperSlide className="slider">
                <img src={coffe1} alt="café" />
              </SwiperSlide>

              <SwiperSlide className="slider">
                <img src={coffe2} alt="café" />
              </SwiperSlide>

              <SwiperSlide className="slider">
                <img src={coffe3} alt="café" />
              </SwiperSlide>
            </Swiper>

            <div className="i-slider2">
              <h1>O Café Perfeito</h1>
              <p>
                Nada como um café bem preparado para energizar o dia. Sabor
                intenso, aroma marcante e o aconchego de cada xícara. Escolha a
                sua dose de inspiração!
              </p>
            </div>
          </div>

          {/*CARD 1*/}
          <div className="container-slider">
            <Swiper
              className="swiper"
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
            >
              <SwiperSlide className="slider">
                <img src={bread1} alt="pão" />
              </SwiperSlide>
              <SwiperSlide className="slider">
                <img src={bread2} alt="pão" />
              </SwiperSlide>
            </Swiper>

            <div className="i-slider">
              <h1>Os Melhores Pães</h1>
              <p>
                Um pão fresquinho, com crosta dourada e macio por dentro,
                perfeito para acompanhar qualquer refeição ou ser saboreado
                sozinho com manteiga.
              </p>
            </div>
          </div>

          {/*CARD 2*/}
          <div className="container-slider2">
            <Swiper
              className="swiper"
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
            >
              <SwiperSlide className="slider">
                <img src={cake1} alt="cake" />
              </SwiperSlide>
              <SwiperSlide className="slider">
                <img src={cake2} alt="cake" />
              </SwiperSlide>
            </Swiper>

            <div className="i-slider2">
              <h1>Bolo Red Velvet</h1>
              <p>
                Camadas macias, recheio cremoso e a cobertura perfeita. Feito
                com os melhores ingredientes, é o bolo ideal para qualquer
                ocasião.
              </p>
            </div>
          </div>

          {/*CARD 3*/}
          <div className="container-slider">
            <Swiper
              className="swiper"
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
            >
              <SwiperSlide className="slider">
                <img src={drink1} alt="drinks" />
              </SwiperSlide>

              <SwiperSlide className="slider">
                <img src={drink2} alt="drinks" />
              </SwiperSlide>

              <SwiperSlide className="slider">
                <img src={drink3} alt="drinks" />
              </SwiperSlide>

              <SwiperSlide className="slider">
                <img src={drink5} alt="drinks" />
              </SwiperSlide>
            </Swiper>

            <div className="i-slider">
              <h1>Os melhores Drinks</h1>
              <p>
                Pequenos em tamanho, grandes em sabor! Escolha seu drink
                favorito, seja um clássico ou uma mistura inovadora, e aproveite
                o melhor dos sabores intensos em cada gole.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
