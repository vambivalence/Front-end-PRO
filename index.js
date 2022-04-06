function table(cellCount) {
    const table = document.createElement("table");
    table.className = "table";
    let counter = 1;
  
    for (let i = 0; i < cellCount; i++) {
      const tr = document.createElement("tr");
      tr.className = "table-row";
      table.append(tr);
  
      for (let j = 0; j < cellCount; j++) {
        const td = document.createElement("td");
        td.className = "table-cell";
        td.innerHTML = +counter;
        tr.append(td);
        counter++;
      }
    }
  
    return table;
  }
  
  document.body.append(table(10));
  