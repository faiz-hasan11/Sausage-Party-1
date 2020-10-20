import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import styles from "./Drawer.module.css";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import logo from "../../Assets/logo.png";
//Screens
import Dashboard from "../../Screens/Dashboard/Dashboard";
import AllStocks from "../../Screens/AllStocks/AllStocks";
//Icons
import HomeIcon from "@material-ui/icons/Home";
const drawerWidth = 252;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		["@media only screen and (max-width:800px)"]: {
			overflowX: "auto",
		},
	},
	appBar: {
		backgroundColor: "white",
		zIndex: theme.zIndex.drawer + 3,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	title: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
	},
	menuButton: {
		marginRight: 36,
	},
	hide: {
		display: "none",
	},
	drawer: {
		width: "260px",
		flexShrink: 0,
		whiteSpace: "nowrap",
		overflow: "hidden",
		border: "none",
		color: "#0D40C6",
	},
	drawerOpen: {
		width: drawerWidth,

		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		margin: 0,
	},
	drawerClose: {
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: "hidden",
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing(9) + 1,
		},
		backgroundColor: "#0D40C6",
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},
	sectionMobile: {
		display: "flex",
		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},
	toolbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		outline: "none",
		["@media only screen and (max-width:800px)"]: {
			marginBottom: "20%",
		},
	},
	tabs: {
		flexGrow: 1,
		alignSelf: "center",
		marginLeft: "15%",
		borderColor: "white",
		bottom: "0",
		paddingBottom: "0%",
	},
	link: {
		textDecoration: "none",
		color: "#43425D",
	},
}));

function ElevationScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

ElevationScroll.propTypes = {
	children: PropTypes.element.isRequired,
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default function MiniDrawer(props) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [samadhanSubMenu, setSamadhanSubmenu] = useState(false);
	const [masterSubMenu, setMasterSubmenu] = useState(false);
	const [propertiesSubMenu, setPropertiesSubmenu] = useState(false);
	const [showTabs, setShowTabs] = useState(false);
	const [value, setValue] = React.useState(0);
	const [state, setState] = React.useState({
		age: "",
		name: "hai",
		clicked: "false",
	});
	const handleClick = () => {
		this.setState({ clicked: true });
	};
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const onTab = () => { };
	const handleChange1 = (event) => {
		const name = event.target.name;
		setState({
			...state,
			[name]: event.target.value,
		});
	};
	const toggleDrawer = () => {
		setOpen(!open);
	};
	//Section for top right side
	const colWidth = { xs: 4 };
	const borderColor = "grey.500";

	const toggleIcon = open ? <CancelOutlinedIcon /> : <MenuIcon />;

	return (
		<div className={classes.root}>
			<CssBaseline />
			<ElevationScroll {...props}>
				<AppBar position="fixed" className={clsx(classes.appBar, {})}>
					<Toolbar
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "baseline",
								float: "left",
							}}
						>
							<img
								src={logo}
								alt="logo"
								style={{
									align: "left",
									marginLeft: "15%",
								}}
							/>
						</div>
						<div
							style={{
								marginRight: "5%",
								display: "flex",
								flexDirection: "row",
								justifyContent: "flex-start",
								alignItems: "center",
							}}
						>
							<Avatar />
							<p
								style={{
									color: "#000",
									marginLeft: "25%",
									whiteSpace: "nowrap",
								}}
							>
								Aryan Yadav
							</p>
						</div>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<Drawer
				variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerClose]: !open,
				})}
				classes={{
					paper: clsx({
						[classes.drawerClose]: !open,
					}),
				}}
			>
				<div className={classes.toolbar}></div>
				<List
					disablePadding={true}
					style={{
						boxShadow: "8px -8px 15px #00000024",
					}}
					className={styles.drawer}
				>
					<ListItem>
						<ListItemIcon>
							<HomeIcon
								style={{ color: "#fff" }}
								fontSize="large"
								alt="Home"
							/>
						</ListItemIcon>
					</ListItem>
				</List>
			</Drawer>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				{props.page}
				{/* <Dashboard /> */}
				<AllStocks />
			</main>
		</div>
	);
}
