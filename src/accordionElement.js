import { React, useState } from "react"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import Grid from "@mui/material/Grid"
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank"
import CheckBoxIcon from "@mui/icons-material/CheckBox"

//main
function ChangeCheckBox(status) {
  const isExpanded = status.isExpanded
  if (isExpanded) {
    return CheckBoxIcon
  }
  return CheckBoxOutlineBlankIcon
}

/*{this.ChangeCheckBox(expanded)}*/

const GenAccordion = ({ title, textArray }) => {
  const [expanded, setExpanded] = useState(false)
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false)
  }

  const changeIcon = (state) => {
    if (state === "expanded") {
      return <CheckBoxIcon />
    }
    return <CheckBoxOutlineBlankIcon />
  }

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
        className="accordion"
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={
            <ExpandMoreIcon style={{ color: "#ffffff", fontSize: "50px" }} />
          }
          className="accordionTitle"
          sx={{
            backgroundColor: "#2b2b2b",
            color: "#ffffff",
            fontSize: "25px",
            borderBottom: "5px solid #444444",
          }}
        >
          {textArray[0]}
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "#444444",
            color: "#ffffff",
            fontSize: "20px",
          }}
        >
          {textArray[1] !== undefined ? <p>{textArray?.[1]}</p> : <></>}
          {textArray[2] !== undefined ? <p>{textArray?.[2]}</p> : <></>}
          {textArray[3] !== undefined ? <p>{textArray?.[3]}</p> : <></>}
          {textArray[4] !== undefined ? <p>{textArray?.[4]}</p> : <></>}
          {textArray[5] !== undefined ? <p>{textArray?.[5]}</p> : <></>}
          {textArray[6] !== undefined ? <p>{textArray?.[6]}</p> : <></>}
          {textArray[7] !== undefined ? <p>{textArray?.[7]}</p> : <></>}
          {textArray[8] !== undefined ? <p>{textArray?.[8]}</p> : <></>}
          {textArray[9] !== undefined ? <p>{textArray?.[9]}</p> : <></>}
          {textArray[10] !== undefined ? <p>{textArray?.[10]}</p> : <></>}
          {textArray[11] !== undefined ? <p>{textArray?.[11]}</p> : <></>}
          {textArray[12] !== undefined ? <p>{textArray?.[12]}</p> : <></>}
          {textArray[13] !== undefined ? <p>{textArray?.[13]}</p> : <></>}
          {textArray[14] !== undefined ? <p>{textArray?.[14]}</p> : <></>}
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default GenAccordion
