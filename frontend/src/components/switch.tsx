//importation du switch light

//importation du light context
import { useContext } from 'react';
import { LightContext } from '../context/lightcontext';

function LightSwitch(){
    const LightCtx= useContext(LightContext)

    function switchClick(){
        LightCtx.toggleLight()
    }

    return(
        <div>
            <span className="material-icons">light_mode</span>
            <input type="checkbox" onClick={switchClick}/>
            <span className="material-icons">dark_mode</span>
        </div>
    )
}

export default LightSwitch