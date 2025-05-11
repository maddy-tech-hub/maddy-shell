import { createRoot } from 'react-dom/client';
import App from './App';
import Context, { ProviderContext } from './PracticeProblems/Context';
import Counter from './PracticeProblems/Counter';
import HOC from './PracticeProblems/HOC';
import HookComponent from './PracticeProblems/HookComponent ';
import Redux from './PracticeProblems/Redux';
import Routers from './PracticeProblems/Routers';
export const Root = () => {
    return(
        <>
        <ProviderContext> <Context /> </ProviderContext>
        <br /><br />
        
        <Counter/>
        <br /><br />
        
        <HOC isLoggedIn={true} />
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
root.render(<App />);
