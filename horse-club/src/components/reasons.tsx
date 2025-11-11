import '../index.css'

interface Reasons {
    title: string;
    description: string;
}

const reasons: Reasons[] = [
{
    title: "expert technicians",
    description: "Usage of the Internet is becoming more common due to rapid advancement of technology and power.",
},
{
    title: "professional advice",
    description: "Usage of the Internet is becoming more common due to rapid advancement of technology and power.",
},
{
    title: "great support",
    description: "Usage of the Internet is becoming more common due to rapid advancement of technology and power.",
},
{
    title: "technical skills",
    description: "Usage of the Internet is becoming more common due to rapid advancement of technology and power.",
},
{
    title: "highly recommended",
    description: "Usage of the Internet is becoming more common due to rapid advancement of technology and power.",
},
{
    title: "Positive Reviews",
    description: "Usage of the Internet is becoming more common due to rapid advancement of technology and power.",
}
]

function Reasons() {
  return (
    <>
       <section className="reasons-section" id="reasons">
      {reasons.map((reason, index) => (
        <div key={index} className="reason">
          <h3 className="reason-title">{reason.title}</h3>
          <p className="reason-description">
            {reason.description}
          </p>
        </div>
      ))}
    </section>
    </>
  )
}

export default Reasons
