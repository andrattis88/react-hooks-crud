import {useState, useEffect} from "react";
import TutorialDataService from "../services/TutorialService";
import TutorialView from "./TutorialView";

const Tutorial = props => {

    const initState = {
        id : null,
        title : "",
        description : "",
        published : false
    };

    // Defines useStates
    const [currentTutorial, setCurrentTutorial] = useState(initState);
    const [message, setMessage] = useState("");

    // Defines useEffect
    useEffect(() => {
        getAction(props.match.params.id);
    }, [props.match.params.id]);

    /* Event Handlers */
    const inputChangeHandler = event => {
        const {name, value} = event.target;
        setCurrentTutorial({...currentTutorial, [name] : value});
    }

    /* Actions */
    const getAction= id => {
        TutorialDataService.get(id)
            .then(response => {
                console.log(response.data);
                setCurrentTutorial(response.data);                
            })
            .catch(e => {
                console.log(e);
            });
    }

    const updateAction = () => {
        TutorialDataService.update(currentTutorial.id, currentTutorial)
            .then(response => {
                console.log(response.data.message);
                setMessage(response.data.message);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const updatePublishedStatusAction = status => {
        
        var data = {
            id : currentTutorial.id,
            title : currentTutorial.title,
            description : currentTutorial.description,
            published : status
        };
        
        TutorialDataService.update(currentTutorial.id, data)
            .then(response => {
                console.log(response.data);
                setCurrentTutorial({...currentTutorial, published : status});                
            })
            .catch(e => {
                console.log(e);
            });
    }

    const removeAction = () => {
        TutorialDataService.remove(currentTutorial.id)
            .then(response => {
                console.log(response.data);
                props.history.push("/tutorials");
            })
            .catch(e => {
                console.log(e);
            });
    }

     /* viewObj */

     const states = {
        currentTutorial,
        message        
    };

    const stateManagers = {

    };

    const eventHandlers = {
        inputChangeHandler
    };

    const actions = {
        getAction,
        updateAction,
        updatePublishedStatusAction,
        removeAction
    };

    const viewObj = {
        states,
        stateManagers,
        eventHandlers,
        actions
    };
    
    return(TutorialView(viewObj));
};

export default Tutorial;