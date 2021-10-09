import React from 'react';
import 'normalize.css';
import './App.css';
import NavBar from './components/navbar';
import { BrowserRouter } from 'react-router-dom';
import typingImg from './images/typing.jpg';
import headerLogo from './images/header-logo.png';
import nikeproduct from './images/nike-product.jpg';

let style={
  background: `url('${typingImg}')`,
  backgroundPosition: 'top right',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar></NavBar>
      <div className="container-fluid text-center header">
        <h1 className="pt-5"><i><b>LAUNCH OPEN EVENT!</b></i></h1>
        <img src={headerLogo} alt="header logo" className="header-logo mb-5" ></img>
        <div className="d-flex mx-auto" style={{width: "60vw", justifyContent:'space-between'}}>
          <span className="circle-button" >LOREM IPSUM</span>
          <i className="fas fa-long-arrow-alt-right mt-2"></i>
          <span className="custom-button">MARKET LAUNCHING</span>
          <i className="fas fa-long-arrow-alt-right mt-2"></i>
          <span className="circle-button">LOREM IPSUM</span>
        </div>
      </div>
      <div className="main-header pl-5" style={style}>
        <h1>WHAT HAPPENED !</h1>
        <p style={{wordWrap:"break-word",width:"50vw"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis risus vel eleifend 
          eleifend. Nunc in urna eu ligula porttitor suscipit. Quisque finibus in ligula vitae ultricies. 
          
        </p>
      </div>
      <div className="main-bestproduct text-center">
        <h5 className="bg-warning m-0 pt-5 text-orange">BEST PRODUCT</h5>
        <div className="bg-warning m-0 pt-2 pb-4 text-orange">
          <p className="mx-auto" style={{wordbreak:"word-break",width:"30vw"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis risus vel eleifend 
          eleifend. Nunc in urna eu ligula porttitor suscipit.
          </p>
        </div>
        <div className="bestproduct-container pb-5" style={{background: `url('https://i.pinimg.com/236x/d2/56/1d/d2561d63d0908ce53f76c25aabc4e7f3.jpg')`}}>
          <div className="bestproduct-photo-container" >
            <span className="besproduct-number">01</span>
            <img src={nikeproduct} alt="Nike Product" className="bestproduct-photo"></img>
            <button className="bestproduct-button" style={{textOverflow:"ellipsis"}}>How to create mobile-optimized <span className="bestproduct-button-icon">GO</span></button>
          </div>
          <div className="bestproduct-photo-container">
            <span className="besproduct-number">02</span>
            <img src={nikeproduct} alt="Nike Product" className="bestproduct-photo"></img>
            <button className="bestproduct-button">How to create mobile-optimized <span className="bestproduct-button-icon">GO</span></button>
          </div>
          <div className="bestproduct-photo-container">
            <span className="besproduct-number">01</span>
            <img src={nikeproduct} alt="Nike Product" className="bestproduct-photo"></img>
            <button className="bestproduct-button">How to create mobile-optimized <span className="bestproduct-button-icon">GO</span></button>
          </div>       
        </div>
      </div>
      {/* main product */}
      <div className="main-product text-center">
        <div className="product-container">
          <div className="product">
            <img className="product-photo" src="https://cdn.pixabay.com/photo/2019/07/13/13/42/watch-4334815_960_720.jpg"></img>
            <h5>[What happend]</h5>
            <div className="product-footer">
              <span>2,500 won</span>
              <span><i className="fas fa-heart"></i> 300</span>
            </div>
          </div>
          <div className="product">
            <img className="product-photo" src="https://cdn.pixabay.com/photo/2019/07/13/13/42/watch-4334815_960_720.jpg"></img>
            <h5>[What happend]</h5>
            <div className="product-footer">
              <span>2,500 won</span>
              <span><i className="fas fa-heart"></i> 300</span>
            </div>
          </div>
          <div className="product">
            <img className="product-photo" src="https://cdn.pixabay.com/photo/2019/07/13/13/42/watch-4334815_960_720.jpg"></img>
            <h5>[What happend]</h5>
            <div className="product-footer">
              <span>2,500 won</span>
              <span><i className="fas fa-heart"></i> 300</span>
            </div>
          </div>
          <div className="product">
            <img className="product-photo" src="https://cdn.pixabay.com/photo/2019/07/13/13/42/watch-4334815_960_720.jpg"></img>
            <h5>[What happend]</h5>
            <div className="product-footer">
              <span>2,500 won</span>
              <span><i className="fas fa-heart"></i> 300</span>
            </div>
          </div>
          <div className="product">
            <img className="product-photo" src="https://cdn.pixabay.com/photo/2019/07/13/13/42/watch-4334815_960_720.jpg"></img>
            <h5>[What happend]</h5>
            <div className="product-footer">
              <span>2,500 won</span>
              <span><i className="fas fa-heart"></i> 300</span>
            </div>
          </div>
          <div className="product">
            <img className="product-photo" src="https://cdn.pixabay.com/photo/2019/07/13/13/42/watch-4334815_960_720.jpg"></img>
            <h5>[What happend]</h5>
            <div className="product-footer">
              <span>2,500 won</span>
              <span><i className="fas fa-heart"></i> 300</span>
            </div>
          </div>
          <div className="product">
            <img className="product-photo" src="https://cdn.pixabay.com/photo/2019/07/13/13/42/watch-4334815_960_720.jpg"></img>
            <h5>[What happend]</h5>
            <div className="product-footer">
              <span>2,500 won</span>
              <span><i className="fas fa-heart"></i> 300</span>
            </div>
          </div>
          <div className="product">
            <img className="product-photo" src="https://cdn.pixabay.com/photo/2019/07/13/13/42/watch-4334815_960_720.jpg"></img>
            <h5>[What happend]</h5>
            <div className="product-footer">
              <span>2,500 won</span>
              <span><i className="fas fa-heart"></i> 300</span>
            </div>
          </div>
          <div className="product">
            <img className="product-photo" src="https://cdn.pixabay.com/photo/2019/07/13/13/42/watch-4334815_960_720.jpg"></img>
            <h5>[What happend]</h5>
            <div className="product-footer">
              <span>2,500 won</span>
              <span><i className="fas fa-heart"></i> 300</span>
            </div>
          </div>
          <div className="product">
            <img className="product-photo" src="https://cdn.pixabay.com/photo/2019/07/13/13/42/watch-4334815_960_720.jpg"></img>
            <h5>[What happend]</h5>
            <div className="product-footer">
              <span>2,500 won</span>
              <span><i className="fas fa-heart"></i> 300</span>
            </div>
          </div>
          <div className="product">
            <img className="product-photo" src="https://cdn.pixabay.com/photo/2019/07/13/13/42/watch-4334815_960_720.jpg"></img>
            <h5>[What happend]</h5>
            <div className="product-footer">
              <span>2,500 won</span>
              <span><i className="fas fa-heart"></i> 300</span>
            </div>
          </div>
          <div className="product">
            <img className="product-photo" src="https://cdn.pixabay.com/photo/2019/07/13/13/42/watch-4334815_960_720.jpg"></img>
            <h5>[What happend]</h5>
            <div className="product-footer">
              <span>2,500 won</span>
              <span><i className="fas fa-heart"></i> 300</span>
            </div>
          </div>
          <div className="product">
            <img className="product-photo" src="https://cdn.pixabay.com/photo/2019/07/13/13/42/watch-4334815_960_720.jpg"></img>
            <h5>[What happend]</h5>
            <div className="product-footer">
              <span>2,500 won</span>
              <span><i className="fas fa-heart"></i> 300</span>
            </div>
          </div>
          <div className="product">
            <img className="product-photo" src="https://cdn.pixabay.com/photo/2019/07/13/13/42/watch-4334815_960_720.jpg"></img>
            <h5>[What happend]</h5>
            <div className="product-footer">
              <span>2,500 won</span>
              <span><i className="fas fa-heart"></i> 300</span>
            </div>
          </div>
          <div className="product">
            <img className="product-photo" src="https://cdn.pixabay.com/photo/2019/07/13/13/42/watch-4334815_960_720.jpg"></img>
            <h5>[What happend]</h5>
            <div className="product-footer">
              <span>2,500 won</span>
              <span><i className="fas fa-heart"></i> 300</span>
            </div>
          </div>
          <div className="product">
            <img className="product-photo" src="https://cdn.pixabay.com/photo/2019/07/13/13/42/watch-4334815_960_720.jpg"></img>
            <h5>[What happend]</h5>
            <div className="product-footer">
              <span>2,500 won</span>
              <span><i className="fas fa-heart"></i> 300</span>
            </div>
          </div>
          <div className="product">
            <img className="product-photo" src="https://cdn.pixabay.com/photo/2019/07/13/13/42/watch-4334815_960_720.jpg"></img>
            <h5>[What happend]</h5>
            <div className="product-footer">
              <span>2,500 won</span>
              <span><i className="fas fa-heart"></i> 300</span>
            </div>
          </div>
          <div className="product">
            <img className="product-photo" src="https://cdn.pixabay.com/photo/2019/07/13/13/42/watch-4334815_960_720.jpg"></img>
            <h5>[What happend]</h5>
            <div className="product-footer">
              <span>2,500 won</span>
              <span><i className="fas fa-heart"></i> 300</span>
            </div>
          </div>
          <div className="product">
            <img className="product-photo" src="https://cdn.pixabay.com/photo/2019/07/13/13/42/watch-4334815_960_720.jpg"></img>
            <h5>[What happend]</h5>
            <div className="product-footer">
              <span>2,500 won</span>
              <span><i className="fas fa-heart"></i> 300</span>
            </div>
          </div>
          <div className="product">
            <img className="product-photo" src="https://cdn.pixabay.com/photo/2019/07/13/13/42/watch-4334815_960_720.jpg"></img>
            <h5>[What happend]</h5>
            <div className="product-footer">
              <span>2,500 won</span>
              <span><i className="fas fa-heart"></i> 300</span>
            </div>
          </div>
        </div>
        <button className="d-inline-block text-center my-5 product-button">SEE MORE</button>
      </div>
      {/* end main product */}
      {/* main brand */}
      <div className="main-brand">
        <div className="brand-story container-fluid text-center pt-2" style={{background: `url('https://i.pinimg.com/originals/7e/4f/c0/7e4fc07ec436605dd1a0fe220c1c772e.jpg')`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
          <h2 style={{color:"white"}}>BRAND STORY</h2>
          <p style={{color:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis risus vel eleifend 
          eleifend. Nunc in urna eu ligula porttitor suscipit.
          </p>
          <div>
            <div className="brand-story-box" >
              <div style={{background:"orange"}} className="pb-2">
                <div className="bg-dark">
                  <hr></hr>
                  <hr></hr>
                </div>
                <h3 className="pt-3">COLLABORATION</h3>
              </div>
              <div style={{background:"white"}} className="pb-2">
                <div className="bg-dark">
                  <hr></hr>
                  <hr></hr>
                </div>
                <h3 className="pt-3">WHAT HAPPENED'S BRAND STORY</h3>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis risus vel eleifend 
                eleifend. Nunc in urna eu ligula porttitor suscipit. Quisque finibus in ligula vitae ultricies. </p>
                <button style={{border:"1px solid black",color:"black"}}>SEE MORE</button>
              </div>
            </div>
          </div>
        </div>
         {/* start happened's issue */}
         <div className="happened-issue ">
           <div className="text-center">
              <h3>HAPPENED's ISSUE</h3>
              <p className="mx-auto" style={{width:"30vw",wordBreak:"word-break"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis risus vel eleifend 
                eleifend.</p>
              <button style={{border:"1px solid black",color:"black"}}>SEE MORE</button>
          </div>
            <div className="brand-container pt-3 pb-5">
              <div className="brand text-center my-auto text-white py-2" style={{background:"var(--orangeCustom)"}}>
                <h3>WHPN ISSUE</h3>
                <i className="fas fa-arrow-circle-right" style={{fontSize:"10vh"}}></i>
              </div>
              <div className="brand text-white">
                <h3 style={{background:"orange",marginBottom:0}} className="text-center py-2">A BRAND</h3>
                <img className="brand-photo d-block mx-auto" src="https://afamilycdn.com/150157425591193600/2021/10/5/lisa-duoc-truyen-thong-thai-lan-goi-la-niem-tu-hao-82f972d7-16334239385102134804504.jpg"></img>
              </div>
              <div className="brand text-white">
                <h3 style={{background:"orange",marginBottom:0}} className="text-center py-2">B BRAND</h3>
                <img className="brand-photo d-block mx-auto" src="https://afamilycdn.com/150157425591193600/2021/10/5/lisa-duoc-truyen-thong-thai-lan-goi-la-niem-tu-hao-82f972d7-16334239385102134804504.jpg"></img>
              </div>
              <div className="brand text-white">
                <h3 style={{background:"orange",marginBottom:0}} className="text-center py-2">C BRAND</h3>
                <img className="brand-photo d-block mx-auto" src="https://afamilycdn.com/150157425591193600/2021/10/5/lisa-duoc-truyen-thong-thai-lan-goi-la-niem-tu-hao-82f972d7-16334239385102134804504.jpg"></img>
              </div>
              <div className="brand text-white">
                <h3 style={{background:"orange",marginBottom:0}} className="text-center py-2">D BRAND</h3>
                <img className="brand-photo d-block mx-auto" src="https://afamilycdn.com/150157425591193600/2021/10/5/lisa-duoc-truyen-thong-thai-lan-goi-la-niem-tu-hao-82f972d7-16334239385102134804504.jpg"></img>
              </div>
            </div>
         </div>
         
        <div className="container-fluid text-center mt-3" style={{height:"90vh"}}>
          <h3>WHAT HAPPENED</h3>
          <p style={{width:"30vw",wordBreak:"word-break"}} className="mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis risus vel eleifend 
          eleifend.</p>
          <button style={{border:"1px solid black",color:"black"}}>SEE MORE</button>
          <iframe className="d-block mx-auto mt-3" width="560" height="315" src="https://www.youtube.com/embed/Ao3XJ-UDdzI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div></div>
      </div>

      {/* end main brand */}
      {/* footer */}
      <div className="footer container pt-5 pb-5">
        <div className="footer-main">
          <div className="footer-column-one">
            <p>What happened</p>
            <p>뉴스정보</p>
            <p>뉴스정보</p>
            <p>뉴스정보</p>
            <p>뉴스정보</p>
            <p>뉴스정보</p>
          </div>
          <div className="footer-column-two">
            <div>
              <p>About Us</p>
              <p>뉴스정보</p>
              <p>뉴스정보</p>
              <p>뉴스정보</p>
              <p>뉴스정보</p>
              <p>뉴스정보</p>
            </div>
            <div>
              <p>my order</p>
              <p>뉴스정보</p>
              <p>뉴스정보</p>
              <p>뉴스정보</p>
              <p>뉴스정보</p>
              <p>뉴스정보</p>
            </div>
            <div>
              <p>my account</p>
              <p>뉴스정보</p>
              <p>뉴스정보</p>
              <p>뉴스정보</p>
              <p>뉴스정보</p>
              <p>뉴스정보</p>
            </div>
            <div>
              <p>help</p>
              <p>뉴스정보</p>
              <p>뉴스정보</p>
              <p>뉴스정보</p>
              <p>뉴스정보</p>
              <p>뉴스정보</p>
            </div>
          </div>
        </div>
        {/* end footer main */}
        <div className="footer-footer mt-3">
          <div>
            <p>뉴스정보</p>
          </div>
          <div>
            <span><i className="fab fa-facebook"></i></span>
            <span><i className="fab fa-facebook"></i></span>
            <span><i className="fab fa-facebook"></i></span>
          </div>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
