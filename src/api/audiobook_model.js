const bookModel = (() => {
  let id = 0;
  let items = {};
  let raw_body = {};

  const init = (it) => {
    items = it;
    raw_body = {
      "fields": {
        "title": {
          "es-MX": items[0]
        },
        "is_original": {
          "es-MX": items[6],
        },
        "street_date": {
          "es-MX": items[7],
        },
        "cost_per_play": {
          "es-MX": items[4],
        },
        "authors": {
          "es-MX": items[1].split(','),
        },
        "narrators": {
          "es-MX": items[2].split(','),
        },
        "duration": {
          "es-MX": items[3],
        },
        "cover": {
          "es-MX": items[5],
        }
      }
    }
  }

  const editValue = (property, value) => {
    if(raw_body.fields.hasOwnProperty(property)){
      raw_body.fields[property] = value;
    }
  }

  const getId = () => {
    return id;
  }

  const getBody = () => {
    return raw_body;
  }

  return {init, getId, getBody, editValue}
})();

export default bookModel;