function Team() {
  return (
    <div className="container">
      <hr />
      <div className="row p-3 mt-5 ">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-3  mx-5 text-muted fs-6"
        style={{ lineHeight: "1.8", fontSize: "1.2rem" }}
      >
        <div className="col-6 p-3 text-center">
          <img src="media/images/nithinKamath.jpg" alt="" style={{borderRadius:"100%", width:"50%"}}/>
          <h4 className="mt-3">Nithin Kamath</h4>
          <p>Founder, CEO</p>
        </div>

        <div className="col-6 p-4">
          <p>
            
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen. </p>
          <p>Connect on <a href="/" style={{textDecoration:"none"}}>Homepage</a> / <a href="/" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="/" style={{textDecoration:"none"}}>Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
