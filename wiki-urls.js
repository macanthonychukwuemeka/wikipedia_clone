
  //  https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=%27+searchInput+%27&utf8=%27
  // list=search - perform a full text search
  // srsearch="inputValue" - search for page titles or content matching  this value.
  // srlimit=20 How many total pages to return.
  // format=json json response
  // "origin=*" fix cors errors

const page_url = 'href=http://en.wikipedia.org/?curid=${pageid}';