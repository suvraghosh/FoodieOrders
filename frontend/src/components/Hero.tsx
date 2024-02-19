import Pizza from "../assets/Pizza.jpg"

const Hero = () => {
  return(
    <div>
        <img alt="hero-photo" src={Pizza} className="w-full max-h-[600px] object-cover"/>
    </div>
  )
}

export default Hero;