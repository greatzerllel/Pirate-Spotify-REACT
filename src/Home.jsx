import React, { useEffect, useState } from "react";
import Controls from "./components/Controls"
import Titulo from "./components/Titulo.jsx";

//create your first component
const Home = () => {

	return (
		<>
		{/* 	<Titulo classThing={'text-light text-center m-5'} name={'Spotify'} /> */}
			<div className='container'>
				<div className="row d-flex justify-content-center">
					<div className="col-md-6 ">
						<Controls />						
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
