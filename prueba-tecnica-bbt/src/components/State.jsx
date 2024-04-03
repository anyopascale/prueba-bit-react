import "./css/State.scss"

function State() {
    return(
        <div className="col-12">
            <div className="state p-4">
                <div className="row">
                    <div className="col-12 title-tertiary color-primary">
                        <h4>General information</h4>
                    </div>
                    <div className="col-12">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-auto text font-bold">
                                <p>No. of Found Products:</p>
                            </div>
                            <div className="col-auto text state-item">
                                <p>5</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text font-bold color-primary mb-3">
                        <h4>Nutritional properties of found products</h4>
                    </div>
                    <div className="col-12">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-auto text font-bold">
                                <p>Total calories</p>
                            </div>
                            <div className="col-auto text state-item">
                                <p>150</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-auto text font-bold">
                                <p>Total fats</p>
                            </div>
                            <div className="col-auto text state-item">
                                <p>25</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-auto text font-bold">
                                <p>Total sugar</p>
                            </div>
                            <div className="col-auto text state-item">
                                <p>26</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-auto text font-bold">
                                <p>Total carbohydrates</p>
                            </div>
                            <div className="col-auto text state-item">
                                <p>1220</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-auto text font-bold">
                                <p>Total proteins</p>
                            </div>
                            <div className="col-auto text state-item">
                                <p>120</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default State