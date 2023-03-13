import { React, useState } from "react"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material"

//import all misleading UI images :/
//tiktok
import tiktok0 from "./media/muiImages/tiktok_bp1.jpg"
import tiktok3 from "./media/muiImages/tiktok_bp4.jpg"
//instagram
import insta0 from "./media/muiImages/instagram_bp1.jpg"
import insta1 from "./media/muiImages/instagram_bp2.jpg"
import insta2 from "./media/muiImages/instagram_bp3.jpg"
//snapchat
import snap2 from "./media/muiImages/snapchat_bp3.jpg"
//bereal

//main
const GenAccordion = ({ images, textArray }) => {
  const [expanded, setExpanded] = useState(false)
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false)
  }
  //must use optional unwrapping for some reason with ?. bit
  //console.log(images?.[0])

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
          {images?.[0] === "tiktok0" ? (
            <img className="inTextImg" src={tiktok0} alt="test" />
          ) : (
            <></>
          )}
          {images?.[0] === "instagram0" ? (
            <img className="inTextImg" src={insta0} alt="test" />
          ) : (
            <></>
          )}
          {textArray[2] !== undefined ? (
            <div className="accordionItems">{textArray?.[2]}</div>
          ) : (
            <></>
          )}
          {images?.[1] === "instagram1" ? (
            <img className="inTextImg" src={insta1} alt="test" />
          ) : (
            <></>
          )}
          {textArray[3] !== undefined ? (
            <div className="accordionItems">{textArray?.[3]}</div>
          ) : (
            <></>
          )}
          {images?.[1] === "tiktok3" ? (
            <img className="inTextImg" src={tiktok3} alt="test" />
          ) : (
            <></>
          )}
          {images?.[2] === "instagram2" ? (
            <img className="inTextImg" src={insta2} alt="test" />
          ) : (
            <></>
          )}
          {images?.[0] === "snapchat2" ? (
            <img className="inTextImg" src={snap2} alt="test" />
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
