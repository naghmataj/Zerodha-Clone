
function Pricing() {
    return (
    <div className='container mb-5'>
        <div className='row'>
            <div className='col-4'>
                <h1 className='mb-2 fs-2'>Unbeatable Pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href="/" style={{textDecoration:"none"}}>
                    See Pricing
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
            <div className='col-1'></div>
            <div className='col-6 mb-5' style={{display:"flex"}}>
                <div className='row text-left'>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <img src='media/images/pricing-eq.svg' alt='' className='mb-2' style={{height:"100px"}} />
                        <p className='mb-0 text-start'style= {{fontSize:"10px"}}>Free account
opening</p>
                    </div>
                    <div className='col d-flex align-items-center'>
                        <img src='media/images/pricing-eq (1).svg' alt='' className='mb-2'style={{height:"100px"}}/>
                        <p className='mb-0 text-start' style={{fontSize:"10px"}}>Free equity delivery
and direct mutual funds</p>
                    </div>
                    <div className='col d-flex align-items-center'>
                        <img src='media/images/other-trades.svg' alt='' className='mb-2' style={{height:"100px"}}/>
                        <p className='mb-0 text-start ' style={{fontSize:"10px"}}>Intraday and
F&O</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Pricing;