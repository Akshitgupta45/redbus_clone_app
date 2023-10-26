import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const Result = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [buses, setBuses] = useState([]);
	useEffect(() => {
		const fetchBuses = async () => {
			setIsLoading(true);
			const response = await fetch(
				"https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses"
			);
			const data = await response.json();
			setIsLoading(false);
			console.log("data", data);
			setBuses(data);
		};
		fetchBuses();
	}, []);
	if (isLoading) {
		return <Spinner animation="border" variant="danger" />;
	}
	return (
		<>
			<div
				style={{
					justifyContent: "center",
					alignItems: "center",
					display: "flex",
					backgroundColor: "#F5F7F8",
					padding: "10px",
				}}
			>
				<table>
					<thead>
						<tr>
							<th>Bus No.</th>
							<th>Bus Name</th>
							<th>Ticket Price</th>
							<th>Arrival Time</th>
							<th>Departure Time</th>
							<th>source/From</th>
							<th>Destination/To</th>
							<th>Date</th>
							<th>Book Bus</th>
						</tr>
					</thead>
					<tbody>
						{/* <td>123</td>
							<td>Abc</td>
							<td>Rs. 414₹</td>
							<td>6:20PM</td>
							<td>6:55PM</td>
							<td>Assam</td>
							<td>Delhi</td>
							<td>31-dec</td> */}
						{/* {
                                        "id": "1",
                                        "busName": "zing Bus",
                                        "ticketPrice": "480",
                                        "arrivalTime": "12:09AM",
                                        "departureTime": "6:00PM",
                                        "source": "jaipur",
                                        "destination": "delhi",
                                        "date": "2023-01-21"
                                    }, */}

						{buses &&
							buses.map((bus) => {
								return (
									<>
										<tr>
											<td>{bus.id}</td>
											<td>{bus.busName}</td>
											<td>{bus.ticketPrice}</td>
											<td>{bus.arrivalTime}</td>
											<td>{bus.departureTime}</td>
											<td>{bus.source}</td>
											<td>{bus.destination}</td>
											<td>{bus.date}</td>
											<td>
												<button className="bg-green-500 px-3 py-1 m-2 rounded-md hover:bg-green-600">
													Book
												</button>
											</td>
										</tr>
									</>
								);
							})}
					</tbody>
				</table>
			</div>
			<div className="flex justify-center items-center w-full mt-10">
				NB::: No Refund Applicable.{" "}
				<span className="text-blue-600 cursor-pointer mx-2"></span>
			</div>
		</>
	);
};

export default Result;
