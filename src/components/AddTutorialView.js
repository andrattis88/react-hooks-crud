import React from 'react';

const AddTutorialView = (viewObj) => (

    <div className="submit-form">
    { viewObj.states.submitted ? (
        <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={viewObj.actions.newAction}>Add</button>
        </div>
    ) : (
        <div>

            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" className="form-control" value={viewObj.states.tutorial.title} onChange={viewObj.eventHandlers.inputChangeHandler} required />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description" className="form-control" value={viewObj.states.tutorial.description} onChange={viewObj.eventHandlers.inputChangeHandler} required />
            </div>

            <button onClick={viewObj.actions.saveAction} className="btn btn-success">Submit</button>
        </div>
    )}
    </div>
);

export default AddTutorialView;