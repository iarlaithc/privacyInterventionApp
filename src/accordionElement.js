import { React, useState } from "react"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material"

//main

const GenAccordion = ({ images, textArray }) => {
  const [expanded, setExpanded] = useState(false)
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false)
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
            fontSize: "2.5vh",
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
          {textArray[1] !== undefined ? (
            <div className="accordionItems">{textArray?.[1]}</div>
          ) : (
            <></>
          )}
          {textArray[2] !== undefined ? (
            <div className="accordionItems">{textArray?.[2]}</div>
          ) : (
            <></>
          )}
          {textArray[3] !== undefined ? (
            <div className="accordionItems">{textArray?.[3]}</div>
          ) : (
            <></>
          )}
          {textArray[4] !== undefined ? (
            <div className="accordionItems">{textArray?.[4]}</div>
          ) : (
            <></>
          )}
          {textArray[5] !== undefined ? (
            <div className="accordionItems">{textArray?.[5]}</div>
          ) : (
            <></>
          )}
          {textArray[6] !== undefined ? (
            <div className="accordionItems">{textArray?.[6]}</div>
          ) : (
            <></>
          )}
          {textArray[7] !== undefined ? (
            <div className="accordionItems">{textArray?.[7]}</div>
          ) : (
            <></>
          )}
          {textArray[8] !== undefined ? (
            <div className="accordionItems">{textArray?.[8]}</div>
          ) : (
            <></>
          )}
          {textArray[9] !== undefined ? (
            <div className="accordionItems">{textArray?.[9]}</div>
          ) : (
            <></>
          )}
          {textArray[10] !== undefined ? (
            <div className="accordionItems">{textArray?.[10]}</div>
          ) : (
            <></>
          )}
          {textArray[11] !== undefined ? (
            <div className="accordionItems">{textArray?.[11]}</div>
          ) : (
            <></>
          )}
          {textArray[12] !== undefined ? (
            <div className="accordionItems">{textArray?.[12]}</div>
          ) : (
            <></>
          )}
          {textArray[13] !== undefined ? (
            <div className="accordionItems">{textArray?.[13]}</div>
          ) : (
            <></>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default GenAccordion
