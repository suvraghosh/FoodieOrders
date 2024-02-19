import landingImage from "../assets/landing.png"
import appDownloadImage from "../assets/appDownload.png"

const HomePage = () => {
  return(
    <div className="flex flex-col gap-12">
        
        {/* Home Section */}
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-[2.5rem] font-bold tracking-tight text-orange-500">
            Don't wait, indulge in a slice sensation today
            </h1>
            <span className="text-xl">Satisfy your cravings with just a tap!</span>
        </div>

        {/* Search & Download Section */}
        <div className="grid md:grid-cols-2 gap-5">
            <img
                alt="landing Image"
                src={landingImage}
            />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-3xl tracking-tighter">
                    Quick bites, quicker delivery!
                </span>
                <span>
                    Download the CheesyWheels for faster ordering and personalised recommendations
                </span>
                <img src={appDownloadImage} alt="Download App"/>
            </div>
        </div>
    </div>
  )
}

export default HomePage;