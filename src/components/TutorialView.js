import React from 'react';

const TutorialView = (viewObj) => (
    <div>
        {viewObj.states.currentTutorial ? (
            <div className="edit-form">
                <h4>Tutorial</h4>
                <form>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" className="form-control" value={viewObj.states.currentTutorial.title} onChange={viewObj.eventHandlers.inputChangeHandler} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" id="description" className="form-control" value={viewObj.states.currentTutorial.description} onChange={viewObj.eventHandlers.inputChangeHandler} />
                    </div>
                    <div className="form-group">
                        <label><strong>Status:</strong></label>{" "}
                        {viewObj.states.currentTutorial.published ? "Published" : "Pending"}
                    </div>
                </form>
                {viewObj.states.currentTutorial.published ? (
                    <button className="badge badge-primary mr-2" onClick={() => viewObj.actions.updatePublishedStatusAction(false)}>Unpublish</button>
                ) : (
                    <button className="badge badge-primary mr-2" onClick={() => viewObj.actions.updatePublishedStatusAction(true)}>Publish</button>
                )}
                <button className="badge badge-danger mr-2" onClick={viewObj.actions.removeAction}>Delete</button>
                <button className="badge badge-success" onClick={viewObj.actions.updateAction}>Update</button>
                <p></p>
                <p>{viewObj.states.message}</p>

            </div>
        ) : (
                <div>
                    <br />
                    <p>Please click on a Tutorial...</p>
                </div>
            )}
    </div>
);

export default TutorialView;