function saveState(state) {
  console.log(JSON.stringify(state));
  document.cookies = JSON.stringify(state);
}


function loadState() {
  try {
    return JSON.parse(document.cookies);
  } catch(err) {
    return {
      principal: "OK"
      
    }
  }
}
