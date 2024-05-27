import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function CreateAssistant() {
    const [name, setName] = useState();
    const [instruction, setinstruction] = useState();
    const [model, setModel] = useState();
    const [description, setDescription] = useState();

    const modelOptions = {
        value: "model 1", label: "Model 1",
        value: "model 2", label: "Model 2",
        value: "model 3", label: "Model 3"
    }
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/interaction')
        //axios.post('', { name, instruction, model, description })
        //.then(result => {
        //    console.log(result)
        //    navigate('/interaction')
        //})
        //.catch(err => console.log(err))

    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Create your Assistant</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username">
                            Assitant name:
                        </label>

                        <input type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your Username"
                            className="form-control rounded-0"
                            required
                            onChange={(e) => setName(e.target.value)} />
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
                            onChange={(e) => setinstruction(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="model">
                            Model for the Assistant:
                        </label>
                        <select value={model}
                            id="model"
                            name="model"
                            placeholder="Enter your model"
                            className="form-control rounded-0"
                            required
                            onChange={(e) => setModel(e.target.value)}>
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
                            required
                            onChange={(e) => setDescription(e.target.value)} />
                    </div>


                    <div className="wrap">
                        <button type="submit" className="btn btn-success w-100 rounded-0">
                            Create Assistant
                        </button>
                    </div>
                </form>
                <div>
                    <p>Already have an Assistant? Choose it and go directly to chat!</p>
                    <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                        Login
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default CreateAssistant;

