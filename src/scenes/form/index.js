import { Box, useMediaQuery } from "@mui/material";
import Header from "../"

const Form = () => {
	const isNonMobile = useMediaQuery("(min-width: 600px)");

	const handleFormSubmit = (values) => {
		console.log(values);
	};

	return <Box m="20px"><Header</Box>;
};

export default Form;
