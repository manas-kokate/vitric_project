import React from 'react'
import Skillstable from './skillstable';


const mainsection = (props) => {

    // let editform = () => {
    //     <Editfrm />
    //     console.log('xyz')
    // }

    return (
        <>
            {/* CARD AND DASHBOARD   */}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card custom_bgcolor text-white">
                            <div className="card-body">
                                <h3 className="card-title text-center text-dark">Manas Kokate</h3>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item m-2 custom_bgcolor"><i className="fas fa-user"></i> manaskokate09@gmail.com</li>
                                    <li className="list-group-item m-2 custom_bgcolor"><i className="fas fa-calendar-alt"></i> 27-09-2004</li>
                                    <li className="list-group-item m-2 custom_bgcolor"><i className="fas fa-graduation-cap"></i> BCA-III</li>
                                    <li className="list-group-item m-2 custom_bgcolor"><i className="fas fa-mobile-alt"></i> 8486077412</li>
                                </ul>
                                <button className="btn btn-danger mt-3" onClick={() => { props.handleClick() }}> Edit Profile</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card custom_bgcolor text-white">
                            <div className="card-body">
                                <button className="btn btn-danger float-right">add skill</button>
                                <table className="table table-bordered table-striped text-white mt-3">
                                    <thead>
                                        <tr>
                                            <th scope="col"><input type="checkbox" id="Select_all" onclick="Select_all_click()" />
                                                Select All</th>
                                            <th scope="col">Sr No.</th>
                                            <th scope="col">Proficiency</th>
                                            <th scope="col">Skill</th>
                                        </tr>
                                    </thead>
                                    <tbody id="table_body">
                                        {

                                            props.data.map((ele, i) => {
                                                return <Skillstable skill={{ ele, i }} key={i + 1} />
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default mainsection
