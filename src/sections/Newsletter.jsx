export default function Newsletter() {
  return (
    <div className="container my-5 container-1">
      <div className="row">
        <div className="col-md-6 mx-auto text-center">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Stay updated with the latest news and events.</p>
          <form id="newsletter-form">
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Enter your email" aria-label="Enter your email" required/>
              <button className="btn btn-secondary" type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
