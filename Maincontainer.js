import React, {useState} from 'react'

export default () => {
    const [organisation, setorganisation] = useState('');
    const [tRepo, settRepo] = useState('');
    const [oFork, setoFork] = useState('');
    const [item, setitem] = useState('');
   
    const apiGet = () => {
        console.log(`${organisation}`);
        // fetch(`https://api.github.com/search/repositories?q=user%3A${organisation}`)
        fetch(`https://api.github.com/users/${organisation}/repos`)
        .then((response) => response.json())
        .then((json) => {item:json});
        // .then((json) => searchResults(json))
        // const resultsHtml = response.map((obj , i)) => {
        //     return <div key = {i}>{obj.full_name}</div>
        // }
    };
    
  


return(
    <>
    <hr/>
    <input type="text" placeholder="Organisation" onChange={e => setorganisation(e.target.value)} />
    <input type="number" placeholder="N (Top Repo)" onChange={e => settRepo(e.target.value)} />
    <input type="number" placeholder="M (Oldest Fork)" onChange={e => setoFork(e.target.value)} />
    <button onClick={apiGet}>Submit</button>
    </>
    )
}


















// function Maincontainer() {
//     const {searchText}
    // const apiGet = () => {
    //     fetch(`https://github.com/${searchText}`)
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));
    // };
  
//     return (
//         <div>
//             <text placeholder="Organisation">{searchText}</text>
//             <input id= "searchText" placeholder="Organisation" type={Text}/>
// //          <br/>
// //          <input placeholder="N (Top Repo)" type="number" />
// //          <br/>
// //          <input placeholder="M (Oldest Fork)" type="number"/>
// //          <br/>
//             <button onClick={apiGet}>Fetch</button>
//         </div>
//     )
   
// } 


// const Maincontainer = () => {
//     return (
//         <>
//             <div>
//                 <input id= "searchText" placeholder="Organisation" type={Text}/>
//                 <br/>
//                 <input placeholder="N (Top Repo)" type="number" />
//                 <br/>
//                 <input placeholder="M (Oldest Fork)" type="number"/>
//                 <br/>
//                 <button><a>Fetch</a></button>
//             </div>
//         </>
//     );
//     };
    
    // export default Maincontainer;