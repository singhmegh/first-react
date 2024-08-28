import styles from "./Item.module.css"

const Item = ({foodItem}) => {
  const handleBuyButtonClicked = (foodItem) => {
    console.log(`${foodItem} being bought`)
  }
  
  return <li className="list-group-item my-item"><span className="my-span">{foodItem}</span>
  <button className= {`${styles.button} btn btn-info`}onClick={()=> handleBuyButtonClicked(foodItem)}>Buy</button></li>;
};

export default Item;
