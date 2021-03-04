import React,{useState} from 'react'
import {Bar,Line,Doughnut} from 'react-chartjs-2';
import createPDF from '../pdfWrapper';
import Tab from '../Components/Tab';
import {useLocation,useHistory} from 'react-router-dom';
import EmailForm from './EmailForm';

function renderTab(path){
    switch(path)
    {
        case "/tab1":
         return <Tab Graph={Bar} name="Tab 1"/>;
        case "/tab2":
            return <Tab Graph={Doughnut} name="Tab 2"/>
        case "/tab3":
            return <Tab Graph={Line} name="Tab 3"/>

        case "/all":
            return (
                <>
                <Tab Graph={Bar} name="Tab 1"/>
                <Tab Graph={Doughnut} name="Tab 2"/>
                <Tab Graph={Line} name="Tab 3"/>
                </>
            );
         default:
         return <Tab Graph={Bar} name="Tab 1"/>;
    }

}

function Container(props) {
    const path=useLocation().pathname;
    const [emailform, setemailform] = useState(false);
    const history=useHistory();
    console.log(history)
    const downloadAll=()=>{
        history.push("/all");
        setTimeout(()=>{
            createPDF(document.getElementsByClassName("print_container_all"));
        },2000);
        

    }
    return (
        <div className="container">
            {
                emailform &&
                <EmailForm callback={()=>setemailform(false)} />
            }
            <div className="print_container_all">
            {
                renderTab(path)
            }
            </div>
            <div className="action_row">
                <button className="action_btn" onClick={()=>createPDF(document.getElementsByClassName("print_container"))}>Download Report</button>
                <button className="action_btn" onClick={()=>setemailform(true)}>Email PDF</button>
                <button className="action_btn" onClick={downloadAll}>Download All Report</button>
            </div>
        </div>
        );
}

export default Container
