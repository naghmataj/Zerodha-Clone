function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5  " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="/">Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-5 ">
          <h3 className="mb-3">
            Search for an answer or browse help topics to create a ticket.
          </h3>
          <input
            placeholder="Eg. How do I activate F&O, why is my order getting rejected"
            className="mb-3"
          />{" "}
          <br />
          <a href="">Track account Opening</a>
          <a href="" className="m-3">
            Track segment activation
          </a>
          <a href="" className="m-3">
            Intraday margins
          </a>
          <br />
          <a href="">Kite user manual</a>
        </div>
        <div className="col-6 p-3 ">
          <h3 className="m-3">Featured</h3>
          <ol style={{ lineHeight: "30px" }}>
            <li>
              <a href="">Current Takeovers and delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
