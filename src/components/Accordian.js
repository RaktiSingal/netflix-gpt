import AccordianItem from "./AccordianItem"
import { AccordionsData } from "../utils/constants"
import { useState } from "react";

const Accordian = () => {
    const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <div className="m-auto w-[50%] mt-10">
        {AccordionsData?.map((data, index) => {
            return (
                <AccordianItem
                  item={data}
                  key={index}
                  expanded={!!(expandedIndex === index)}
                  setExpanded={() => {
                    if (expandedIndex === index) {
                      setExpandedIndex(null);
                    } else {
                      setExpandedIndex(index)
                    }
                  }}
                />
            )
        })}
    </div>
  )
}

export default Accordian