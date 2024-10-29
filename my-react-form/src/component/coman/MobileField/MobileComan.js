
import { InputMask } from 'primereact/inputmask';
        
const MobileComan=({MobileArr =[], MobileObj,onchangeCb,options =[]})=>{
    const MobileFiled =()=>{
        return(
            <div>
 <InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="99-999999" placeholder="99-999999"/>
            </div>
        )
    }
}

export default MobileComan