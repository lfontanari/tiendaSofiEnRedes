
export default function ItemCount( {count, setCount}) {

    /* const [count, setCount] = useState(1) */
   
    function onIncrease() {
        if (count < 10) {
        setCount(count + 1)
        }
    }

    function onDecrease() {
        if (count > 1 ) {
        setCount(count - 1)
        }
    }



    return (
        <div>
            <button onClick={onDecrease}>-</button>
            <span>  {count}  </span>
            <button onClick={onIncrease}>+</button>
        </div>
    )
}