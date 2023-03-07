import React from 'react'
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div className="user">
        <div className="main-content">
            <div className="container mt-7">
                <div className="row">
                    <div className="col-xl-8 m-auto order-xl-1">
                    <div className="card bg-secondary shadow">
                        <div className="card-header bg-white border-0">
                            <div className="row align-items-center">
                                <div className="col-8">
                                <h3 className="mb-0">User account</h3>
                                </div>
                                <div className="col-4 text-right">
                                <a href="#!" className="btn btn-sm btn-primary">Edit</a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body customize-card">
                            <form>
                                <h6 className="heading-small text-muted mb-4">User information</h6>
                                <div className="pl-lg-4">
                                    <div className="row">
                                        <div className="col-lg-6">
                                        <div className="form-group focused">
                                            <label className="form-control-label" for="input-username">Username</label>
                                            <input type="text" id="input-username" className="form-control form-control-alternative" value="jane.doe"/>
                                        </div>
                                        </div>
                                        <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="form-control-label" for="input-email">Email address</label>
                                            <input type="email" id="input-email" className="form-control form-control-alternative" value="jane@example.com"/>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                        <div className="form-group focused">
                                            <label className="form-control-label" for="input-first-name">First name</label>
                                            <input type="text" id="input-first-name" className="form-control form-control-alternative" value="Jane"/>
                                        </div>
                                        </div>
                                        <div className="col-lg-6">
                                        <div className="form-group focused">
                                            <label className="form-control-label" for="input-last-name">Last name</label>
                                            <input type="text" id="input-last-name" className="form-control form-control-alternative" value="Doe"/>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-4"/>
                                <h6 className="heading-small text-muted mb-4">Shipping Address</h6>
                                <div className="pl-lg-4">
                                    <div className="row">
                                        <div className="col-md-12">
                                        <div className="form-group focused">
                                            <label className="form-control-label" for="input-address">Address</label>
                                            <input id="input-address" className="form-control form-control-alternative" value="123rd Ave" type="text" />
                                        </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                        <div className="form-group focused">
                                            <label className="form-control-label" for="input-city">City</label>
                                            <input type="text" id="input-city" className="form-control form-control-alternative" value="Hogwart" />
                                        </div>
                                        </div>
                                        <div className="col-lg-4">
                                        <div className="form-group focused">
                                            <label className="form-control-label" for="input-country">Country</label>
                                            <input type="text" id="input-country" className="form-control form-control-alternative" value="United States" />
                                        </div>
                                        </div>
                                        <div className="col-lg-4">
                                        <div className="form-group">
                                            <label className="form-control-label" for="input-country">Postal code</label>
                                            <input type="number" id="input-postal-code" className="form-control form-control-alternative" value="98102" />
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserProfile