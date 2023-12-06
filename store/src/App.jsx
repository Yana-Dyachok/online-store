import React from 'react';
import {RouterProvider} from "react-router-dom";
import {router} from "./routing";
const App=()=> <RouterProvider router={router}/>
// const App=()=> {
//     return (
//         <div className="App wrapper">
//             <Header />
//             <Main/>
//             <Footer/>
//         </div>
//     );
// }


export default App;
