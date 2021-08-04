"use strict";
const fs = require("fs");
const chalk = require(`chalk`);
const { subtitle, methodFormat } = require("../components");

String.prototype.toUpperInitialCase = function () {
  return this.substr(0, 1).toUpperCase() + this.substr(1);
};
/**
 * Create structure of markdown documentation
 * @param {object} docJson
 * @return {strinf} structure of markdown
 */
var _docJson = null;
function createStructureOfMarkdown(docJson) {
  _docJson = docJson;
  let markdown = "";
  markdown += `# ${docJson.info.name}\n`;
  markdown +=
    docJson.info.description !== undefined
      ? `_${docJson.info.description || ""}_\n`
      : "_Make things easier for your teammates with a complete collection description._";
  markdown += readItems(docJson.item);

  return markdown;
}

function ReadCollectionAuthentication() {
  let markdown = "";
  const { auth } = _docJson;
  if (auth != undefined) {
    let tokenType = auth[auth.type][0];

    markdown += `**Authorization** `;
    markdown +=
      subtitle(
        `${auth.type.toUpperInitialCase()} ${tokenType.key.toUpperInitialCase()}`
      ) + `\n`;
  }
  return markdown;
}

/**
 * Read auth of each method
 * @param {object} auth
 */
function readAuthorization(auth) {
  let markdown = "";
  if (auth) {
    //markdown += `### 🔑 Authentication ${auth.type}\n`;
    markdown += `🔑 **Authentication** ${auth.type}\n`;
    markdown += `\n`;
    markdown += `|Param|value|Type|\n`;
    markdown += `|---|---|---|\n`;
    if (auth.bearer) {
      auth.bearer.map((auth) => {
        markdown += `|${auth.key}|${auth.value}|${auth.type}|\n`;
      });
    }
    markdown += `\n`;
    markdown += `\n`;
  }

  return markdown;
}

/**
 * Read request of each method
 * @param {object} request information
 * @return {string} info of data about request options
 */
function readRequestOptions(request) {
  let markdown = "";
  if (request) {
    if (request.header.length > 0) {
    //   markdown += `### Request Headers\n`;
      markdown += `**Request Headers**\n`;
      markdown += `|KEY|VALUE|\n`;
      markdown += `|---|---|\n`;
      request.header.map((header) => {
        markdown += `|${header.key}|${header.value}|\n`;
      });
    }
  }
  return markdown;
}

function readQueryParams(url) {
  let markdown = "";
  if (url.query) {
    //markdown += `### Query Params\n`;
    markdown += `**Query Params**\n`;
    markdown += `\n`;
    markdown += `|Param|value|\n`;
    markdown += `|---|---|\n`;
    url.query.map((query) => {
      markdown += `|${query.key}|${query.value}|\n`;
    });
    markdown += `\n`;
    markdown += `\n`;
  }

  return markdown;
}

/**
 * Read objects of each method
 * @param {object} body
 */
function readFormDataBody(body) {
  let markdown = "";

  if (body) {
    if (body.mode === "raw") {
    //   markdown += `### Body (**${body.mode}**)\n`;
      markdown += `**Body** (**${body.mode}**)\n`;
      markdown += `\n`;
      markdown += `\`\`\`json\n`;
      markdown += `${body.raw}\n`;
      markdown += `\`\`\`\n`;
      markdown += `\n`;
    }

    if (body.mode === "formdata") {
      markdown += `### Body ${body.mode}\n`;
      markdown += `\n`;
      markdown += `|Param|value|Type|\n`;
      markdown += `|---|---|---|\n`;
      body.formdata.map((form) => {
        markdown += `|${form.key}|${
          form.type === "file"
            ? form.src
            : form.value !== undefined
            ? form.value.replace(/\\n/g, "")
            : ""
        }|${form.type}|\n`;
      });
      markdown += `\n`;
      markdown += `\n`;
    }
  }

  return markdown;
}

/**
 * Read methods of each item
 * @param {object} post
 */
function readMethods(method) {
  let markdown = "";

  markdown += `\n`;
  markdown += `## ${method.name}\n`;
  markdown += ReadCollectionAuthentication();
  markdown += `\n`;
  markdown += `${method.request.description || ""}\n`;
  markdown += `\n`;
  markdown += `**${methodFormat(method.request.method)}**\n`;
  markdown += `>\`\`\`\n`;
  markdown += `>${method.request.url.raw}\n`;
  markdown += `>\`\`\`\n`;
  markdown += readRequestOptions(method.request);
  markdown += readFormDataBody(method.request.body);
  markdown += readQueryParams(method.request.url);
  markdown += readAuthorization(method.request.auth);
  markdown += `\n`;
  markdown += `--------------------------------------------------------------\n`;
  markdown += `\n`;

  return markdown;
}

/**
 * Read items of json postman
 * @param {object} items
 */
function readItemsOld(items) {
  let markdown = "";
  items.forEach((parentItem) => {
    if (parentItem.item) {
      markdown += `# 📁 Collection: ${parentItem.name} \n`;
      markdown += `\n`;

      parentItem.item.forEach((item) => {
        markdown += readMethods(item);
      });
    } else {
      markdown += readMethods(parentItem);
    }
  });

  return markdown;
}

function readItems(items, region) {
  let markdown = "";
  let internalRegion = `#${region == undefined ? "" :  region }`;
  items.forEach((parentItem) => {
    if (parentItem.item != undefined) {
      markdown += `\n`;
      markdown += `${internalRegion} 📁 ${parentItem.name} \n`;
      markdown += `\n`;
      markdown += readItems(parentItem.item, internalRegion);
    } else {
      markdown += readMethods(parentItem);
    }
    //return markdown;
  });

  return markdown;
}

/**
 * Create file
 * @param {string} content
 */
function writeFile(content, fileName) {
  fs.writeFile(`${fileName}.md`, content, function (err) {
    if (err) throw err;
    console.log(
      chalk.green(`Documentation was created correctly ${fileName}.md`)
    );
  });
}

module.exports = {
  createStructureOfMarkdown,
  writeFile,
};
