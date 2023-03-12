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
            fontSize: "19px",
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
            <div className="accordionItems">
              <p>1: {textArray?.[1]}</p>
            </div>
          ) : (
            <></>
          )}
          {textArray[2] !== undefined ? (
            <div className="accordionItems">
              <p>2: {textArray?.[1]}</p>
            </div>
          ) : (
            <></>
          )}
          {textArray[3] !== undefined ? (
            <div className="accordionItems">
              <p>3: {textArray?.[1]}</p>
            </div>
          ) : (
            <></>
          )}
          {textArray[4] !== undefined ? (
            <div className="accordionItems">
              <p>4: {textArray?.[1]}</p>
            </div>
          ) : (
            <></>
          )}
          {textArray[5] !== undefined ? (
            <div className="accordionItems">
              <p>5: {textArray?.[1]}</p>
            </div>
          ) : (
            <></>
          )}
          {textArray[6] !== undefined ? (
            <div className="accordionItems">
              <p>6: {textArray?.[1]}</p>
            </div>
          ) : (
            <></>
          )}
          {textArray[7] !== undefined ? (
            <div className="accordionItems">
              <p>7: {textArray?.[1]}</p>
            </div>
          ) : (
            <></>
          )}
          {textArray[8] !== undefined ? (
            <div className="accordionItems">
              <p>8: {textArray?.[1]}</p>
            </div>
          ) : (
            <></>
          )}
          {textArray[9] !== undefined ? (
            <div className="accordionItems">
              <p>9: {textArray?.[1]}</p>
            </div>
          ) : (
            <></>
          )}
          {textArray[10] !== undefined ? (
            <div className="accordionItems">
              <p>10: {textArray?.[1]}</p>
            </div>
          ) : (
            <></>
          )}
          {textArray[11] !== undefined ? (
            <div className="accordionItems">
              <p>11: {textArray?.[1]}</p>
            </div>
          ) : (
            <></>
          )}
          {textArray[12] !== undefined ? (
            <div className="accordionItems">
              <p>12: {textArray?.[1]}</p>
            </div>
          ) : (
            <></>
          )}
          {textArray[13] !== undefined ? (
            <div className="accordionItems">
              <p>13: {textArray?.[1]}</p>
            </div>
          ) : (
            <></>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default GenAccordion
