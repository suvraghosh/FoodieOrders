import Pizza from "../assets/Pizza.jpg";
import Item from "../assets/recipe.jpg";
import Item1 from "../assets/recipe1.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
  return (
    <div className="w-[72vw] md:w-[90vw] mx-auto">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <img
              alt="hero-photo"
              src={Item}
              className="w-full object-cover max-h-[600px]"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              alt="hero-photo"
              src={Pizza}
              className="w-full object-cover max-h-[600px]"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              alt="hero-photo"
              src={Item1}
              className="w-full object-cover max-h-[600px]"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Hero;
