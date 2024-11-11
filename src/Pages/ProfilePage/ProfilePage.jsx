import React from 'react'
import './ProfilePage.css'
export default function ProfilePage() {
    return (
        <main class="profile-container">
            <h1>Profile</h1>
            <form class="profile-form">

                <div className="row">
                    <div className="col-6">
                        <div class="form-group">
                            <label>First Name</label>
                            <input type="text" placeholder="First Name" />
                        </div>
                    </div>

                    <div className="col-6">
                        <div class="form-group">
                            <label>Last Name</label>
                            <input type="text" placeholder="Last Name" />
                        </div>
                    </div>
                </div>

                {/* 
                <div class="form-group d-flex align-items-center">
                    <input type="checkbox" id="no-middle-name" />
                    <label for="no-middle-name" className='m-0 ms-2'>I don't have a middle name.</label>
                </div>
                <div class="form-group">
                    <label>Middle Name (optional)</label>
                    <input type="text" placeholder="Middle Name" />
                </div> */}
                <div class="form-group">
                    <label>Street</label>
                    <input type="text" placeholder="Street" />
                </div>
                {/* <div class="form-group">
                    <input type="checkbox" id="second-address" />
                    <label for="second-address">I have an address line 2 (optional)</label>
                </div> */}

                <div className="row">
                    <div className="col-6">
                        <div class="form-group">
                            <label>ZIP Code</label>
                            <input type="text" placeholder="ZIP Code" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <div class="form-group">
                            <label>City</label>
                            <input type="text" placeholder="City" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="form-group">
                            <label>State</label>
                            <input type="text" placeholder="State" />
                        </div>
                    </div>
                </div>

                {/* <div class="form-group">
                    <label>City</label>
                    <select>
                        <option>Alabama</option>
                        <option>Alaska</option>

                    </select>
                </div> */}
                {/* <div class="form-group whatsapp-updates">
                    <div class="whatsapp-icon">📱</div>
                    <p>WhatsApp updates: Receive offers and promotions via WhatsApp. Enable in your Settings.</p>
                </div> */}
                <div class="form-group">
                    <label>Your Date of Birth</label>
                    <div class=" row">
                        <div className="col-4">
                            <input type="text" placeholder="Month" />
                        </div>
                        <div className="col-4">
                            <input type="text" placeholder="Day" />
                        </div>
                        <div className="col-4">
                            <input type="text" placeholder="Year (YYYY)" />
                        </div>



                    </div>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" value="example@example.com" disabled />
                </div>
                <p class="consent-text">By completing my profile, I agree to receive communications according to the E-Sign Disclosure and Consent Notice.</p>
                <button type="submit" class="save-btn">Save</button>
                <button type="button" class="cancel-btn">Cancel</button>
            </form>

            {/* <div class="additional-options">
                <button>Add mobile number</button>
                <button>Payment preferences</button>
                <button>Security question</button>
            </div> */}
        </main>
    )
}
