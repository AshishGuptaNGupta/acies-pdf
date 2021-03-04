import React,{createRef} from 'react'


const data={
    labels:["Ford","Toyota","Hyundai","Maruti"],
    datasets:[{
        label:"Volume of Cars sold",
        data:[10,20,30,40],
        backgroundColor:[
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(39, 174, 96)',
            'rgb(255, 205, 86)'
        ]
    }]
}

function Tab1({name,Graph}) {
    const printRef=createRef();
    
    return (
        <div className="print_container" ref={printRef}>
           
                <h2>{name}</h2>

                <div className="chart">
                <Graph width="10px" data={data}  options={{ maintainAspectRatio: false }}/>
                </div>              

        </div>
        
    )
}

export default Tab1
