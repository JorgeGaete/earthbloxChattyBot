import React from 'react';
import { useNavigate } from 'react-router-dom';
import { } from 'react-router-dom';

const Interaction = () => {
    const history = useNavigate();

    const handleAssitant = () => {
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Details of your Assistant!</h2>
                <form onSubmit={handleAssitant}>
                    <div className="mb-3">
                        <label htmlFor="username">
                            Assitant name:
                        </label>

                        <input type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your Username"
                            className="form-control rounded-0"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="instruction">
                            Instruction for the Assitant:
                        </label>
                        <input type="text"
                            id="instruction"
                            name="instruction"
                            placeholder="Enter your instruction"
                            className="form-control rounded-0"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="model">
                            Model for the Assistant:
                        </label>
                        <select value="model"
                            id="model"
                            name="model"
                            placeholder="Enter your model"
                            className="form-control rounded-0"
                            required
                        >
                            <option value="model 1">Model 1</option>
                            <option value="model 2">Model 2</option>
                            <option value="model 3">Model 3</option>
                        </select>


                    </div>

                    <div className="mb-3">
                        <label htmlFor="description">
                            Description for the Assistant:
                        </label>
                        <input type="text"
                            id="description"
                            name="passwordescription"
                            placeholder="Enter your description"
                            className="form-control rounded-0"
                            required />
                    </div>



                </form>


            </div>
        </div>
    );
};

export default Interaction;