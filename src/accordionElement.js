import { React, useState } from "react"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import Grid from '@mui/material/Grid';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


function ChangeCheckBox (status){
  const isExpanded = status.isExpanded;
  if (isExpanded){
    return (CheckBoxIcon)
  }
  return (CheckBoxOutlineBlankIcon)
}

const GenAccordion = ({ title, text }) => {
  const [expanded, setExpanded] = useState(false)
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false)
  }

return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Grid item xs={1}>
            <p>{title}</p>
          </Grid>

          <Grid item xs={2} >

          </Grid>  

        </AccordionSummary>

        <AccordionDetails>{text}</AccordionDetails>
        
      </Accordion>
    </div>
  )
}

export default GenAccordion
