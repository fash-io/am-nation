import { SectionWrapper } from "../components";

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-cover bg-center bg-no-repeat hero-bg hero flex items-center justify-center text-center p-8">
        <div className="hero-content">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl">
            Discover more about our mission, team, and journey.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <SectionWrapper id="mission" title="Our Mission" type="2">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <p className="text-lg mb-4">
              At AMNation, we’re passionate about creating unforgettable
              experiences. Our mission is to bring you the best in live
              entertainment, from stunning performances to immersive experiences
              that resonate long after the final encore.
            </p>
            <ul className="list-disc pl-5 space-y-3">
              <li className="flex items-center">
                <i className="bi bi-check2-circle text-green-500 mr-2 text-xl"></i>
                <span className="text-lg">
                  Exceptional live performances featuring top artists and bands.
                </span>
              </li>
              <li className="flex items-center">
                <i className="bi bi-check2-circle text-green-500 mr-2 text-xl"></i>
                <span className="text-lg">
                  A commitment to delivering a seamless and engaging event
                  experience.
                </span>
              </li>
              <li className="flex items-center">
                <i className="bi bi-check2-circle text-green-500 mr-2 text-xl"></i>
                <span className="text-lg">
                  Innovative event planning tailored to your entertainment
                  needs.
                </span>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img
              src="img/burna1.jpg"
              alt="Our Mission"
              className="w-full h-auto rounded-lg about-card"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Team Section */}
      <SectionWrapper id="team" title="Meet Our Team" type="2">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-6">
            Our Dedicated Professionals
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Team Member 1 */}
            <div className="w-full md:w-1/3">
              <div className="bg- rounded-lg about-card overflow-hidden text-center">
                <img
                  src="img/asake1.jpg"
                  className="w-32 h-32 object-cover rounded-full mx-auto mt-4"
                  alt="Team Member 1"
                />
                <div className="p-4">
                  <h5 className="text-xl font-semibold">John Doe</h5>
                  <p className="text-gray-600">Founder & CEO</p>
                </div>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="w-full md:w-1/3">
              <div className="bg- rounded-lg about-card overflow-hidden text-center">
                <img
                  src="img/rema.png"
                  className="w-32 h-32 object-cover rounded-full mx-auto mt-4"
                  alt="Team Member 2"
                />
                <div className="p-4">
                  <h5 className="text-xl font-semibold">Jane Smith</h5>
                  <p className="text-gray-600">Event Manager</p>
                </div>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="w-full md:w-1/3">
              <div className="bg- rounded-lg about-card overflow-hidden text-center">
                <img
                  src="img/wiz.jpg"
                  className="w-32 h-32 object-cover rounded-full mx-auto mt-4"
                  alt="Team Member 3"
                />
                <div className="p-4">
                  <h5 className="text-xl font-semibold">Alex Johnson</h5>
                  <p className="text-gray-600">Marketing Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* History Section */}
      <SectionWrapper id="history" title="Our History" type="2">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <p className="text-lg mb-4">
              Founded in 20XX, AMNation has grown from a small local event
              organizer into a leading name in the entertainment industry. Our
              journey has been marked by numerous successful events, satisfied
              clients, and a passion for delivering top-notch experiences.
            </p>
            <p className="text-lg">
              From our humble beginnings to becoming a major player in the
              industry, our story is one of dedication, innovation, and a
              commitment to excellence.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="img/travis.png"
              alt="Our History"
              className="w-full h-auto rounded-lg about-card"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper id="contact" title="Get In Touch" type="2">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <p className="text-lg mb-4">
              We’d love to hear from you! Whether you have questions about our
              events, want to partner with us, or just want to say hello, feel
              free to reach out.
            </p>
            <p className="text-lg">
              <strong>Email:</strong> contact@amnation.com <br />
              <strong>Phone:</strong> +123 456 7890 <br />
              <strong>Address:</strong> 123 Entertainment Ave, City, Country
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="img/lil-wayne.png"
              alt="Get In Touch"
              className="w-full h-auto rounded-lg about-card"
            />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default AboutUs;
