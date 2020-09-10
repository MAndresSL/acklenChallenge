import React from "react";
import { fetch } from "isomorphic-unfetch";
import { useRouter } from "next/router";

const router = useRouter();

class CreateTask extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			form: {
				size: 0,
				takenDown: null,
				wallMount: "",
				wallType: "",
				cords: "",
				externalDevices: "",
			},
			price: 80,
			showReceipt: false,
			fName: "",
			lName: "",
			uEmail: "",
			uZip: 0,
			numberTV: 0,
			date: null,
			takenDownBoolean: false,
			cordsBoolean: false,
			externalDevicesBoolean: false,
		};
		this.handleSizeChange = this.handleSizeChange.bind(this);
		this.handleTakenDown = this.handleTakenDown.bind(this);
		this.handleWallMount = this.handleWallMount.bind(this);
		this.handleWallType = this.handleWallType.bind(this);
		this.handleCords = this.handleCords.bind(this);
		this.handleExternalDevices = this.handleExternalDevices.bind(this);
		this.createTask = this.createTask.bind(this);
	}

	async handleSizeChange(e) {
		let size = e.target.value;
		console.log(size);

		await this.setState({ size: size });
	}

	async handleTakenDown(e) {
		let checked = e.target.checked;

		console.log(checked);
		await this.setState({
			takenDown: checked,
			takenDownBoolean: checked,
		});
	}

	async handleWallMount(e) {
		let mount = e.target.value;

		await await this.setState({ wallMount: mount });
		console.log(this.state.wallMount);
	}

	async handleWallType(e) {
		let type = e.target.value;
		console.log(type);

		await this.setState({ wallType: type });
	}

	async handleCords(e) {
		let cords = e.target.checked;

		console.log(cords);
		await this.setState({ cords: cords, cordsBoolean: cords });
	}

	async handleExternalDevices(e) {
		let devices = e.target.checked;

		console.log(devices);
		await this.setState({
			externalDevices: devices,
			externalDevicesBoolean: devices,
		});
	}

	async createTask() {
		console.log(this.state.form);

		try {
			const res = await fetch("http://localhost:3000/api/Tasks", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(this.state.form),
			});
			router.push("/");
		} catch (e) {
			console.log(e);
		}
	}

	render() {
		const ToggleTVSize = () => {
			return (
				<div>
					<label>How large is your tv?</label>

					<label className="btn btn-secondary active">
						<input
							onClick={this.handleSizeChange}
							type="radio"
							name="options"
							id="option1"
							value={'Up to 32"'}
							defaultChecked
						/>
						Up to 32"
					</label>
					<label className="btn btn-secondary">
						<input
							onClick={this.handleSizeChange}
							type="radio"
							name="options"
							id="option2"
							value={'33" - 44"'}
						/>{" "}
						33" - 44"
					</label>
					<label className="btn btn-secondary">
						<input
							onClick={this.handleSizeChange}
							type="radio"
							name="options"
							id="option3"
							value={'45" or larger'}
							active
						/>{" "}
						45" or larger
					</label>
				</div>
			);
		};

		const TakenDown = () => {
			return (
				<div>
					<input
						onChange={this.handleTakenDown}
						defaultChecked={this.state.takenDownBoolean}
						type="checkbox"
						className="form-check-input"
						id="check1"
					/>
					<label className="form-check-label" htmlFor="check1">
						Does your TV need to be taken down?
					</label>
				</div>
			);
		};

		const WallMount = () => {
			return (
				<div>
					<label>Wall mount type</label>
					<label className="btn btn-secondary active">
						<input
							onClick={this.handleWallMount}
							type="radio"
							name="options"
							id="option1"
							value={"I already have one"}
							defaultChecked
						/>
						I already have one
					</label>
					<label className="btn btn-secondary">
						<input
							onClick={this.handleWallMount}
							type="radio"
							name="options"
							id="option2"
							value={"Fixed"}
						/>{" "}
						Fixed
					</label>
					<label className="btn btn-secondary">
						<input
							onClick={this.handleWallMount}
							type="radio"
							name="options"
							id="option3"
							value={"Tilt"}
							active
						/>{" "}
						Tilt
					</label>
					<label className="btn btn-secondary">
						<input
							onClick={this.handleWallMount}
							type="radio"
							name="options"
							id="option4"
							value={"Full Motion"}
							active
						/>{" "}
						Full Motion
					</label>
				</div>
			);
		};

		const WallType = () => {
			return (
				<div>
					<label>What type of wall will your TV be mounted on?</label>
					<label className="btn btn-secondary active">
						<input
							// onClick={this.handleSizeChange}
							onClick={this.handleWallType}
							type="radio"
							name="options"
							id="option1"
							value={"Drywall, plaster or wood"}
							defaultChecked
						/>
						Drywall, plaster or wood
					</label>
					<label className="btn btn-secondary">
						<input
							onClick={this.handleWallType}
							// onClick={this.handleSizeChange}
							type="radio"
							name="options"
							id="option2"
							value={"Brick or concrete"}
						/>{" "}
						Brick or concrete
					</label>
					<label className="btn btn-secondary">
						<input
							onClick={this.handleWallType}
							// onClick={this.handleSizeChange}
							type="radio"
							name="options"
							id="option3"
							value={"I don't know"}
							active
						/>{" "}
						I don't know
					</label>
				</div>
			);
		};

		const Cords = () => {
			return (
				<div>
					<input
						onChange={this.handleCords}
						defaultChecked={this.state.cordsBoolean}
						type="checkbox"
						className="form-check-input"
						id="check1"
					/>
					<label className="form-check-label" htmlFor="check1">
						Bundle and cover cords
					</label>
				</div>
			);
		};

		const ExternalDevices = () => {
			return (
				<div>
					<input
						onChange={this.handleExternalDevices}
						defaultChecked={this.state.externalDevicesBoolean}
						type="checkbox"
						className="form-check-input"
						id="check1"
					/>
					<label className="form-check-label" htmlFor="check1">
						Do you have external devices to connect
					</label>
				</div>
			);
		};

		return (
			<div className="create-task-container container">
				<h1 className="create-task-title">TV Mount</h1>
				<form>
					<div className="form-group">
						<div className="btn-group btn-group-toggle" data-toggle="buttons">
							{<ToggleTVSize />}
						</div>
					</div>
					<div className="form-group form-check">{<TakenDown />}</div>
					<div className="form-group">{<WallMount />}</div>
					<div className="form-group">{<WallType />}</div>
					<div className="form-group form-check">{<Cords />}</div>
					<div className="form-group form-check">{<ExternalDevices />}</div>
					<button
						onClick={this.createTask}
						type="submit"
						className="btn btn-primary"
					>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default CreateTask;
