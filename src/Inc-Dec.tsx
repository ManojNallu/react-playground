
import './count.css'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { decAction, incAction } from './actions/counterActions'

const AddDelCount = () => {

    const actiondispatch: any = useDispatch();

    const counterValue: number = useSelector((state: any) => state.count);


    const inchandler = () => {
        actiondispatch(incAction());
    }

    const dechandler = () => {
        actiondispatch(decAction());
    }

    const valColor = counterValue >= 0 ? "green" : "red";


    return (
        <div className="counter">
            <h1 style={{ color: valColor }} >{counterValue}</h1>
            <Button onClick={() => dechandler()}>-</Button>
            <Button onClick={() => inchandler()}>+</Button>
        </div>
    )
}

export default AddDelCount;
