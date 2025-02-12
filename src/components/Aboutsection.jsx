import Carousel from "./Carousel";
import Headertext from "./Headertext";
import Header from "./Header";
import Detailss from "./Details";

function Aboutsection(){

    const firtcarousel = [
        '/img/WhatsApp Image 2025-02-09 at 16.45.57_9f4e3196.jpg',
        '/img/download (3).jpg'
    ]

  

    return(
        <section className="aboutheader" >
            
            <div className="body">

                <Carousel image = {firtcarousel}/>

                <div className="text">
                        <h1 style={{fontSize:'20px', color:'white',textAlign:'right'}}> what is lulu  Rainbow  picnic? </h1>
                        <p style={{fontSize:'10px', margin:'10px 0px 10px', textAlign:'right'}}> Lulu’s Colorful Feast is a fun and unique picnic where each guest picks a color and brings food that matches it! 🌈 Whether it’s red strawberries, yellow pineapple, or green guacamole, your plate will be as vibrant as the day. No plus-ones—just good vibes, great food, and a colorful feast! 🎉🍽️
                        Pick a color. Bring the food. Enjoy the fun!</p>
                </div>

            </div>


            <div className="detaailsrow">
                <Detailss title="Date" content="20th  Feb" br />
                <Detailss title="Time" content="2pm" />
                <Detailss title="Location" content={<span className="small-text">Click for direction</span>} />
            </div>

           
        </section>
    )

}
export default Aboutsection;