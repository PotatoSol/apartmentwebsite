import {airpurifier, mattress, hampers, bowls, fan, breadmaker, feeder, fountain, gaming, inversiontable, largetrash, largetree, litter, miele, ricecooker, saddle, smalldesk, smalltrash, smalltree, standingdesk, steelcase, ultrawide, boxes, cactus} from './images/'
import './App.css';

/*
This Space intentionally left blank
*/

function App() {
  return (
    <div className="Container">
      <div className="App">
        <header className="App-header">
          <p className="Page-title">
            Moving sale! <br />Prices are very negotiable!
          </p>
          <p className="Contact-info">
            Email: <a href="mailto:sol.mike.j@gmail.com">Sol.Mike.J@gmail.com</a> <br></br>
            Text: (443) 896 - 7051 <br></br>
            Apt: 2009 <br /> < br/>

            Everything must go by sunday night! Discounts on multiple items,< br/> if you're curious come by to take a look or ask by text/email!
          </p>
        </header>
      </div>


      <div className="Items-container">
        <img className="Item-pic" src={mattress} alt="Mattress"/>
        <p className="Item">
          <a href="https://www.tempurpedic.com/shop-mattresses/adapt-collection/v/2602/">
            Tempurpedic Mattress + Bed Frame - $300
          </a>
        </p>
      </div>
      <div className="Items-container">
        <p className="Item">
          <a href="https://www.bestbuy.com/site/steelcase-leap-office-chair-cobalt/6481115.p?skuId=6481115">
            Steelcase Leap Office Chair - $300
          </a>
        </p>
        <img className="Item-pic" src={steelcase} alt="Chair"/>
      </div>
      <div className="Items-container">



        <img className="Item-pic" src={saddle} alt="Saddle Chair" />
        <p className="Item">
          <a href="https://www.amazon.com/gp/product/B07LG11F5S/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1">
            Saddle Chair - $100
          </a>
        </p>

        <p className="Item">
          <a href="https://www.ikea.com/us/en/p/torkis-laundry-basket-white-gray-90319975/">
            Hampers - $10 each
          </a>
        </p>
        <img className="Item-pic" src={hampers} alt="Hampers" />

        <img className="Item-pic" src={airpurifier} alt="Air Purifier"/>
        <p className="Item">
          <a href="https://www.amazon.com/gp/product/B00BTKAPUU/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1">
            Air Purifier - $70
          </a>
        </p>



        <p className="Item">
          <a href="https://www.amazon.com/gp/product/B003QCI4GG/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1">
            Inversion Table - $60
          </a>
        </p>
        <img className="Item-pic" src={inversiontable} alt="Inversion Table"/>

        <img className="Item-pic" src={gaming} alt="Gaming Monitor"/>
        <p className="Item">
          <a href="https://www.amazon.com/gp/product/B095X5T99T/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1">
            Gaming Monitor - $300
          </a>
        </p>

        <p className="Item">
          <a href="https://www.amazon.com/gp/product/B003VWMS5E/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1">
            Large Kitchen Trash can - $45
          </a>
        </p>
        <img className="Item-pic" src={largetrash} alt="Large Trash Can"/>

        <img className="Item-pic" src={smalltrash} alt="Small Trash Can"/>
        <p className="Item">
          <a href="https://www.amazon.com/gp/product/B07PCXZ4CP/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1">
            Small Trash Can - $20
          </a>
        </p>

        <p className="Item">
          <a href="">
            Misc Bowls and plates - $2 each, discount on multiples
          </a>
        </p>
        <img className="Item-pic" src={bowls} alt="Bowls"/>

        <img className="Item-pic" src={litter} alt="Automatic Litter Box"/>
        <p className="Item">
          <a href="https://www.amazon.com/gp/product/B09KC7Q4YF/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1">
            Automatic Cat Litter Box - $200
          </a>
        </p>

        <p className="Item">
          <a href="https://www.amazon.com/gp/product/B098JK84W5/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1">
            Automatic Cat Feeder - $50
          </a>
        </p>
        <img className="Item-pic" src={feeder} alt="Automatic Cat Feeder"/>

        <img className="Item-pic" src={fountain} alt="Automatic Cat Fountain"/>
        <p className="Item">
          <a href="https://www.amazon.com/gp/product/B08Y5LNF87/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1">
            Automatic Cat Water Fountain - $15
          </a>
        </p>

        <p className="Item">
          <a href="https://www.amazon.com/gp/product/B0794T79KM/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1">
            Large Cat Tree - $30
          </a>
        </p>
        <img className="Item-pic" src={largetree} alt="Large Cat Tree"/>

        <img className="Item-pic" src={smalltree} alt="Medium Cat Tree"/>
        <p className="Item">
          <a href="https://www.amazon.com/gp/product/B08F5BBZ2M/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1">
            Medium Cat Tree - $15
          </a>
        </p>

        <p className="Item">
          <a href="https://www.amazon.com/gp/product/B08CY5VR5W/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1">
            2 Cat Boxes - $10 each or $15 for both
          </a>
        </p>
        <img className="Item-pic" src={boxes} alt="Cat Boxes"/>

        <img className="Item-pic" src={cactus} alt="Cat Cactus"/>
        <p className="Item">
          <a href="https://www.amazon.com/gp/product/B07WDDJNCR/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1">
            Cat Cactus - $10
          </a>
        </p>

        <p className="Item">
          <a href="">
            Standing Fan - $5
          </a>
        </p>
        <img className="Item-pic" src={fan} alt="Fan"/>

        <img className="Item-pic" src={breadmaker} alt="Breadmaker"/>
        <p className="Item">
          <a href="">
            Breadmaker - $10
          </a>
        </p>

      </div>
      <hr></hr>
    </div>
  );
}

export default App;
