import "./css/Filter.scss"

function Filter() {
    return(
        <div className="row justify-content-end">
            <div className="col-auto search-input position-relative">
                <input type="text" placeholder="Search"/>
                <button type="submit">
                    <span className="icon icon-search"></span>
                </button>
            </div>
            <div className="col-auto">
                <button className="filter-order">Order A-Z</button>
            </div>
        </div>
    )
}

export default Filter