/* eslint-disable no-useless-return */
let _ = require("lodash");

let getViewForSwagger = function(opt) {
  const { swagger, className, profix } = opt;
  let authorizedMethods = [
    "GET",
    "POST",
    "PUT",
    "DELETE",
    "PATCH",
    "COPY",
    "HEAD",
    "OPTIONS",
    "LINK",
    "UNLIK",
    "PURGE",
    "LOCK",
    "UNLOCK",
    "PROPFIND"
  ];
  let data = {
    title: swagger.info.title,
    description: swagger.info.description,
    className: className,
    methods: []
  };

  _.forEach(swagger.paths, function(api, path) {
    const fullPath = profix + path;
    _.forEach(api, function(op, m) {
      let M = m.toUpperCase();
      console.log(M, M === "" || authorizedMethods.indexOf(M) === -1);
      if (M === "" || authorizedMethods.indexOf(M) === -1) return;

      let methodName = op.operationId
        ? normalizeName(op.operationId)
        : getPathToMethodName(m, path);

      let method = {
        methodName,
        path: fullPath,
        method: m,
        summary: op.summary
      };
      data.methods.push(method);
    });
  });
  return data;
};

function normalizeName(id) {
  return id.replace(/\.|-|\{|\}|\s/g, "_");
}

function getPathToMethodName(m, path) {
  if (path === "/" || path === "") return m;

  let cleanPath = path.replace(/\/$/, "");
  let segments = cleanPath.split("/").slice(1);

  let result = _.camelCase(segments.join("-"));
  console.log(result);
  return m.toLowerCase() + result[0].toUpperCase() + result.substring(1);
}

module.exports.getViewForSwagger = getViewForSwagger;
