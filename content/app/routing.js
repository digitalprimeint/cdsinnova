route.load({
  el: "#container",
  elModal: '',
  notFoundMessage: `<div class="row">
  <div class="col col-12 content text-center">
      <i class="fas fa-exclamation-circle not-found-icon"></i>
      <p>La página no fue encontrada!</p>
  </div>
</div>`,
  defaultPage: {
    name: "cds",
    page: "/directory",
    postLoad: function () {
      $(document).ready(function () {
        new DirectorioCentroInnovacion().init();
      })
    }
  }
});

route.register({
  name: "add-birrias",
  page: "/add-birrias",
  postLoad: function () {
    view.load()
  }
});