import React from "react";
import DeleteItem from "./actions/DeleteItem";
import EditItem from "./actions/EditItem";
import Button from 'react-bootstrap/Button';
import { MdDone } from "react-icons/md";
import { MdUndo } from "react-icons/md";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Buttons = (props) => {

    let btnStatus = props.data[0].status;

    const MarkDone = () => {   // Mark Done Function

        props.data[1]((olddata) => {
            // console.log(olddata);
            return(
                olddata.map((arrElement, index) => {
                    if(index === props.id)
                    {
                        arrElement.status = false;
                    }
                    return arrElement;
                })
            )
        })
    };

    const UnMarkDone = () => {   // UnMark Function

        props.data[1]((olddata) => {
            // console.log(olddata);
            return(
                olddata.map((arrElement, index) => {
                    if(index === props.id)
                    {
                        arrElement.status = true;
                    }
                    return arrElement;
                })
            )
        })
    };

    const renderTooltip = (props) => (   // ToolTip as per Mark and Unmark
        <Tooltip id="button-tooltip" {...props}>
          {btnStatus === true ? 'Mark as Done' : 'Unmark Item'}
        </Tooltip>
    );

    const MarkUnMark = () => {   // Conditional Rendering of Buttons Mark and Unmark
        if(btnStatus === true)
        {
            return(
                <>
                    {/* Edit Item Component */}
                    <EditItem id={props.id} data={props.data} />

                    {/* Delete Item Component */}
                    <DeleteItem id={props.id} data={props.data} />

                    {/* Mark Button */}
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                    >    
                        <Button variant="success" className="mx-1" onClick={MarkDone} > <MdDone size={"20px"} /> </Button>
                    </OverlayTrigger> 
                </>
            );
        }
        else{
            return(
                <>
                    {/* UnMark Button */}
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                    >    
                        <Button variant="secondary" className="mx-1" onClick={UnMarkDone} > <MdUndo /> </Button>
                    </OverlayTrigger> 
                </>
            )
        }
    };

    return (
        <>
            {MarkUnMark()}
        </>
    );
};

export default Buttons;