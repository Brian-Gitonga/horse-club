import '../index.css'
import vetImage from "../assets/images/service-vet.png"
import groomingImage from "../assets/images/service-horse-grooming.png"
import trainingImage from "../assets/images/service-horse-training.png"
import feedingImage from "../assets/images/service-horse-feeding.png"
import sanctuaryImage from "../assets/images/service-horse-santuary.png"
import trackingImage from "../assets/images/service-horse-tracking.png"

interface Service {
    image: string;
    alt: string;
    title: string;
    description: string;
  }
  
  const services: Service[] = [
    {
    image: vetImage,
    alt: "veterinary services",
    title: "Veterinary Service",
    description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      image: groomingImage,
      alt: "horse grooming",
      title: "Horse Grooming",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      image: trainingImage,
      alt: "horse training",
      title: "Horse Training",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      image: feedingImage,
      alt: "horse feeding",
      title: "Horse Feeding",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      image: sanctuaryImage,
      alt: "sanctuary for horses",
      title: "Sanctuary for Horses",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      image: trackingImage,
      alt: "digital tracking",
      title: "Digital Tracking",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
  ];
  
  





function ServiceSection() {
  return (
    <>
       <section className="services-section" id="services">
      <div className="title">
        <p className="title-sub">some of the things we offer</p>
        <h2 className="title-main">our services</h2>
      </div>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-card-img-wrapper">
              <img
                src={service.image}
                alt={service.alt}
                className="service-image"
              />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default ServiceSection
