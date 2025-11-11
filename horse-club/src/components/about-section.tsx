import '../index.css'
import aboutImage from '../assets/images/about-img.jpg'

function AboutSection() {
  return (
    <>
            <section className="about-section" id="about">
        <div className="about-textbox">
        <p className="about-text-subtitle">
            We are here to take care of your horses
        </p>
        <h2 className="about-title">
            we are your horses' best friend now and forever
        </h2>
        <p className="about-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
            et nemo odio laudantium modi nihil vel consectetur magnam excepturi
            quis quasi enim omnis incidunt veniam aut esse, error impedit dolores.
        </p>
        <a href="https://www.youtube.com/@djenox" target="_blank" className="about-cta"
            >get started now</a>
        </div>
        <div className="about-img-wrapper">
        <img
            src={aboutImage}
            alt="horse running"
            className="about-img-image"
        />
        </div>
        </section>
    </>
  )
}

export default AboutSection
