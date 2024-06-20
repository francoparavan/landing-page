import React from "react";

import Navbar from "./navbar";
import CardsApp  from "./cards";
import Footer  from "./footer";
import JumboApp  from "./jumbo";
import bg from "../../img/bgBody.png"


const Home = () => {
	return (
		 <section style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
            <Navbar />
            <JumboApp />
            <CardsApp />
            <Footer />
		 </section>
    )
}
export default Home
