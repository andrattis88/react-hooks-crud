import React from 'react';
import { Link } from "react-router-dom";

const TutorialListView = (viewObj) => (
    <div>
        <div className="list row">
            <div className="col-md-6">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search by title" value={viewObj.states.searchTitle} onChange={viewObj.eventHandlers.searchBarChangeHandler} />
                
                    <div className="input-group-append">
                        <button  className="btn btn-outline-secondary" type="button" onClick={viewObj.actions.findByTitleAction}>Search</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">    
            <div className="col-md-6">
                <h4>Tutorials List</h4>

                <ul className="list-group">
                    {
                        viewObj.states.tutorials && viewObj.states.tutorials.map((tutorial, index) => (
                            <li className={"list-group-item " + (index === viewObj.states.currentIndex ? "active" : "")} onClick={() => viewObj.stateManagers.setActiveTutorialState(tutorial, index)} key={index}>
                                {tutorial.title}
                            </li>
                        ))
                    }
                </ul>

                <button className="m-3 btn btn-sm btn-danger" onClick={viewObj.actions.removeAllAction}>Remove All</button>
            </div>

            <div className="col-md-6">
                { 
                    viewObj.states.currentTutorial ? (
                        <div>
                            <h4>Tutorial</h4>

                            <div>
                                <label><strong>Title:</strong></label>{" "} {viewObj.states.currentTutorial.title}
                            </div>

                            <div>
                                <label><strong>Description:</strong></label>{" "} {viewObj.states.currentTutorial.description}
                            </div>

                            <div>
                                <label><strong>Status:</strong></label>{" "} {viewObj.states.currentTutorial.published ? "Published" : "Pending"}
                            </div>

                            <Link to={"/tutorials/" +  viewObj.states.currentTutorial.id} className="badge badge-warning">Edit</Link>

                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Please cklick on a Tutorial...</p>
                        </div>
                    )
                    
                }
            </div>
        </div>
    </div>  
);  

export default TutorialListView;