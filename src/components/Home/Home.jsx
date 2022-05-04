import "./Home.css";

export default function Home() {
  return (
    <div className="home">
        <div className="home_top">
            <div>
                <span className="material-icons-sharp">dashboard</span>
                <span>Dashboard</span>
            </div>
            <div>
                <ul>
                    <li>Today</li>
                    <li>Week</li>
                    <li>Month</li>
                    <li>-----</li>
                    <li>Year</li>
                </ul>
                <input type="date" />
            </div>
            <div>
                <button> + Add Widget</button>
            </div>
        </div>
        <div className="squares">
            <div className="square">
                <span>Clicks</span>
                <h1>670</h1>
                <span className="material-icons-sharp">expand_less</span>
            </div>

            <div className="square">
                <span>Clicks</span>
                <h1>670</h1>
                <span className="material-icons-sharp">expand_less</span>
            </div>

            <div className="square">
                <span>Clicks</span>
                <h1>670</h1>
                <span className="material-icons-sharp">expand_less</span>
            </div>

            <div className="square">
                <span>Clicks</span>
                <h1>670</h1>
                <span className="material-icons-sharp">expand_less</span>
            </div>

            <div className="square">
                <span>Clicks</span>
                <h1>670</h1>
                <span className="material-icons-sharp">expand_less</span>
            </div>

            <div className="square">
                <span>Clicks</span>
                <h1>670</h1>
                <span className="material-icons-sharp">expand_less</span>
            </div>
        </div>

        <div className="statistics">
            <span>double click campaign stats</span>
            "graphic"
        </div>

        <div className="home_bottom">
            <div className="table_large">
                <div className="column">
                    <span className="header">Channel</span>
                    <span className="row">Direct</span>
                    <span className="row">Email</span>
                    <span className="row">Organic Search</span>
                    <span className="row">Paid Search</span>
                    <span className="row">Referral</span>
                </div>
                <div className="column">
                    <span className="header">Sessions</span>
                    <span className="row">3397</span>
                    <span className="row">808</span>
                    <span className="row">430</span>
                    <span className="row">194</span>
                    <span className="row">108</span>
                </div>
                <div className="column">
                    <span className="header">% of Traffic</span>
                    <span className="row">65.9%</span>
                    <span className="row">15,7%</span>
                    <span className="row">8,3%</span>
                    <span className="row">2,1%</span>
                    <span className="row">1,0%</span>
                </div>
                <div className="column">
                    <span className="header">Goal Rate</span>
                    <span className="row">3.5%</span>
                    <span className="row">1,9%</span>
                    <span className="row">0,2%</span>
                    <span className="row">0.2%</span>
                    <span className="row">2,4%</span>
                </div>
                <div className="column">
                    <span className="header">Goals</span>
                    <span className="row">118</span>
                    <span className="row">15</span>
                    <span className="row">1</span>
                    <span className="row">5</span>
                    <span className="row">7</span>
                </div>
                <div className="column">
                    <span class="header">...</span>
                    <span className="row">----------------------------</span>
                    <span className="row">----------------------------</span>
                    <span className="row">----------------------------</span>
                    <span className="row">----------------------------</span>
                    <span className="row">----------------------------</span>
                </div>
            </div>
            <div className="table_short">
                <div className="column">
                    <span className="header">Top Cities</span>
                    <span className="row">City</span>
                    <span className="row">Ottawa</span>
                    <span className="row">Toronto</span>
                    <span className="row">New York</span>
                    <span className="row">Calgary</span>
                </div>
                <div className="column">
                    <span className="header">-</span>
                    <span className="row">Customers</span>
                    <span className="row">106</span>
                    <span className="row">55</span>
                    <span className="row">54</span>
                    <span className="row">7</span>
                </div>
                <div className="column">
                    <span class="header">...</span>
                    <span className="row">----------------------------</span>
                    <span className="row">----------------------------</span>
                    <span className="row">----------------------------</span>
                    <span className="row">----------------------------</span>
                    <span className="row">----------------------------</span>
                </div>
            </div>
        </div>
    </div>
  );
}