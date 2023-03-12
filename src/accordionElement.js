import { React, useState } from "react"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import Grid from '@mui/material/Grid';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


/*{this.ChangeCheckBox(expanded)}*/

const GenAccordion = ({ title, text }) => {
  const [expanded, setExpanded] = useState(false)
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false)
  }

const changeIcon = (state) => {
  if (state === "expanded") {
    return <CheckBoxIcon />;
  }
  return <CheckBoxOutlineBlankIcon />;
};

return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")} className = "accordion">
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon style={{ color: "#ffffff", fontSize: "50px" }}/>}
          className = "accordionTitle" 
          sx={{ backgroundColor: "#2b2b2b", color: "#ffffff", fontSize: "19px", borderBottom: "5px solid #444444"}}
        >
          <Grid item xs={1}>
            <p>{title}</p>
          </Grid>

          <Grid item xs={2}>

          </Grid>

        
          

        </AccordionSummary>

        <AccordionDetails sx={{ backgroundColor: "#444444", color: "#ffffff", fontSize: "20px"}}>{text}</AccordionDetails>
        
      </Accordion>
    </div>
  )
}

export default GenAccordion
