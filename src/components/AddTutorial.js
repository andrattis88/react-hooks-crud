import {useState } from "react";
import TutorialDataService from "../services/TutorialService";
import AddTutorialView from "./AddTutorialView";

const AddTutorial = () => {

    const initState = {
        id : null,
        title : "",
        description : "",
        published : false
    };

    // Defines useStates
    const [tutorial, setTutorial] = useState(initState);
    const [submitted, setSubmitted] = useState(false);

    /* Event Handlers */
    const inputChangeHandler = event => {
        const { name, value } = event.target;
        setTutorial({...tutorial, [name] : value });
    }

    /* Actions */

    const saveAction = () => {
        
        var data = {
            title : tutorial.title,
            description : tutorial.description
        };

        TutorialDataService.create(data)
            .then(response => {
                setTutorial({
                    id : response.data.id,
                    title : response.data.title,
                    description : response.data.description,
                    published : response.data.published
                });
                
                setSubmitted(true);
                console.log(response.data);
            })
            .catch( e => {
                console.log(e);
            });

    }

    const newAction = () => {
        setTutorial(initState);
        setSubmitted(false);
    }

    /* viewObj */

    const states = {
        tutorial,
        submitted 
    };

    const stateManagers = {

    };

    const eventHandlers = {
        inputChangeHandler
    };

    const actions = {
        newAction,
        saveAction
    };

    const viewObj = {
        states,
        stateManagers,
        eventHandlers,
        actions
    };

    return (AddTutorialView(viewObj)); 
    
};

export default AddTutorial;