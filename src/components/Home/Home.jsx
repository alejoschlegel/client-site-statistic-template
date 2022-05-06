import css from "./Home.module.css";
import Chart from "../Chart/Chart";

export default function Home() {
  return (
    <div className={css.home}>
        <div className={css.container}>
        {/* ---------------------------------------------- nav top ----------------------------------------------*/}
        <div className={css.navtop}>
            <div className={css.navtop_left}>
                <button><span>Popular</span></button>
                <button><span>For you</span></button>
                <button><span>Messages</span></button>
            </div>
            <div className={css.navtop_right}>
                <div>
                    <span className="material-icons-sharp">search</span>
                    <input type="text" placeholder="Search messages"/>
                </div>
                <div>
                    <span className="material-icons-sharp">notifications</span>
                    <div>user</div>
                </div>
            </div>
        </div>
        {/* ---------------------------------------------- home top ----------------------------------------------*/}
        <div className={css.home_top}>
            <div>
                <span className="material-icons-sharp">dashboard</span>
                <span className={css.dashboard}>Dashboard</span>
            </div>
            <div>
                <ul>
                    <li>Today</li>
                    <li>Week</li>
                    <li>Month</li>
                    <li>Quarter</li>
                    <li>Year</li>
                </ul>
                <input type="date"/>
            </div>
            <div>
                <button> + Add Widget</button>
            </div>
        </div>
        {/* ---------------------------------------------- squares ----------------------------------------------*/}
        <div className={css.squares}>
            <div className={css.square}>
                <span>Clicks</span>
                <h2>670</h2>
                <div><span className="material-icons-sharp" id={css.green}>expand_less</span> 169.1%</div>
            </div>

            <div className={css.square}>
                <span>Impressions</span>
                <h2>1,245</h2>
                <div><span className="material-icons-sharp" id={css.green}>expand_less</span> 285.8%</div>
            </div>

            <div className={css.square}>
                <span>CTR</span>
                <h2>21.0%</h2>
                <div><span className="material-icons-sharp" id={css.green}>expand_less</span> 89.1%</div>
            </div>

            <div className={css.square}>
                <span>Click Conversions</span>
                <h2>32</h2>
                <div><span className="material-icons-sharp" id={css.red}>expand_more</span> -81.2%</div>
            </div>

            <div className={css.square}>
                <span>View Conversions</span>
                <h2>22</h2>
                <div><span className="material-icons-sharp" id={css.red}>expand_more</span> -75,0%</div>
            </div>

            <div className={css.square}>
                <span>Total Conversions</span>
                <h2>250</h2>
                <div><span className="material-icons-sharp" id={css.green}>expand_less</span> 90.1%</div>
            </div>
        </div>        
        {/* ---------------------------------------------- home statistics ----------------------------------------------*/}
        <div className={css.chart}>
            <div>chart delimiter</div>
        </div>
        {/* <Chart /> */}
        {/* ---------------------------------------------- home bottom ----------------------------------------------*/}
        <div className={css.home_bottom}>
            <div className={css.table_large}>
                <div className={css.column}>
                    <span className={css.header}>Channel</span>
                    <span className={css.row}>Direct</span>
                    <span className={css.row}>Email</span>
                    <span className={css.row}>Organic Search</span>
                    <span className={css.row}>Paid Search</span>
                    <span className={css.row}>Referral</span>
                </div>
                <div className={css.column}>
                    <span className={css.header}>Sessions</span>
                    <span className={css.row}>3397</span>
                    <span className={css.row}>808</span>
                    <span className={css.row}>430</span>
                    <span className={css.row}>194</span>
                    <span className={css.row}>108</span>
                </div>
                <div className={css.column}>
                    <span className={css.header}>% of Traffic</span>
                    <span className={css.row}>65.9%</span>
                    <span className={css.row}>15,7%</span>
                    <span className={css.row}>8,3%</span>
                    <span className={css.row}>2,1%</span>
                    <span className={css.row}>1,0%</span>
                </div>
                <div className={css.column}>
                    <span className={css.header}>Goal Rate</span>
                    <span className={css.row}>3.5%</span>
                    <span className={css.row}>1,9%</span>
                    <span className={css.row}>0,2%</span>
                    <span className={css.row}>0.2%</span>
                    <span className={css.row}>2,4%</span>
                </div>
                <div className={css.column}>
                    <span className={css.header}>Goals</span>
                    <span className={css.row}>118</span>
                    <span className={css.row}>15</span>
                    <span className={css.row}>1</span>
                    <span className={css.row}>5</span>
                    <span className={css.row}>7</span>
                </div>
                <div className={css.column}>
                    <span className={css.header}>...</span>
                    <span className={css.row}>----------------------------</span>
                    <span className={css.row}>----------------------------</span>
                    <span className={css.row}>----------------------------</span>
                    <span className={css.row}>----------------------------</span>
                    <span className={css.row}>----------------------------</span>
                </div>
            </div>
            <div className={css.table_short}>
                <div className={css.column}>
                    <span className={css.header}>Top Cities</span>
                    <span className={css.row}>City</span>
                    <span className={css.row}>Ottawa</span>
                    <span className={css.row}>Toronto</span>
                    <span className={css.row}>New York</span>
                    <span className={css.row}>Calgary</span>
                </div>
                <div className={css.column}>
                    <span className={css.header}>-</span>
                    <span className={css.row}>Customers</span>
                    <span className={css.row}>106</span>
                    <span className={css.row}>55</span>
                    <span className={css.row}>54</span>
                    <span className={css.row}>7</span>
                </div>
                <div className={css.column}>
                    <span className={css.header}>...</span>
                    <span className={css.row}>----------------------------</span>
                    <span className={css.row}>----------------------------</span>
                    <span className={css.row}>----------------------------</span>
                    <span className={css.row}>----------------------------</span>
                    <span className={css.row}>----------------------------</span>
                </div>
            </div>
        </div>
        </div>
        {/* 
        <Chart/>
        <div className="home_bottom">
            <div className="table_large">
                <div className={css.column}>
                    <span className={css.header}>Channel</span>
                    <span className={css.row}>Direct</span>
                    <span className={css.row}>Email</span>
                    <span className={css.row}>Organic Search</span>
                    <span className={css.row}>Paid Search</span>
                    <span className={css.row}>Referral</span>
                </div>
                <div className={css.column}>
                    <span className={css.header}>Sessions</span>
                    <span className={css.row}>3397</span>
                    <span className={css.row}>808</span>
                    <span className={css.row}>430</span>
                    <span className={css.row}>194</span>
                    <span className={css.row}>108</span>
                </div>
                <div className={css.column}>
                    <span className={css.header}>% of Traffic</span>
                    <span className={css.row}>65.9%</span>
                    <span className={css.row}>15,7%</span>
                    <span className={css.row}>8,3%</span>
                    <span className={css.row}>2,1%</span>
                    <span className={css.row}>1,0%</span>
                </div>
                <div className={css.column}>
                    <span className={css.header}>Goal Rate</span>
                    <span className={css.row}>3.5%</span>
                    <span className={css.row}>1,9%</span>
                    <span className={css.row}>0,2%</span>
                    <span className={css.row}>0.2%</span>
                    <span className={css.row}>2,4%</span>
                </div>
                <div className={css.column}>
                    <span className={css.header}>Goals</span>
                    <span className={css.row}>118</span>
                    <span className={css.row}>15</span>
                    <span className={css.row}>1</span>
                    <span className={css.row}>5</span>
                    <span className={css.row}>7</span>
                </div>
                <div className={css.column}>
                    <span className={css.header}>...</span>
                    <span className={css.row}>----------------------------</span>
                    <span className={css.row}>----------------------------</span>
                    <span className={css.row}>----------------------------</span>
                    <span className={css.row}>----------------------------</span>
                    <span className={css.row}>----------------------------</span>
                </div>
            </div>
            <div className={css.table_short}>
                <div className={css.column}>
                    <span className={css.header}>Top Cities</span>
                    <span className={css.row}>City</span>
                    <span className={css.row}>Ottawa</span>
                    <span className={css.row}>Toronto</span>
                    <span className={css.row}>New York</span>
                    <span className={css.row}>Calgary</span>
                </div>
                <div className={css.column}>
                    <span className={css.header}>-</span>
                    <span className={css.row}>Customers</span>
                    <span className={css.row}>106</span>
                    <span className={css.row}>55</span>
                    <span className={css.row}>54</span>
                    <span className={css.row}>7</span>
                </div>
                <div className={css.column}>
                    <span className={css.header}>...</span>
                    <span className={css.row}>----------------------------</span>
                    <span className={css.row}>----------------------------</span>
                    <span className={css.row}>----------------------------</span>
                    <span className={css.row}>----------------------------</span>
                    <span className={css.row}>----------------------------</span>
                </div>
            </div>
        </div> */}
    </div>
  );
}