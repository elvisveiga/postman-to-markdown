"use strict";

function subtitle(content) {
  return `<span style="
  color: rgb(200 200 200);
  font-weight: 600;
  font-family: Arial;
  font-size: 12pt;">${content}</span>`;
}

function methodFormat(content) {
  if (content != undefined) {
    switch (content.toUpperCase()) {
      case "GET":
        return `<span style="color: #04b74c;font-weight: 600;font-family: Arial;">${content}</span>`;
      case "POST":
        return `<span style="color: #f59a12;font-weight: 600;font-family: Arial;">${content}</span>`;
      case "PUT":
        return `<span style="color: #106ebe;font-weight: 600;font-family: Arial;">${content}</span>`;
      case "DELETE":
        return `<span style="color: #da0a00;font-weight: 600;font-family: Arial;">${content}</span>`;
    }
  }
  return "";
}

module.exports = {
  subtitle,
  methodFormat,
};
