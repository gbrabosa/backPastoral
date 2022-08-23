"use strict";

/**
 * pessoa router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::pessoa.pessoa", {
  config: {
    ["pessoas/buscarPessoasPorFiltros"]: {
      auth: false,
      policies: [],
    },
  },
});
