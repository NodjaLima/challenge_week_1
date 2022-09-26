import PizzaChart from "../pizza_chart/pizza_chart";
import Table from "../table/table";
import styles from './section_data.module.css'

const SectionData = () => {
  return ( 
    <div className={styles.dataContainer}>
      <Table />
      <PizzaChart />
    </div>
   );
}
 
export default SectionData;