import React from 'react'
import { useDispatch} from 'react-redux'
import { useSelector } from 'react-redux'
import { info } from '../../slices/purchase/purchaseSlice'


const NavigationButton = () => {
  const step=useSelector((e)=>e.step.value);
  const purchase=useSelector(e=>e.purchase)
  const dispatch=useDispatch();
  const nextClick=()=>{
    console.log(purchase)
    dispatch(info({...purchase,nextClick:true}));
    if(purchase.symbol && purchase.spend && step==0){
      dispatch(next());
      dispatch(info({...purchase,nextClick:false}))
    }
    if(purchase.cardnumberValid && purchase.iban && step==1){
      dispatch(next());
      dispatch(info({...purchase,nextClick:false}))
    }
    if(step!=0){
      dispatch(next());
    }
    
  }
  return (
    <div className={step==0?'navigation btnRight':'navigation'}>
      {step!=0 &&<button className='btn1' onClick={()=>dispatch(back())}>Go Back</button>}
      <button className='btn2'onClick={nextClick}>{step==3?"Conforme":"Next Step"}</button>
    </div>
  )
}

export default NavigationButton