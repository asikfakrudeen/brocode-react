import { useMemo, useState } from "react";

const EmployeeSearch = ({ employees }) => {
  const [query, setQuery] = useState("");

  const filteredEmployees = useMemo(() => {
    return employees.filter(emp =>
      emp.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, employees]);

  return (
    <>
      <input
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredEmployees.map(e => <li key={e.id}>{e.name}</li>)}
      </ul>
    </>
  );
}

export default EmployeeSearch;