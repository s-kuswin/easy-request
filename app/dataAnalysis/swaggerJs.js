/* eslint-disable no-useless-return */
import _ from "lodash";
let pageMap = new Map();

let getViewForSwagger = function(opt) {
  const { swagger, profix } = opt;
  let subDocumentData = getSubDocument(swagger.tags, swagger.info)
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
      _.each(op.tags, (tag) => {
        let page = pageMap.get(tag)
        if(page) {
          subDocumentData[page].methods.push(method);
        }
      })
    });
  });
  return subDocumentData;
};


function getSubDocument(tags, info) {
  let documentData = {}
  _.each(tags,(tag) => {
    const pageName = normalizeName(tag.name)
    pageMap.set(tag.name, pageName)
    documentData[pageName] = {
      title: tag.description,
      className: pageName,
      description: `${ info.title } - ${ info.description } - ${ tag.name }` ,
      methods:[]
    }
  })

  return documentData
}

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

export default {
  getViewForSwagger
}
