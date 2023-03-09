import React from "react";
import { AiFillGithub, AiFillPhone } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className="navbar w-full p-4 flex mx-auto">
			<div className="nav flex w-full justify-between md:max-w-[1020px] md:mx-auto">
				<div className="brand-name text-3xl md:text-5xl text-sky-800 font-semibold">
					<Link to="/">CaseCraft</Link>
				</div>
				<div className="contacts flex space-x-4">
					<div className="gh flex justify-center items-center space-x-2">
						<div className="logo text-sky-800">
							<AiFillGithub />
						</div>
						<div className="name hidden md:block text-sm text-sky-800">
							Github
						</div>
					</div>
					<div className="contact flex justify-center items-center space-x-2">
						<div className="logo text-sky-800">
							<AiFillPhone />
						</div>
						<div className="name hidden md:block text-sm text-sky-800">
							Contact
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
