
const Footer = () => (
  <footer className='site-footer'>
    <div className='footer-inner'>
      <div className='footer-brand'>
        <h3 className="font-bold">Moh Enterprises</h3>
        <p>
          Delivering smart, sustainable solar power systems for homes, businesses,
          and industrial facilities with clean energy that boosts efficiency and value.
        </p>
      </div>

      <div className='footer-links'>
        <div>
          <h4>Quick Links</h4>
          <ul className="*:cursor-pointer *:hover:text-orange-500 *:transition-all *:duration-300">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/services">Services</a></li>
          </ul>
        </div>

        <div>
          <h4>Services</h4>
          <ul className="*:cursor-pointer *:hover:text-orange-500 *:transition-all *:duration-300">
            <li>Residential Solar</li>
            <li>Commercial Solar</li>
            <li>Industrial Systems</li>
            <li>Maintenance</li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>{import.meta.env.VITE_PHONE}</li>
            <li>{import.meta.env.VITE_EMAIL}</li>
            <li>Indore, India</li>
          </ul>
        </div>
      </div>
    </div>

    <div className='footer-bottom'>
      <span>© 2026 MOH Enterprises</span>
      <span>Powering a greener future</span>
    </div>
  </footer>
)

export default Footer
