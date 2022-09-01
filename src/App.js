import "./App.css";
import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";

import ItemBar from "./components/ItemBar";
import ItemBarNext from "./components/ItemBarNext";
import ItemHeader from "./components/ItemHeader";
import TopBar from "./components/TopBar";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <div>
      <header>
        <TopBar />
      </header>
      <main>
        <UserInfo />
      </main>
      <ItemHeader />
      <Swiper
        modules={[Navigation, Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <ItemBar />
          <ItemBarNext />
        </SwiperSlide>
        <SwiperSlide>
          <ItemBar />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
