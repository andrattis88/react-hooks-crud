import {useState, useEffect} from "react";
import TutorialDataService from "../services/TutorialService";
import TutorialListView from "./TutorialListView";

const TutorialList = () => {
    
    // Defines useStates
    const [tutorials, setTutorials] = useState([]);
    const [currentTutorial, setCurrentTutorial] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useState("");

    // Defines useEffect
    useEffect(() => {
        getAllAction();
    }, []);


    /* States management */

    // Reset useStates for Tutorials List
    const setListState = () => {
        getAllAction();
        setCurrentTutorial(null);
        setCurrentIndex(-1);
    }

    // Sets Active Tutorial
    const setActiveTutorialState = (tutorial, index) => {
        setCurrentTutorial(tutorial);
        setCurrentIndex(index);
    }

    /* Event Handlers */

    // Handles changes on search bar
    const searchBarChangeHandler = e => {
        const searchTitle = e.target.value;

        // Set useState for searchTitle
        setSearchTitle(searchTitle);
    };

    /* Actions */

    // Fetches Tutorials list
    const getAllAction = () => {
        TutorialDataService.getAll()
            .then( response => {
                    // Set useState for tutorials
                    setTutorials(response.data);
                    console.log(response.data);
            })
            .catch(e => { 
                console.log(e);
            });
    }

    // Removes all tutorials
    const removeAllAction = () => {
        TutorialDataService.removeAll()
            .then(response => {
                    setListState();
                    console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    // Find by title
    const findByTitleAction = () => {
        TutorialDataService.findByTitle(searchTitle)
            .then(response => {
                setTutorials(response.data);
                console.log(response.data);
            })
            .catch(e => { 
                console.log(e);
            });
    }

    /* viewObj */

    const states = {
        tutorials,
        currentTutorial,
        currentIndex,
        searchTitle
    };

    const stateManagers = {
        setListState,
        setActiveTutorialState
    };
    const eventHandlers = {
        searchBarChangeHandler
    };

    const actions = {
        getAllAction,
        removeAllAction,
        findByTitleAction
    };

    const viewObj = {
        states,
        stateManagers,
        eventHandlers,
        actions
    };

    return (TutorialListView(viewObj));
};

export default TutorialList;