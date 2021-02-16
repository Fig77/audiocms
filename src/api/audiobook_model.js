const bookModel = (() => {
  let id = 0;
  let raw_body = {};

  const init = (it) => {
    let items = it;
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
          "es-MX": parseInt(items[4]),
        },
        "authors": {
          "es-MX": items[1].split(','),
        },
        "narrators": {
          "es-MX": items[2].split(','),
        },
        "duration": {
          "es-MX": parseInt(items[3]),
        },
        "cover": {
          "es-MX": items[5],
        }
      }
    }
  }

  const getBody = () => {
    return raw_body;
  }

  return {init, getBody}
})();

export default bookModel;