const Table = (props) => {
  return ( 
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome do Estudante</th>
          <th>Turma</th>
          <th>Idade</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>{props.id}</td>
          <td>{props.name}</td>
          <td>{props.class}</td>
          <td>{props.age}</td>
        </tr>
      </tbody>
    </table>
   );
}
 
export default Table;
