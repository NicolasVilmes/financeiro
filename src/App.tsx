import { useState, useEffect } from "react";
import * as C from "./app.styles";
import { Item } from "./types/Item";
import { Category } from "./types/category";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { getCurrentMoth, FilterListByMoth } from "./utility/dateFilter";
import { Table } from "./components/Table";

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setfeilteredList] = useState<Item[]>([]);
  const [CurrentMoth, setCurrentMoth] = useState(getCurrentMoth());

  useEffect(() => {
    setfeilteredList(FilterListByMoth(list, CurrentMoth));
  }, [list, CurrentMoth]);

  return (
    <C.Conteiner>
      <C.Header>
        <C.Headertext>Meu Balanço</C.Headertext>
      </C.Header>
      <C.body>
        {}
        {}
        <Table list={filteredList} />
      </C.body>
    </C.Conteiner>
  );
};

export default App;
