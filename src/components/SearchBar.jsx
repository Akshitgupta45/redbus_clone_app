import React, { useContext, useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { BsArrowLeftRight } from "react-icons/bs";

import JourneyContext from "../context/userJourneyContext";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-hot-toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchBar = () => {
	const [departure, setDeparture] = useState("");
	const { from, to, setFrom, setTo } = useContext(JourneyContext);
	const navigate = useNavigate();
	function interchange() {
		const startPoint = from;
		const endPoint = to;
		setTo(startPoint);
		setFrom(endPoint);
	}
	function searchBuses() {
		console.log("inside searcch..");
		if (!to || !from || !departure) {
			// toast.error("Please provide the all the details ");
			// alert("Please provide the all the details");
			toast.error("Please provide all the details");
		} else {
			navigate("/result");
		}
	}
	return (
		<>
			<ToastContainer />
			<Container>
				<div className={"m-5"}>
					<InputGroup className="mb-3 flex align-items-center">
						<Form.Control
							placeholder="From"
							aria-label="from"
							value={from}
							onChange={(e) => setFrom(e.target.value)}
						/>
						<BsArrowLeftRight onClick={interchange} />
						<Form.Control
							placeholder="To"
							aria-label="to"
							value={to}
							onChange={(e) => setTo(e.target.value)}
						/>
						<Form.Control
							placeholder="Recipient's username"
							type="Date"
							value={departure}
							onChange={(e) => {
								setDeparture(e.target.value);
							}}
							aria-label="Recipient's username with two button addons"
						/>
						<Button variant="danger" onClick={searchBuses}>
							Search Buses!
						</Button>
					</InputGroup>
				</div>
			</Container>
		</>
	);
};

export default SearchBar;
