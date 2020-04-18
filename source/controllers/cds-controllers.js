mvc.controller({
  name: "cds",
  action: "home",
  path:"/"
}, function (req) {
  return {
    title: "Directorio de Miembros - CDS Centro de Innovación"
  };
});

mvc.controller({
  name: "cds",
  action: "directory",
  path:"/directory"
}, function (req) {
  return {
    title: "Directorio de Miembros - CDS Centro de Innovación"
  };
});