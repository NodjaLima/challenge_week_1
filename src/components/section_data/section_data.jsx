import PizzaChart from "../pizza_chart/pizza_chart";
import Table from "../table/table";
import styles from './section_data.module.css'
import { BeatLoader } from "react-spinners";
import { useEffect, useState } from 'react'

const SectionData = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return ( 
    isLoading ? 
      <BeatLoader 
        className={styles.loader}
        color={'black'} 
        isLoading={isLoading}
        size={20} /> :
      <div className={styles.dataContainer}>
        <Table />
        <PizzaChart />
      </div>
  );
}
 
export default SectionData;