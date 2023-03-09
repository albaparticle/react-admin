import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Typography,
	useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { ExpandMore } from "@mui/icons-material";

const FAQ = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box m="20px">
			<Header
				title="FAQ"
				subtitle="Frequently Asked Questions"
			/>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography
						color={colors.greenAccent[500]}
						variant="h5"
					>
						An Important Question 1
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						potenti malesuada lacus ex, sit amet, consectetur adipiscing elit.
						Suspendisse potenti malesuada lacus ex, sit amet, consectet mutated
						adipiscing elit. Suspendisse potenti malesuada lacus ex, sit amet,
						consectetur adipiscing elit
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography
						color={colors.greenAccent[500]}
						variant="h5"
					>
						An Important Question 2
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						potenti malesuada lacus ex, sit amet, consectetur adipiscing elit.
						Suspendisse potenti malesuada lacus ex, sit amet, consectet mutated
						adipiscing elit. Suspendisse potenti malesuada lacus ex, sit amet,
						consectetur adipiscing elit
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography
						color={colors.greenAccent[500]}
						variant="h5"
					>
						An Important Question 3
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						potenti malesuada lacus ex, sit amet, consectetur adipiscing elit.
						Suspendisse potenti malesuada lacus ex, sit amet, consectet mutated
						adipiscing elit. Suspendisse potenti malesuada lacus ex, sit amet,
						consectetur adipiscing elit
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography
						color={colors.greenAccent[500]}
						variant="h5"
					>
						An Important Question 4
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						potenti malesuada lacus ex, sit amet, consectetur adipiscing elit.
						Suspendisse potenti malesuada lacus ex, sit amet, consectet mutated
						adipiscing elit. Suspendisse potenti malesuada lacus ex, sit amet,
						consectetur adipiscing elit
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography
						color={colors.greenAccent[500]}
						variant="h5"
					>
						An Important Question 5
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						potenti malesuada lacus ex, sit amet, consectetur adipiscing elit.
						Suspendisse potenti malesuada lacus ex, sit amet, consectet mutated
						adipiscing elit. Suspendisse potenti malesuada lacus ex, sit amet,
						consectetur adipiscing elit
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography
						color={colors.greenAccent[500]}
						variant="h5"
					>
						An Important Question 6
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						potenti malesuada lacus ex, sit amet, consectetur adipiscing elit.
						Suspendisse potenti malesuada lacus ex, sit amet, consectet mutated
						adipiscing elit. Suspendisse potenti malesuada lacus ex, sit amet,
						consectetur adipiscing elit
					</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
	);
};

export default FAQ;
