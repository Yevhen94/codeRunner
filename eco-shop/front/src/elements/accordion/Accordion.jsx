import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionItem = (props) => {
  return (
    <>
      <Accordion expanded={props.expanded} onChange={props.onChange}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={props["aria-controls"]}
          id={props.id}
          sx={props.style}
        >
          <Typography sx={props.titleStyle}>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={props.contentStyle}>{props.content}</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AccordionItem;
