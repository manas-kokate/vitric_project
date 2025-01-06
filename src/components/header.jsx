import React from 'react';



const header = () => {
    return (
        < >
            <div className='container-fluid custom_bgcolor navbar_section d-flex justify-content-space-between align-items-center'>
                <nav className="navbar container">
                    <div className="container-fluid">
                        <a className="navbar-brand">Student Profile Management</a>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-danger" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default header
