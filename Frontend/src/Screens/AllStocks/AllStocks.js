import React from "react";
import styles from "./AllStocks.module.css";
//MaterialUI
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
//MUI Treasury
import InputBase from "@material-ui/core/InputBase";
import Search from "@material-ui/icons/Search";
import { useBorderedInputBaseStyles } from "@mui-treasury/styles/inputBase/bordered";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
		},
	},
}));

export default function AllStocks(props) {
	const classes = useStyles();
	const styles = useBorderedInputBaseStyles();
	return (
		<div>
			<div>
				<h2>All Stocks</h2>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					marginLeft: "-20%",
				}}
			>
				<InputBase
					classes={styles}
					placeholder={"Search"}
					startAdornment={<Search />}
					style={{
						width: "50vw",
					}}
				/>
				<Button
					variant="contained"
					style={{
						backgroundColor: "#0D40C6",
						color: "#fff",
						textTransform: "none",
						height: "6vh",
						marginLeft: "1%",
						width: "7vw",
					}}
				>
					Search
				</Button>
			</div>
			<div></div>
		</div>
	);
}
