import { useEffect, useState } from "react";

export interface MultiProps {
    multiNumber: number
}

const MultiTable = (props: MultiProps) => {
  

    const[showTable,setShowTable] = useState(false);

    useEffect(() =>{
        if(props.multiNumber > 0){
            setShowTable(true);
        }else{
            setShowTable(false);
        }
    },[props.multiNumber]);

    console.log(`this is value from parent ${props.multiNumber}`)
    //1 x 2 =2

    return (
        <>
        <h1>hello</h1>
        <input type="text"></input>
            {showTable && (
                Array.from({length : 10}, (e,i) => (<span key={i}>{`${i+1} X ${props.multiNumber} = ${(i +1) * props.multiNumber}`}</span>))
            )}  
        </>
    );

}

export default MultiTable;


















































































































// function App() {

//     const [user, setUser] = useState("Manoj");
  
//     useEffect(() => {
//       setTimeout(() => {
//         setUser("Monty")
//       }, 10000);
//     })
  
//     const myParentFunction = () => {
//       alert("Hi this is partent");
//     }
  
//     return (
//       <div className="App">
//         <header className="App-header">
//           <div className='main'>
//             <img src={logo} className="App-logo" alt="logo" />
//             <h1>React Js</h1>
//             <a
//               className="App-link"
//               href="https://reactjs.org"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Learn React
//             </a><br/>
  
//             <MultiTable  />
//           </div>
  
//           <div className='content'>
//             {/* <Sample name='Manoj' age={23} address="Naidupeta" dob="16-07-1999" /> */}
//             {/* <WishComponent userName='siri' /> */}
//             <NewWishComponent userName={user} callParent={() =>myParentFunction()} />
//           </div>
//         </header>
//       </div>
//     );
//   }
  
//   export default App;
  