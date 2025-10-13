document$.subscribe(function() {
  var tables = document.querySelectorAll("article table:not([class])")
  tables.forEach(function(table) {
    const instance = new Tablesort(table);
    document.querySelectorAll("thead th")[2].click()
    document.querySelectorAll("thead th")[2].click()
  })
})