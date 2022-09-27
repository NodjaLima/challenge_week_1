import { Chart } from "react-google-charts";
import Data from "../../../data/data";
import styles from './pizza_chart.module.css'

const PizzaChart = () => {

  const ageGroup1 = Data.filter((item) => item.age >= 18 && item.age <= 21 )
  const ageGroup2 = Data.filter((item) => item.age >= 22 && item.age <= 25 )
  const ageGroup3 = Data.filter((item) => item.age >= 26 && item.age <= 29 )
  const ageGroup4 = Data.filter((item) => item.age >= 30 && item.age <= 33 )
  const ageGroup5 = Data.filter((item) => item.age > 33)

  const data = [
    ["Faixa Etária", 'Quantidade de Alunos'],
    ["De 18 a 21 anos", ageGroup1.length],
    ["De 22 a 25 anos", ageGroup2.length],
    ["De 26 a 29 anos", ageGroup3.length],
    ["De 30 a 36 anos", ageGroup4.length],
    ["Acima de 33 anos", ageGroup5.length]
  ];

  const options = {
    pieHole: 0.4,
    backgroundColor: '#FFDD00',
    colors: ['#E56E25', '#F18A1F', '#3BA3D2', '#4EB966', '#EFB119'],
    pieSliceText: 'none'
  };

  return ( 
    <div className={styles.chartContainer}>
      <Chart
        fill="#FFDD00"
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
   );
}
 
export default PizzaChart;