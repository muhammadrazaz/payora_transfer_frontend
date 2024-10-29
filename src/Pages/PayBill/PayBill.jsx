import React from 'react'
import './PayBill.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Card from '../../Components/Card/Card'
export default function PayBill() {
    return (
        <>
            <Header />
            <div className='pay-bills'>
                <div className="row m-sm-5 m-1">
                    <div className="col-md-8">
                        <Card>
                            <p id='invoice-info'>Invoice <span style={{color:'#9d0208ff'}}>#42D42-0001</span> <span style={{ fontSize: '16px', fontWeight: '500' }}>for</span> $2250.65 </p>
                            <div className=''>
                                <span id='open-text'>Open</span>
                                <span className='ms-4'>Due next Month</span>
                            </div>
                            <div className='mt-4 d-flex gap-3 flex-sm-row flex-column' id='invoice-btn'>
                                <div >Send Invoice</div>
                                <div >Edit Invoice</div>
                                <div >Add Note</div>
                            </div>
                        </Card>

                        <Card>
                            <p id='invoice-info'>History</p>

                            <div className='mt-4'>
                                <div className='d-flex history align-items-center my-3'>

                                    <i class="ri-mail-open-line"></i>
                                    <div className='ms-3' style={{ fontSize: '14px' }}>
                                        <p className='m-0'>Invoice was sent to claudnew@gmail.com</p>
                                        <p className='m-0' style={{ color: 'gray' }}>Jul 2, 2023, 2:56 PM</p>
                                    </div>
                                </div>
                                <div className='d-flex history align-items-center my-3'>

                                    <i class="ri-bank-line"></i>
                                    <div className='ms-3' style={{ fontSize: '14px' }}>
                                        <p className='m-0'>Invoice was finalized</p>
                                        <p className='m-0' style={{ color: 'gray' }}>Jul 2, 2023, 2:54 PM</p>
                                    </div>
                                </div>
                                <div className='d-flex history align-items-center my-3'>

                                    <i class="ri-bank-line"></i>
                                    <div className='ms-3' style={{ fontSize: '14px' }}>
                                        <p className='m-0'>Invoice #42D42-0001 was created </p>
                                        <p className='m-0' style={{ color: 'gray' }}>Jul 2, 2023, 1:32 PM</p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <p id='invoice-info'>Items</p>
                            <div className="row" style={{ fontSize: '14px', color: 'gray' }}>
                                <div className="col-4">Description</div>
                                <div className="col-1">QTY</div>
                                <div className="col-3">Price</div>
                                <div className="col-3">Total amount</div>
                                <div className="col-1"></div>
                            </div>

                            <div className="row my-3" >
                                <div className="col-4">UX/UI Design for Mobile app</div>
                                <div className="col-1">1</div>
                                <div className="col-3">1150.52$</div>
                                <div className="col-3">1150.52$</div>
                                <div className="col-1" style={{ fontSize: '20px', fontWeight: '900' }}><i class="ri-more-line"></i></div>
                            </div>

                            <div className="row my-3" >
                                <div className="col-4">UX/UI Design for Landing page</div>
                                <div className="col-1">1</div>
                                <div className="col-3">550.52$</div>
                                <div className="col-3">550.52$</div>
                                <div className="col-1" style={{ fontSize: '20px', fontWeight: '900' }}><i class="ri-more-line"></i></div>
                            </div>

                            <div className="row my-3" >
                                <div className="col-4">UX/UI Design for Mobile app</div>
                                <div className="col-1">1</div>
                                <div className="col-3">1150.52$</div>
                                <div className="col-3">1150.52$</div>
                                <div className="col-1" style={{ fontSize: '20px', fontWeight: '900' }}><i class="ri-more-line"></i></div>
                            </div>

                            <div className="row my-3" >
                                <div className="col-4">UX/UI Design for Landing page</div>
                                <div className="col-1">1</div>
                                <div className="col-3">550.52$</div>
                                <div className="col-3">550.52$</div>
                                <div className="col-1" style={{ fontSize: '20px', fontWeight: '900' }}><i class="ri-more-line"></i></div>
                            </div>


                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <p id='invoice-info'>Details</p>

                            <div className="mt-4">
                                <div className='d-flex details align-items-center my-3'>

                                    <i class="ri-profile-line"></i>
                                    <div className='ms-2' style={{ fontSize: '14px' }}>
                                        <p className='m-0'>Claud Newton</p>

                                    </div>
                                </div>

                                <div className='d-flex details align-items-center my-3'>

                                    <i class="ri-mail-line"></i>
                                    <div className='ms-2' style={{ fontSize: '14px' }}>
                                        <p className='m-0'>claudnew@gmail.com</p>

                                    </div>
                                </div>

                                <div className='d-flex details align-items-center my-3'>

                                    <i class="ri-calendar-schedule-line"></i>
                                    <div className='ms-2' style={{ fontSize: '14px' }}>
                                        <p className='m-0'>Aug 5, 3:16 AM</p>

                                    </div>
                                </div>
                                <div className='d-flex details align-items-center my-3'>

                                    <i class="ri-hashtag"></i>
                                    <div className='ms-2' style={{ fontSize: '14px' }}>
                                        <p className='m-0'>#42D42-0001</p>

                                    </div>
                                </div>

                                <div className='d-flex details align-items-center mt-4'>

                                    <button id='invoice-pdf'>Invoice PDF</button>
                                </div>
                            </div>


                        </Card>

                        <Card>
                            <div>

                                <span className='hour-24'>24</span>
                            </div>
                            <p id='invoice-info' className='mb-1'>Ask us</p>

                            <p>If you have a question or encounter a problem, we can help you any time.</p>

                            <div className="mt-4">


                                <div className='d-flex details align-items-center mt-4'>

                                    <button id='invoice-pdf'>Ask a question</button>
                                </div>
                            </div>


                        </Card>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
