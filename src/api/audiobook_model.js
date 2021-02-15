
const bookModel = ((items) => {
  const id = items.id;

  const raw_body {
    "fields": {
      "title": {
        "es-MX": `${items.title}`
      },
      "is_original": {
        "es-MX": {items.original}
      },
      "street_date": {
        "es-MX": `${items.street_date}`
      },
      "cost_per_play": {
        "es-MX": {items.cost_per_play}
      },
      "authors": {
        "es-MX": {items.authors}
      },
      "narrators": {
        "es-MX": {items.narrators}
      },
      "duration": {
        "es-MX": {items.duration}
      },
      "cover": {
        "es-MX": `${items.cover}`
      }
    }
  }
  const editValue = (property, value) => {
    if(raw_body[fields].hasOwnProperty(property)){
      raw_body[fields][property] = value;
    }
  }

  const getId = () => {
    return id;
  }

  const getBody = () => {
    return raw_body;
  }

  return {getId, getBody, editValue}
}());

export default bookModel;