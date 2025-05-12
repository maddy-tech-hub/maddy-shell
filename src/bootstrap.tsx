import { createRoot } from 'react-dom/client';
import App from './App';
import Counter from './PracticeProblems/Counter';

import HookComponent from './PracticeProblems/HookComponent ';
import Redux from './PracticeProblems/Redux';
import Routers from './PracticeProblems/Routers';

import HOC from './PracticeProblems/HoC';
import { Context, Provider } from './PracticeProblems/Context';

export const Root = () => {
    return(
        <>
        <HOC isLogin={true} />
        <br /><br />

        <Provider><Context/></Provider>
        
        <Counter/>
        <br /><br />
        
        
        <HookComponent/>
        <br /><br />

        <Redux/>
        <br /><br />
        
        <Routers/>
        <br /><br />
        </>
    );
}


const container = document.getElementById('root');
const root = createRoot(container!);
console.log('omr : vemireddy shell app mounted');
root.render(<App/>);
