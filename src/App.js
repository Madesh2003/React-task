import './App.css';
import Inputele from './components/formelements/inputele';
import Labelele from './components/formelements/labelele';
import Th from './components/Tableelements/tablehead';
import Td from './components/Tableelements/tabledata';
import List from './components/listelement/list';
import Div from './components/divelement/divele';

function App() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <div className="sidebar h-full py-5 d-flex flex-column justify-content-between">
                        <div className="row mb-5 branding-container">
                            <h5 className="text-center brand-name">Guvi Sales</h5>
                        </div>
                        <div className="row nav-links">
                            <ul>
                                <List className="nav-link" label1={<i className='bx bxs-grid-alt me-3'></i>} label2={<p>Dashboard</p>} />
                                <List className="nav-link" label1={<i className='bx bx-test-tube me-3'></i>} label2={<p>Labtest</p>} />
                                <List className="nav-link" label1={<i className='bx bxs-calendar-plus me-3'></i>} label2={<p>Appointment</p>} />
                            </ul>
                        </div>
                        <Div className="footer" label1={<Div className="d-flex align-items-center justify-content-start" label1={<i className='bx bx-help-circle me-3'></i>} label2={<p>Help</p>} />} />
                    </div>
                </div>
                <div className="col-10 p-5">
                    <Div className="row mb-5" label1={<Inputele type="search" className="serachbar1" placeholder="Search" />} />
                    <div className="row mb-5">
                        <Div className="col-3" label1={<Div className="mb-3" label1={<Labelele for="customerName" className="form-label" label="Customer" />} label2={<Inputele type="text" className="form-control" id="customerName" placeholder="Enter customer name" />} />} />
                        <Div className="col-3" label1={<Div className="mb-3" label1={<Labelele for="invoiceId" className="form-label" label="Invoice ID" />} label2={<Inputele type="email" className="form-control" id="invoiceId" placeholder="Enter Invoice Id" />} />} />
                        <Div className="col-3" label1={<Div className="mb-3" label1={<Labelele for="startDate" className="form-label" label="Start Date" />} label2={<Inputele type="date" className="form-control" id="startDate" placeholder="name@example.com" />} />} />
                        <Div className="col-3" label1={<Div className="mb-3" label1={<Labelele for="endDate" className="form-label" label="End Date" />} label2={<Inputele type="date" className="form-control" id="endDate" placeholder="name@example.com" />} />} />
                        <div className="row px-2">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <Th scope="col" className="selector" label={<Inputele className="form-check-input" type="checkbox" value="" id="" />} />
                                        <Th label="Invoice ID" />
                                        <Th label="Date" />
                                        <Th label="Customer" />
                                        <Th label="payable Amount" />
                                        <Th label="Paid Amount" />
                                        <Th label="Due" />
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <Td scope="row" className="selector" label={<Inputele className="form-check-input" type="checkbox" value="" id="" />} />
                                        <Td scope="col" label="#AHGA68" />
                                        <Td scope="col" label="29/10/2023" />
                                        <Td scope="col" label="Otto" />
                                        <Td scope="col" label="1000" />
                                        <Td scope="col" label="1000" />
                                        <Td scope="col" label="0" />
                                    </tr>
                                    <tr>
                                        <Td scope="row" className="selector" label={<Inputele className="form-check-input" type="checkbox" value="" id="" />} />
                                        <Td scope="col" label="#AHGA69" />
                                        <Td scope="col" label="25/08/2023" />
                                        <Td scope="col" label="Otto" />
                                        <Td scope="col" label="1200" />
                                        <Td scope="col" label="1500" />
                                        <Td scope="col" label="550" />
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;
